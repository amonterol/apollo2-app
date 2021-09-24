import { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import ColoredLine from "../components/ColoredLine";
import LoginForm from "../components/forms/LoginForm";
import withApollo from "../hoc/withApollo";
import { useSignIn } from "../apollo/actions";
import { useRouter } from "next/router";
import Redirect from "../components/shared/Redirect";
import messages from "../variables/messages";

const Login = () => {
  const disposeId = useRef(null);
  const [signIn, { data, loading, error }] = useSignIn();
  const router = useRouter();
  const { message } = router.query;

  const disposeMessage = () => {
    router.replace("/login", "/login", { shallow: true });
  };

  useEffect(() => {
    if (message) {
      disposeId.current = setTimeout(() => {
        disposeMessage();
      }, 3000);
    }

    return () => {
      clearTimeout(disposeId.current);
    };
  }, [message]);

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
            {message && (
              <div className={`alert alert-${messages[message].status}`}>
                {messages[message].value}
              </div>
            )}
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
