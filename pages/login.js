import Layout from "../components/Layout";
import ColoredLine from "../components/ColoredLine";

const Login = () => {
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
            <div className="box">
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="email"
                      placeholder="Your Email"
                      autofocus=""
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="password"
                      placeholder="Your Password"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">
                  Login <i className="fa fa-sign-in" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <p className="has-text-grey">
              <ul>
                <li>
                  <a href="/register">¿Nuevo cliente? Crear cuenta</a>
                </li>
                <li>
                  {" "}
                  <a href="/">¿Olvido su contraseña?</a>
                </li>
                <li>
                  <a href="/">Recuperar contraseña</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
