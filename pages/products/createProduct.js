import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import CreateProductForm2 from "../../components/forms/CreateProductForm2";
import { useCreateProduct } from "../../apollo/actions";

function CreateProduct() {
  const [createProduct, { error }] = useCreateProduct();
  const router = useRouter();

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
            <CreateProductForm2 onSubmit={handleCreateProduct} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withApollo(withAuth(CreateProduct, "admin"));
