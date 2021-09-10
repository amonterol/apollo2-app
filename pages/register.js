import Layout from "../components/Layout";
import ColoredLine from "../components/ColoredLine";

function RegisterPage() {
  return (
    <Layout>
      <section className="hero  is-fullheight">
        <div className="container has-text-centered mt-5">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-black">Crear una cuenta</h3>
            <ColoredLine />
            <div className="box">
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Nombre"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Apellidos"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="email"
                      placeholder="Email"
                      autofocus=""
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="password"
                      placeholder="Contraseña"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label class="checkbox">
                      <input type="checkbox" className="mr-2" />
                      <a href="#">
                        He leído y estoy de acuerdo con los términos y
                        condiciones
                      </a>
                    </label>
                  </div>
                </div>

                <button className="button is-block is-primary is-large is-fullwidth">
                  Crear cuenta
                </button>
                <div className="field">
                  <div className="control">
                    <label class="content">
                      <a href="#">¿Ya tiene una cuenta? Entrar aquí</a>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default RegisterPage;
