import { useState, useEffect } from "react";
import withApollo from "../hoc/withApollo";
import { useLazyGetUser } from "../apollo/actions";
import styles from "../styles/header.module.css";
import { faPhone, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderBar2() {
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

            {hasResponse && (
              <div className="navbar-item  is-dark">
                {user && (
                  <>
                    <span className="nav-link mr-4">
                      Welcome {user.username}
                    </span>
                    {user.role === "admin" && (
                      <div className="navbar-item  has-text-white has-dropdown is-hoverable">
                        <a className="navbar-link  has-text-white">
                          Administration
                        </a>

                        <div className="navbar-dropdown  has-background-black">
                          <a
                            className="navbar-item has-text-white  "
                            href="/products/createProduct"
                            onClick={toggleBurgerMenu}
                          >
                            CreateProduct
                          </a>
                        </div>
                      </div>
                    )}

                    <a href="/logout" className="nav-link btn btn-danger">
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withApollo(HeaderBar2);
