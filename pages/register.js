import Layout from "../components/Layout";
import ColoredLine from "../components/ColoredLine";
import RegisterForm from "../components/forms/RegisterForm";
import { Mutation } from "react-apollo";
import { SIGN_UP } from "../apollo/queries";
import withApollo from "../hoc/withApollo";
import Redirect from "../components/shared/Redirect";

function RegisterPage() {
  // TODO: Handle DB Errors!
  const errorMessage = (error) => {
    return (
      (error.graphQLErrors && error.graphQLErrors[0].message) ||
      "Ooooops something went wrong..."
    );
  };

  return (
    <Layout>
      <section className="hero  is-fullheight">
        <div className="container has-text-centered mt-5">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-black">Crear una cuenta</h3>
            <ColoredLine />
            <div className="box">
              <Mutation mutation={SIGN_UP}>
                {(signUpUser, { data, error }) => (
                  <>
                    <RegisterForm
                      onSubmit={(registerData) => {
                        signUpUser({ variables: registerData });
                      }}
                    />
                    {data && data.signUp && (
                      <Redirect to="/login" query={{ message: "LOGGED_IN" }} />
                    )}
                    {error && (
                      <div className="notification is-warning">
                        <button className="delete" onClick={cerrar}></button>
                        {errorMessage(error)}
                      </div>
                    )}
                  </>
                )}
              </Mutation>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default withApollo(RegisterPage);
