import { Button, Card } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductCard2({ product }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.photo} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <p>{product.description} </p>
            <p>{product.price}</p>
          </Card.Text>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              <a href="/cartPage">
                <span>Agregar al carrito</span>
              </a>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProductCard2;
