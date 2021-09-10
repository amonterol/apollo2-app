import styles from "../styles/header.module.css";

import { faPhone, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderBar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerContainerFluid}>
          <div className={styles.headerLeft}>
            <a
              className="navbar-sm-brand text-light text-decoration-none"
              href="mailto:info@tiendachayito.com"
            >
              info@tiendachayito.com
            </a>
            <FontAwesomeIcon
              icon={faPhone}
              className={styles.iconPhone}
              style={{ width: "40px" }}
            />
            <a
              className="navbar-sm-brand text-light text-decoration-none"
              href="tel:(506)2445-0340"
            >
              (506)2445-0340
            </a>
          </div>
          <div className={styles.headerRight}>
            <ul className={styles.ulTopMenu}>
              <li>
                <ul className={styles.ulInsideTopMenu}>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/about">Contact us</a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ width: "35px", height: "0.8rem" }}
                      />
                      <span>LOGIN</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderBar;
