import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Description from "../../components/Description";
import Shipping from "../../components/Shipping";
import Detail from "../../components/Detail";

import styles from "../../styles/productdetail.module.css";

function ProductDetail({ query }) {
  //const router = useRouter();
  //const { id } = router.query;
  const { id } = query;

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
    <Layout>
      <h1>La identidad es: {id}</h1>
      <div>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
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
              <div className="columns">
                <div className="column">
                  <div className="card is-shady">
                    <a className="is-white">
                      <figure className="image is-fullwidth">
                        <img
                          src="http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg"
                          alt="Product image"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="card is-shady">
                    <a className="is-white">
                      <figure className="image is-fullwidth">
                        <img
                          src="http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg"
                          alt="Product image"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="card is-shady">
                    <a className="is-white">
                      <figure className="image is-fullwidth">
                        <img
                          src="http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg"
                          alt="Product image"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="card is-shady">
                    <a className="is-white">
                      <figure className="image is-fullwidth ">
                        <img
                          src="http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg"
                          alt="Product image"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-four-fifths">
              <figure className="image is-fullwidth is-5by4">
                <img
                  src="http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg"
                  alt="Product image"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="column">
          <Detail />
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
                  <a className="navbar-item is-tab ">
                    <button
                      className="button has-text-weight-medium"
                      onClick={onClickHandlerMujeres}
                    >
                      Description
                    </button>
                  </a>
                  <a className="navbar-item is-tab ">
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

ProductDetail.getInitialProps = ({ query }) => {
  return { query };
};

export default ProductDetail;
