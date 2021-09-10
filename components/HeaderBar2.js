import styles from "../styles/header.module.css";
import { faPhone, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderBar2() {
  function toggleBurgerMenu() {
    document.querySelector("#navbarBasicExample").classList.toggle("is-active"); //.navbar-menu"
  }

  return (
    <div>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-start">
          <div className="navbar-item">
            <a href="mailto:info@tiendachayito.com">info@tiendachayito.com</a>
          </div>

          <FontAwesomeIcon icon={faPhone} className={styles.iconPhone} />
          <a className="navbar-item" href="tel:(506)2445-0340">
            (506)2445-0340
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleBurgerMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="/">About us</a>
            </div>
            <div className="navbar-item">
              <a href="/">Contact us</a>
            </div>

            <div className="navbar-item">
              <a href="/login">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ width: "35px", height: "0.8rem" }}
                />
                <span>LOGIN</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderBar2;
