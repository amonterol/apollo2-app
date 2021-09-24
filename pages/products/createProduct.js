import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import CreateProductForm from "../../components/forms/CreateProductForm";
import { useCreateProduct } from "../../apollo/actions";

function CreateProduct() {
  const [createProduct, { error }] = useCreateProduct();
  const router = useRouter();

  const errorMessage = (error) => {
    return (
      (error.graphQLErrors && error.graphQLErrors[0].message) ||
      "Ooooops something went wrong..."
    );
  };

  const handleCreateProduct = async (data) => {
    await createProduct({ variables: data });
    router.push("/products");
  };

  return (
    <Layout>
      <div className="bwm-form mt-3">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h2 className="page-title">Agregar Producto</h2>
            <CreateProductForm onSubmit={handleCreateProduct} />
            {error && (
              <div className="notification is-info">
                <button className="delete">{errorMessage(error)}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withApollo(withAuth(CreateProduct, ["admin", "gerente"]));
