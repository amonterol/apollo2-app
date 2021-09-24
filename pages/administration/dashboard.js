import { useRouter } from "next/router";
import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import Layout from "../../components/Layout";
import { Card, Button } from "react-bootstrap";
import { useGetGestionProductos, useDeleteProduct } from "../../apollo/actions";
import { getDataFromTree } from "@apollo/react-ssr";
import Link from "next/link";

const AdministrationDashboard = withAuth(
  () => {
    const { data } = useGetGestionProductos();
    const [deleteProduct] = useDeleteProduct();
    const productos = (data && data.gestionProductos) || [];
    const router = useRouter();

    return (
      <Layout>
        <div className="bwm-form mt-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Adminitración de Productos</h1>
              {productos.map((p) => (
                <Card key={p._id} className="mb-2">
                  <Card.Header>{p._id}</Card.Header>
                  <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.description}</Card.Text>
                    <Link
                      href="/products/[id]/updateProduct"
                      as={`/products/${p._id}/updateProduct`}
                    >
                      <a className="btn btn-warning mr-1">Update</a>
                    </Link>
                    <Link
                      href="/products/[id]/deleteProduct"
                      as={`/products/${p._id}/deleteProduct`}
                    >
                      <a className="btn btn-warning mr-1">Delete</a>
                    </Link>
                    {/* 
                    <Button
                      onClick={() =>
                        deleteProduct({ variables: { id: p._id } })
                      }
                      variant="danger"
                    >
                      Delete
                    </Button>
*/}
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  },
  ["admin", "gerente"],
  { ssr: true }
);

export default withApollo(AdministrationDashboard, { getDataFromTree });
