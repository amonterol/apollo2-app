import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetProducts } from "../../apollo/actions";

import withApollo from "../../hoc/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";

import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";

import Link from "next/link";
import styles from "../../styles/productdetail.module.css";
import AppPagination from "../../components/shared/Pagination";
import { userMutations } from "../../server/graphql/resolvers";

const useInitialData = (pagination) => {
  const { data: dataProducts, fetchMore } = useGetProducts({
    variables: { ...pagination },
    pollInterval: 5000,
  });

  const productsData = (dataProducts && dataProducts.products) || {
    products: [],
    count: 0,
  };
  return { ...productsData, fetchMore };
};

function Products() {
  const router = useRouter();
  const { pageNumber = 1, pageSize = 5 } = router.query;
  const [pagination, setPagination] = useState({
    pageNumber: parseInt(pageNumber, 10),
    pageSize: parseInt(pageSize, 10),
  });

  const { products, ...rest } = useInitialData(pagination);
  const count = rest.count;

  console.log("ESTE ES EL NUMERO DE PRODUCTOS", count);

  const onPageChange = (pageNumber, pageSize) => {
    router.push(
      "/products",
      `/products?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      { shallow: true }
    );

    /*
    router.push(
      {
        pathname: "/products",
        query: {
          pageNumber,
          pageSize,
        },
      },
      `/products?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      { shallow: true }
    );
*/
    setPagination({ pageNumber, pageSize });
  };

  return (
    <Layout>
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
                  <a href="/">Mujer</a>
                </li>
                <li>
                  <a href="/">Hombre</a>
                </li>
              </ul>
              <p className="menu-label">Product</p>
              <ul className="menu-list">
                <li>
                  <a href="/">Bag</a>
                </li>
                <li>
                  <a href="/" className="is-active">
                    Sweather
                  </a>
                </li>
                <li>
                  <a href="/">Sunglass</a>
                </li>
              </ul>
              <p className="menu-label">Rebajas</p>
              <ul className="menu-list">
                <li>
                  <a href="/">Bag</a>
                </li>
                <li>
                  <a href="/">Sweather</a>
                </li>
                <li>
                  <a href="/">Sunglass</a>
                </li>
              </ul>
            </aside>
          </div>
          <div className="column is-three-quarters">
            <nav className="navbar is-transparent">
              <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                  <Link href="/">
                    <a className="navbar-item">Todos</a>
                  </Link>
                  <Link href="/">
                    <a className="navbar-item">Mujeres</a>
                  </Link>
                  <Link href="/">
                    <a className="navbar-item">Hombres</a>
                  </Link>
                </div>
              </div>
            </nav>
            <section className="pb-5">
              <div className="row">
                {products.map((product) => (
                  <div key={product._id} className="column is-3">
                    <Link href="/products/[id]" as={`/products/${product._id}`}>
                      <a className={styles.cardLink}>
                        <div>
                          <ProductCard product={product} />
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            <div
              className="pagination is-small is-right is-rounded "
              aria-label="pagination"
            >
              <AppPagination
                onChange={onPageChange}
                pageNumber={pagination.pageNumber}
                pageSize={pagination.pageSize}
                count={count}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withApollo(Products, { getDataFromTree });
