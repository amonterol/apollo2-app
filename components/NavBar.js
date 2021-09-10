import React from "react";
import Link from "next/link";

import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/nav.module.css";

function NavBar(props) {
  function toggleBurgerMenu() {
    document.querySelector("#navbarBasic").classList.toggle("is-active"); //.navbar-menu"
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
                src="logo640-320.png"
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

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link has-text-weight-semibold">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item " href="/" onClick={toggleBurgerMenu}>
                  About
                </a>
                <a className="navbar-item" href="/" onClick={toggleBurgerMenu}>
                  Jobs
                </a>
                <a className="navbar-item" href="/" onClick={toggleBurgerMenu}>
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/" onClick={toggleBurgerMenu}>
                  Report an issue
                </a>
              </div>
            </div>
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

export default NavBar;
