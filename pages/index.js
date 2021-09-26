import { useState } from "react";
import MainLayout from "../components/shared/MainLayout";
import Layout from "../components/Layout";
import {
  faShoppingCart,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NovedadesMujeres from "../components/NovedadesMujeres";
import NovedadesHombres from "../components/NovedadesHombres";
import {
  useGetHighlight,
  useGetHighlightHombres,
  useGetHighlightMujeres,
} from "../apollo/actions";
import { getDataFromTree } from "@apollo/react-ssr";
import withApollo from "../hoc/withApollo";
import HighlightCard from "../components/shared/HighlightCard";
import Link from "next/link";
import styles from "../styles/productdetail.module.css";

const useGetInitialDataNovedadesMujeres = () => {
  const { data: dataM } = useGetHighlightMujeres({ variables: { limit: 5 } });
  const products = (dataM && dataM.highlightMujeres.products) || [];
  return { products };
};

const useGetInitialDataNovedadesHombres = () => {
  const { data: dataH } = useGetHighlightHombres({ variables: { limit: 5 } });
  const products = (dataH && dataH.highlightHombres.products) || [];
  return { products };
};

function HomePage(props) {
  const { products: productosM } = useGetInitialDataNovedadesMujeres();
  const { products: productosH } = useGetInitialDataNovedadesHombres();
  debugger;

  const [state, setState] = useState("women");

  const mySpecialFunctionMujeres = () => {
    console.log("you clicked the button Women!");
    setState("women");
  };

  const mySpecialFunctionHombres = () => {
    console.log("you clicked the button Men!");
    setState("men");
  };

  const onClickHandlerMujeres = (e) => {
    mySpecialFunctionMujeres();
  };

  const onClickHandlerHombres = (e) => {
    mySpecialFunctionHombres();
  };

  const onClickHandlerNovedadesMujeres = (e) => {
    mySpecialFunctionMujeres();
  };

  const onClickHandlerNovedadesHombres = (e) => {
    mySpecialFunctionHombres();
  };

  return (
    <MainLayout>
      <div className="columns">
        <div className="column">
          <div className="card is-fullimage">
            <div className="card-image">
              <figure className="image is-5by3 m-0">
                <img
                  src="https://res.cloudinary.com/abmontero/image/upload/v1632349547/fdsFolder/ujwjri1zimwbxgbtlqxp.jpg"
                  alt="Placeholder image"
                />
              </figure>
              <div className="cards-stacked  ">
                <div className="cards-content ml-6 ">
                  <div className="media-content">
                    <p className="subtitle is-6">NUEVA COLECCION</p>
                    <p className="title is-4">ROPA DE MUJER</p>
                    <a href="/products">
                      <p className="subtitle is-6"> Descúbrelo ahora</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card is-fullimage">
            <div className="card-image">
              <figure className="image is-5by3 m-0">
                <img
                  src="https://res.cloudinary.com/abmontero/image/upload/v1632349530/fdsFolder/yznvssjohkp47ecd619f.jpg"
                  alt="Placeholder image"
                />
              </figure>
              <div className="cards-stacked">
                <div className="cards-content">
                  <div className="media-content">
                    <p className="subtitle is-6">NUEVA COLECCION</p>
                    <p className="title is-4">ROPA DE HOMBRE</p>
                    <a href="/products">
                      <p className="subtitle is-6"> Descúbrelo ahora</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          {" "}
          <figure className="image is-4by3">
            <img
              src="https://res.cloudinary.com/abmontero/image/upload/v1630708815/fdsFolder/rpcsbeopghbgztbwmmwb.png"
              alt="Description"
            />
          </figure>
        </div>
        <div className="column">
          {" "}
          <figure className="image is-4by3">
            <img
              src="https://res.cloudinary.com/abmontero/image/upload/v1632361558/vau8opd6oqjgtsdbjbfq.png"
              alt="Description"
            />
          </figure>
        </div>
        <div className="column">
          {" "}
          <figure className="image is-4by3">
            <img
              src="https://res.cloudinary.com/abmontero/image/upload/v1632360709/qb75lmm323hwopzfmtrx.png"
              alt="Description"
            />
          </figure>
        </div>
      </div>
      {/* PRODUCTOS DESTACADOS */}
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">PRODUCTOS DESTACADOS</h2>
          <div className="columns is-centered ">
            <Link href="/products">
              <a className="navbar-item is-tab is-size-4">WOMEN'S CLOTHING</a>
            </Link>
          </div>

          <div className="columns is-centered" style={{ padding: 2 }}>
            {productosM.map((product) => (
              <div key={product._id} className="column is-3">
                <Link href="/products/[id]" as={`/products/${product._id}`}>
                  <a>
                    <HighlightCard product={product} />
                  </a>
                </Link>
              </div>
            ))}
          </div>

          <div className="columns is-centered ">
            <Link href="/products">
              <a className="navbar-item is-tab is-size-4 ">MEN'S CLOTHING</a>
            </Link>
          </div>

          <div className="columns is-centered" style={{ padding: 2 }}>
            {productosH.map((product) => (
              <div key={product._id} className="column is-3">
                <Link href="/products/[id]" as={`/products/${product._id}`}>
                  <a>
                    <HighlightCard product={product} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NEW ARRIVALS */}
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">PRODUCTOS DESTACADOS</h2>
          <div className="columns is-centered ">
            <Link href="/products">
              <a className="navbar-item is-tab is-size-4">WOMEN'S CLOTHING</a>
            </Link>
          </div>

          <div className="columns is-centered" style={{ padding: 2 }}>
            {productosM.map((product) => (
              <div key={product._id} className="column is-3">
                <Link href="/products/[id]" as={`/products/${product._id}`}>
                  <a>
                    <HighlightCard product={product} />
                  </a>
                </Link>
              </div>
            ))}
          </div>

          <div className="columns is-centered ">
            <Link href="/products">
              <a className="navbar-item is-tab is-size-4 ">MEN'S CLOTHING</a>
            </Link>
          </div>

          <div className="columns is-centered" style={{ padding: 2 }}>
            {productosH.map((product) => (
              <div key={product._id} className="column is-3">
                <Link href="/products/[id]" as={`/products/${product._id}`}>
                  <a>
                    <HighlightCard product={product} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      s
      <div className="container has-text-centered">
        <button className="button">
          <a href="/cartPage">
            <span>Shop More</span>
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="me-2"
              style={{ width: "40px" }}
            />
          </a>
        </button>
      </div>
      <div className="column"></div>
    </MainLayout>
  );
}

export default withApollo(HomePage, { getDataFromTree });
