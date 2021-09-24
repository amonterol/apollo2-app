import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useGetProduct } from "../../../apollo/actions";

import { getDataFromTree } from "@apollo/react-ssr";
import withApollo from "../../../hoc/withApollo";

import Layout from "../../../components/Layout";
import Description from "../../../components/Description";
import Shipping from "../../../components/Shipping";
import Spinner from "../../../components/Spinner";
import styles from "../../../styles/productdetail.module.css";

function ProductDetail({ query }) {
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

  const { data } = useGetProduct({
    variables: { id: query.id },
  });
  const product = (data && data.product) || {};

  return (
    <Layout>
      <div>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a>Product</a>
              </Link>
            </li>
            <li>
              <a href="#">Product detail</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="columns">
        <div className="column">
          <div className="columns is-gapless">
            <div className="column is-one-fifth">
              <div className="columns mt-3">
                <div className="column">
                  <a href="/" className="is-white">
                    <figure className="image is-fullwidth is-128by128">
                      <img src={product.photo} alt="Product image" />
                    </figure>
                  </a>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <a href="/" className="is-white">
                    <figure className="image is-fullwidth is-128by128">
                      <img src={product.photo} alt="Product image" />
                    </figure>
                  </a>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <a href="/" className="is-white">
                    <figure className="image is-fullwidth is-128by128">
                      <img src={product.photo} alt="Product image" />
                    </figure>
                  </a>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <a href="/" className="is-white">
                    <figure className="image is-fullwidth is-128by128">
                      <img src={product.photo} alt="Product image" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-four-fifths">
              <figure className="image is-fullwidth is-3by4 ml-3">
                <img src={product.photo} alt="Product image" />
              </figure>
            </div>
          </div>
        </div>

        <div className="column">
          <div>
            <h1 className="mt3">{product.name}</h1>
            <div className="columns mt-5">
              <div className="column">
                <div className="mr-3">
                  <label className="has-text-weight-medium mr-3">Precio:</label>
                  <span>${product.price}</span>
                </div>
                <div className="columns is-gapless mt-4">
                  <div className="column is-1 has-text-weight-medium">
                    <label>Color:</label>
                  </div>

                  <div className="column is-1">
                    <a href="/">
                      <div className={styles.circuloAmarillo}></div>
                    </a>
                  </div>
                  <div className="column is-1">
                    <a href="/">
                      <div className={styles.circuloAzul}></div>
                    </a>
                  </div>
                  <div className="column is-1">
                    <a href="/">
                      <div className={styles.circuloNegro}></div>
                    </a>
                  </div>
                  <div className="column is-1">
                    <a href="/">
                      <div className={styles.circuloRojo}></div>
                    </a>
                  </div>
                  <div className="column"></div>
                </div>
                {/* Size */}
                <div className="columns is-gapless  mt-5">
                  <div className="column is-1 has-text-weight-medium mr-3">
                    <label>Size:</label>
                  </div>

                  <div className="column is-1">
                    <a href="/">
                      <div>XS</div>
                    </a>
                  </div>
                  <div className="column is-1">
                    <a href="/">
                      <div>S</div>
                    </a>
                  </div>
                  <div className="column is-1">
                    <a href="/">
                      <div>M</div>
                    </a>
                  </div>
                  <div className="column is-1">
                    <a href="/">
                      <div>L</div>
                    </a>
                  </div>
                  <div className="column is-1">
                    <a href="/">
                      <div>XL</div>
                    </a>
                  </div>
                  <div className="column"></div>
                </div>

                <div className="columns mt-5">
                  <div className="column">
                    <div className="mr-3 has-text-weight-medium">
                      Cantidad: <Spinner />{" "}
                    </div>
                  </div>
                </div>

                <div className="columns mt-5">
                  <div className="column">
                    <div className="mr-3 has-text-weight-medium">
                      Status: <p>{product.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns mt-5">
              <div className="column">
                <div className="is-flex is-justify-content-start">
                  <button className="button is-danger is-hovered is-size-5">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container has-text-centered ">
          <div className="columns is-centered ">
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a href="/" className="navbar-item is-tab ">
                    <button
                      className="button has-text-weight-medium"
                      onClick={onClickHandlerMujeres}
                    >
                      Description
                    </button>
                  </a>
                  <a href="/" className="navbar-item is-tab ">
                    <button
                      className="button has-text-weight-medium"
                      onClick={onClickHandlerHombres}
                    >
                      Shipping
                    </button>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          {/*  Description*/}
          {state === "women" && <Description />}

          {/* Shipping */}
          {state === "men" && <Shipping />}
        </div>
      </section>
    </Layout>
  );
}

ProductDetail.getInitialProps = async ({ query }) => {
  return { query };
};

export default withApollo(ProductDetail, { getDataFromTree });
