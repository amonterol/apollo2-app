import withApollo from "../../../hoc/withApollo";
import withAuth from "../../../hoc/withAuth";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

import UpdateProductForm from "../../../components/forms/UpdateProductForm";
import { useGetProduct, useUpdateProduct } from "../../../apollo/actions";

import { toast } from "react-toastify";

function UpdateProduct() {
  const router = useRouter();
  const [updateProduct, { error }] = useUpdateProduct();
  const { id } = router.query;
  const { data } = useGetProduct({ variables: { id } });

  const handleUpdatedProduct = async (data) => {
    await updateProduct({ variables: { id, ...data } });
    toast.success(
      "Product has been updated! Presione Salir para continuar...",
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      }
    );
    //router.push("/products");
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
            <h2 className="page-title">Editar Producto</h2>

            {data && (
              <UpdateProductForm
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

export default withApollo(withAuth(UpdateProduct, ["admin", "gerente"]));
