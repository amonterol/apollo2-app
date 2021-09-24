import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductCard({ product }) {
  return (
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image is-5by4">
          <img src={product.photo} alt="Product image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.status}</p>
          <p>{product.price}</p>
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
  );
}
export default ProductCard;
