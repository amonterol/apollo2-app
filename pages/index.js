import { useState } from "react";
import Layout from "../components/Layout";
import {
  faShoppingCart,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DestacadosWomen from "../components/DestacadosWomen";
import DestacadosMen from "../components/DestacadosMen";
import NovedadesMujeres from "../components/NovedadesMujeres";
import NovedadesHombres from "../components/NovedadesHombres";

function HomePage(props) {
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
      <div className="columns">
        <div className="column">
          {" "}
          <figure className="image is-5by3">
            <img
              src="https://picsum.photos/800/600/?random"
              alt="Description"
            />
          </figure>
        </div>
        <div className="column">
          {" "}
          <figure className="image is-5by3">
            <img
              src="https://picsum.photos/800/600/?random"
              alt="Description"
            />
          </figure>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          {" "}
          <figure className="image is-16by9">
            <img
              src="https://picsum.photos/800/600/?random"
              alt="Description"
            />
          </figure>
        </div>
        <div className="column">
          {" "}
          <figure className="image is-16by9">
            <img
              src="https://picsum.photos/800/600/?random"
              alt="Description"
            />
          </figure>
        </div>
        <div className="column">
          {" "}
          <figure className="image is-16by9">
            <img
              src="https://picsum.photos/800/600/?random"
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
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item is-tab ">
                    <button className="button" onClick={onClickHandlerMujeres}>
                      WOMEN'S CLOTHING
                    </button>
                  </a>
                  <a className="navbar-item is-tab ">
                    <button className="button" onClick={onClickHandlerHombres}>
                      MEN'S CLOTHING
                    </button>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          {/*  WOMEN'S CLOTHING*/}
          {state === "women" && <DestacadosWomen />}

          {/* MENS CLOTHING */}
          {state === "men" && <DestacadosMen />}
        </div>
      </section>

      {/* NEW ARRIVALS */}

      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">NEW ARRIVALS</h2>
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
                      className="button"
                      onClick={onClickHandlerNovedadesMujeres}
                    >
                      WOMEN'S CLOTHING
                    </button>
                  </a>
                  <a className="navbar-item is-tab ">
                    <button
                      className="button"
                      onClick={onClickHandlerNovedadesHombres}
                    >
                      MEN'S CLOTHING
                    </button>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          {/*  WOMEN'S CLOTHING*/}
          {state === "women" && <NovedadesMujeres />}

          {/* MENS CLOTHING */}
          {state === "men" && <NovedadesHombres />}
        </div>
      </section>
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
    </Layout>
  );
}

export default HomePage;
