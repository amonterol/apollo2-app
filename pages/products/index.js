import Layout from "../../components/Layout";
import {
  faArrowCircleDown,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "../../components/ProductCard";
import ColoredLine from "../../components/ColoredLine";

const apiCall = () => {
  return new Promise((res, req) => {
    setTimeout(() => {
      res({ testingData: "Just some testing data" });
    }, 1000);
  });
};

function Products(props) {
  const products = [
    {
      id: "1",
      name: "Yeti Hondo",
      description: "soo nice",
      status: "AVAILABLE",
      price: 3423,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg",
    },
    {
      id: "2",
      name: "Airmax 270",
      description: "Great shoes!",
      status: "AVAILABLE",
      price: 5234,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg",
    },
    {
      id: "3",
      name: "KITH Hoodie",
      description: "Love this hoodie",
      status: "AVAILABLE",
      price: 23562,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg",
    },
    {
      id: "4",
      name: "Fanorak",
      description: "Super hip. Comes in a number of colours",
      status: "AVAILABLE",
      price: 252342,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png",
    },
    {
      id: "5",
      name: "Nike Vapormax",
      description: "Kind of squeaky on some floors",
      status: "AVAILABLE",
      price: 83456,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg",
    },
    {
      id: "6",
      name: "Yeti Cooler",
      description: "Who spends this much on a cooler?!",
      status: "AVAILABLE",
      price: 75654,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg",
    },
    {
      id: "7",
      name: "Naked and Famous Denim",
      description: "Japanese Denim, made in Canada",
      status: "AVAILABLE",
      price: 10924,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg",
    },
    {
      id: "8",
      name: "Rimowa Luggage",
      description: "S T E A L T H",
      status: "AVAILABLE",
      price: 47734,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png",
    },
    {
      id: "9",
      name: "Black Hole ",
      description: "Outdoorsy ",
      status: "AVAILABLE",
      price: 4534,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg",
    },
    {
      id: "10",
      name: "Nudie Belt",
      description: "Sick design",
      status: "AVAILABLE",
      price: 5234,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg",
    },
    {
      id: "11",
      name: "Goose",
      description: "Keep warm.",
      status: "AVAILABLE",
      price: 74544,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg",
    },
    {
      id: "12",
      name: "Ultraboost",
      description: "blacked out",
      status: "AVAILABLE",
      price: 6344,
      photo:
        "http://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg",
    },
  ];

  return (
    <Layout>
      <ColoredLine />
      {props.testingData}
      <div>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li className="is-active">
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <div className="columns">
          <div className="column">
            <aside className="menu">
              <h1 className="menu-label">Categorías</h1>
              <p className="menu-label">Género</p>
              <ul className="menu-list">
                <li>
                  <a>Mujer</a>
                </li>
                <li>
                  <a>Hombre</a>
                </li>
              </ul>
              <p className="menu-label">Product</p>
              <ul className="menu-list">
                <li>
                  <a>Bag</a>
                </li>
                <li>
                  <a className="is-active">Sweather</a>
                </li>
                <li>
                  <a>Sunglass</a>
                </li>
              </ul>
              <p className="menu-label">Rebajas</p>
              <ul className="menu-list">
                <li>
                  <a>Bag</a>
                </li>
                <li>
                  <a>Sweather</a>
                </li>
                <li>
                  <a>Sunglass</a>
                </li>
              </ul>
            </aside>
          </div>
          <div className="column is-three-quarters">
            <nav className="navbar is-transparent">
              <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item" href="/">
                    Todos
                  </a>
                  <a className="navbar-item" href="/">
                    Mujeres
                  </a>
                  <a className="navbar-item" href="/">
                    Hombres
                  </a>
                </div>
              </div>
            </nav>
            <section className="pb-5">
              <div className="row">
                {products.map((product) => (
                  <div key={product.id} className="column is-3">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Products.getInitialProps = async () => {
  console.log("GET INITIAL PROPS PRODUCTS");
  const data = await apiCall();

  return {
    ...data,
  };
};

export default Products;
