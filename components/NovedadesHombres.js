import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NovedadesHombres() {
  return (
    <div className="columns is-centered" style={{ padding: 2 }}>
      <div className="column is-3">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://source.unsplash.com/RWnpyGtY1aU"
                alt="Placeholder image"
                className="modal-button"
                data-target="modal-image2"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>Click on image above</h4>
              <p>
                Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut
                placerat orci nulla pellentesque dignissim enim.
              </p>
              <button className="button is-link">
                <a href="/cartPage" className="card-footer-item">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="me-2"
                    style={{ width: "40px" }}
                  />
                  <span>ADD TO CART</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="column is-3">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://source.unsplash.com/6Ticnhs1AG0"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>Tempor orci dapibus faber in.</h4>
              <p>
                Ut venenatis tellus in metus vulputate. Amet consectetur
                adipiscing elit pellentesque.
              </p>
              <button className="button is-link">
                <a href="/cartPage" className="card-footer-item">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="me-2"
                    style={{ width: "40px" }}
                  />
                  <span>ADD TO CART</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="column is-3">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>Click anywhere on card</h4>
              <p>
                Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut
                placerat orci nulla pellentesque dignissim enim.
              </p>
              <button className="button is-link">
                <a href="/cartPage" className="card-footer-item">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="me-2"
                    style={{ width: "40px" }}
                  />
                  <span>ADD TO CART</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="column is-3">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://source.unsplash.com/hLyd1LukQ7E"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>Click anywhere on card</h4>
              <p>
                Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut
                placerat orci nulla pellentesque dignissim enim.
              </p>
              <button className="button is-link">
                <a href="/cartPage" className="card-footer-item">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="me-2"
                    style={{ width: "40px" }}
                  />
                  <span>ADD TO CART</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="column is-3">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                alt="butterfly image"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>Click anywhere on card</h4>
              <p>
                Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut
                placerat orci nulla pellentesque dignissim enim.
              </p>
              <button className="button is-link">
                <a href="/cartPage" className="card-footer-item">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="me-2"
                    style={{ width: "40px" }}
                  />
                  <span>ADD TO CART</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NovedadesHombres;
