import { useForm } from "react-hook-form";

const LoginForm = ({ onSubmit, loading }) => {
  const { handleSubmit, register } = useForm();
  return (
    <div className="box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
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
              placeholder="Your Password"
              name="password"
              id="password"
              {...register("password", {
                required: "Required",
              })}
            />
          </div>
        </div>
        <div className="field">
          <label className="checkbox">
            <input type="checkbox" />
            Remember me
          </label>
        </div>
        {loading && "Signing in..."}
        {!loading && (
          <button className="button is-block is-info is-large is-fullwidth">
            Login <i className="fa fa-sign-in" aria-hidden="true"></i>
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
