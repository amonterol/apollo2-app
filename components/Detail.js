import Spinner from "./Spinner";
import styles from "../styles/productdetail.module.css";

function Detail({ product }) {
  return (
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
  );
}
export default Detail;
