import withApollo from "../../../hoc/withApollo";
import withAuth from "../../../hoc/withAuth";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

import DeleteProductForm from "../../../components/forms/DeleteProductForm";
import { useGetProduct, useDeleteProduct } from "../../../apollo/actions";

import { toast } from "react-toastify";

function DeleteProduct() {
  const router = useRouter();
  const [deleteProduct, { error }] = useDeleteProduct();
  const { id } = router.query;
  const { data } = useGetProduct({ variables: { id } });

  const handleUpdatedProduct = async (data) => {
    await deleteProduct({ variables: { id, ...data } });
    toast.success(
      "Product has been deleted! Presione Salir para continuar...",
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      }
    );
    //router.push("/administration/dashboard");
  };

  const errorMessage = (error) => {
    return (
      (error.graphQLErrors && error.graphQLErrors[0].message) ||
      "Ooooops something went wrong..."
    );
  };

  return (
    <Layout>
      <div className="bwm-form mt-3">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h2 className="page-title">Borrar Producto</h2>

            {data && (
              <DeleteProductForm
                initialData={data.product}
                onSubmit={handleUpdatedProduct}
              />
            )}
            {error && (
              <div className="alert alert-danger">{errorMessage(error)}</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withApollo(withAuth(DeleteProduct, ["admin", "gerente"]));
