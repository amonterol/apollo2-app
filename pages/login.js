import Layout from "../components/Layout";
import ColoredLine from "../components/ColoredLine";
import LoginForm from "../components/forms/LoginForm";
import withApollo from "../hoc/withApollo";
import { useSignIn } from "../apollo/actions";
import Redirect from "../components/shared/Redirect";

const Login = () => {
  const [signIn, { data, loading, error }] = useSignIn();
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
            <h3 className="title has-text-black">Iniciar sesión</h3>
            <ColoredLine />

            <p className="subtitle has-text-black">
              Por favor ingrese su e-mail y contraseña:
            </p>
            <LoginForm
              loading={loading}
              onSubmit={(signInData) => signIn({ variables: signInData })}
            />
            {data && data.signIn && <Redirect to="/" />}
            {error && (
              <div className="alert alert-danger">{errorMessage(error)}</div>
            )}
            <div className="has-text-grey">
              <ul>
                <li>
                  <a href="/register">¿Nuevo cliente? Crear cuenta</a>
                </li>
                <li>
                  <a href="/">¿Olvido su contraseña?</a>
                </li>
                <li>
                  <a href="/">Recuperar contraseña</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default withApollo(Login);
