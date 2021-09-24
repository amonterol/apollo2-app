import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import withApollo from "../hoc/withApollo";
import { useLazyGetUser } from "../apollo/actions";

import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/nav.module.css";

function NavBar(props) {
  function toggleBurgerMenu() {
    document.querySelector("#navbarBasic").classList.toggle("is-active"); //.navbar-menu"
  }

  const [user, setUser] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, { data, error }] = useLazyGetUser();
  useEffect(() => {
    getUser();
  }, []);

  if (data) {
    if (data.user && !user) {
      setUser(data.user);
    }
    if (!data.user && user) {
      setUser(null);
    }
    if (!hasResponse) {
      setHasResponse(true);
    }
  }
  return (
    <div>
      <nav
        className="navbar has-shadow  "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger "
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic"
            onClick={toggleBurgerMenu}
          >
            <span className="has-text-weight-bold" aria-hidden="true"></span>
            <span className="has-text-weight-bold" aria-hidden="true"></span>
            <span className="has-text-weight-bold" aria-hidden="true"></span>
          </a>
          <a className="navbar-item" href="/">
            <span className="navbar-item">
              <img
                className="is-fullwidth"
                src="https://res.cloudinary.com/abmontero/image/upload/v1632186116/fdsFolder/logo640-320_b7id7a.png"
                alt="Tienda Chayito"
              />
            </span>
            <span className="navbar-item is-size-3  has-text-weight-semibold">
              Tienda Chayito
            </span>
          </a>
        </div>

        <div id="navbarBasic" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item has-text-weight-semibold">Home</a>
            </Link>

            <Link href="/products">
              <a className="navbar-item has-text-weight-semibold">Products</a>
            </Link>
            <Link href="/products">
              <a className="navbar-item has-text-weight-semibold">About</a>
            </Link>
            <Link href="/products">
              <a className="navbar-item has-text-weight-semibold">Contact Us</a>
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="control">
                <input className="input" type="text" placeholder="Search..." />
              </div>
              <div className="navbar-item control">
                <a href="/">
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ width: "1.0rem", height: "1.0rem" }}
                  />
                </a>
              </div>
            </div>

            {hasResponse && (
              <div className="navbar-item  is-dark">
                {user && (
                  <>
                    {(user.role === "admin" || user.role === "gerente") && (
                      <div className="navbar-item has-dropdown is-hoverable mr-3">
                        <a className="navbar-link ">Administration</a>

                        <div className="navbar-dropdown">
                          <Link href="/products/createProduct">
                            <a
                              className="navbar-item "
                              onClick={toggleBurgerMenu}
                            >
                              CreateProduct
                            </a>
                          </Link>
                          <Link href="/administration/dashboard">
                            <a
                              className="navbar-item "
                              onClick={toggleBurgerMenu}
                            >
                              Gestion de Productos
                            </a>
                          </Link>
                        </div>
                      </div>
                    )}

                    <a href="/logout" className="nav-link button is-link">
                      <span>Sign Out</span>
                    </a>
                  </>
                )}
                {(error || !user) && (
                  <>
                    <div className="navbar-item">
                      <a href="/login">
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ width: "35px", height: "0.8rem" }}
                        />
                        <span>LOGIN</span>
                      </a>
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="navbar-item">
              <div>
                <a href="/">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="me-2"
                    style={{ width: "40px" }}
                  />
                  <span>7</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withApollo(NavBar);
