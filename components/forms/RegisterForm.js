import { useForm } from "react-hook-form";

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="Nombre"
            name="name"
            {...register("name", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="Username"
            name="username"
            {...register("username", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="input is-large"
            type="email"
            placeholder="Email"
            name="email"
            {...register("email", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="input is-large"
            type="password"
            placeholder="Contraseña"
            name="password"
            {...register("password", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="input is-large"
            type="password"
            placeholder="Confirmar contraseña"
            name="passwordConfirmation"
            {...register("passwordConfirmation", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              className="mr-2"
              name="condiciones"
              {...register("condiciones", {
                required: "Required",
              })}
            />
            <a href="#">
              He leído y estoy de acuerdo con los términos y condiciones
            </a>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="button is-block is-primary is-large is-fullwidth"
      >
        Crear cuenta
      </button>
      <div className="field">
        <div className="control">
          <label className="content">
            <a href="#">¿Ya tiene una cuenta? Entrar aquí</a>
          </label>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
