import {
  useGetProduct,
  useUpdateProduct,
  useDeletePrduct,
  useCreateProduct,
} from "../../apollo/actions";

import withApollo from "../../hoc/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";

import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import ColoredLine from "../../components/ColoredLine";
import Link from "next/link";
import styles from "../../styles/productdetail.module.css";

function Products() {
  //CRUD
  const { data } = useGetProduct();
  const [updateProduct] = useUpdateProduct();
  const [deleteProduct] = useDeletePrduct();
  const [createProduct] = useCreateProduct();

  const products = (data && data.products) || [];

  return (
    <Layout>
      <ColoredLine />
      <button className="button is-info" onClick={createProduct}>
        Create Product
      </button>

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
                  <div key={product._id} className="column is-3">
                    <Link href="/products/[id]" as={`/products/${product._id}`}>
                      <a className={styles.cardLink}>
                        <ProductCard product={product} />
                      </a>
                    </Link>
                    <div>
                      <button
                        className="button is-danger"
                        onClick={() =>
                          deleteProduct({ variables: { id: product._id } })
                        }
                      >
                        Delete Product
                      </button>
                      <button
                        className="button is-warning"
                        onClick={() =>
                          updateProduct({ variables: { id: product._id } })
                        }
                      >
                        Update Product
                      </button>
                    </div>
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

export default withApollo(Products, { getDataFromTree });
