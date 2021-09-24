import { useForm } from "react-hook-form";
import Link from "next/link";

const DeleteProductForm = ({ onSubmit, initialData = {} }) => {
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Nombre del producto"
            name="name"
            id="name"
            {...register("name", {
              required: "Required",
            })}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Descripción</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Descripción del producto"
            name="description"
            id="description"
            {...register("description", {
              required: "Required",
            })}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Status</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Descripción del producto"
            name="status"
            id="status"
            {...register("status", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Precio</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Precio del producto"
            name="price"
            id="price"
            {...register("price", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Cantidad</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="numero de unidades de producto"
            name="cantidad"
            id="cantidad"
            {...register("cantidad", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Categoria</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="categoria de producto"
            name="category"
            id="category"
            {...register("category", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Subcategoria</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="sub categoria de producto"
            name="subcategory"
            id="subcategory"
            {...register("subcategory", {
              required: "Required",
            })}
          />
        </div>
      </div>

      <div className="field is-grouped mb-5">
        <div className="control">
          <button className="button is-link">Borrar</button>
        </div>
        <div className="control">
          <Link href="/administration/dashboard">
            <button className="button is-link is-light">Salir</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default DeleteProductForm;
