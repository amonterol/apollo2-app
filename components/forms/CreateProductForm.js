import { useForm } from "react-hook-form";

const CreateProductForm = ({ onSubmit }) => {
  const { handleSubmit, register } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="file has-name">
        <label className="file-label">
          <input className="file-input" type="file" name="imagen" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Seleccione un archivo…</span>
          </span>
          <span className="file-name">
            Imagen del producto formato png o jpg
          </span>
        </label>
      </div>

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
        <label className="label">Código</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="SKU del producto"
            name="codigo"
            id="codigo"
            {...register("codigo", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Grupo</label>
        <div className="control">
          <div className="select">
            <select>
              <option value="Caballeros">Caballeros</option>
              <option value="Damas">Damas</option>
              <option value="Infantil">Infantil</option>
              <option value="Hogar">Hogar</option>
              <option value="Telas">Telas</option>
              <option value="Pasamanería">Pasamanería</option>
              <option value="Joyería">Joyería</option>
              <option value="Uniformes">Uniformes</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Subgrupo</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Camisetas</option>
              <option>Camisas</option>
              <option>Pijamas </option>
              <option>Buzo</option>
              <option>Pantalones</option>
              <option>Fajas</option>
              <option>Suéter</option>
              <option>Jacket</option>
              <option>Camisetas básicas</option>
              <option>Chaleco</option>
              <option>Blusas</option>
              <option>Bufanda</option>
              <option>Bolso</option>
              <option>Falda</option>
              <option>Licras</option>

              <option>Ropa niña</option>
              <option>Ropa niño</option>
              <option>Ropa bebé</option>
              <option>Conjunto</option>
              <option>Abrigo</option>
              <option>Ropa interior</option>

              <option>Alfombra</option>
              <option>Almohada</option>
              <option>Almohadón</option>
              <option>Cortinas</option>
              <option>Ropa de cama</option>
              <option>Equipo de cocina</option>
              <option>Paños y Limpiones</option>
              <option>Paraguas y sombrilla</option>
              <option>Mantel</option>
              <option>Delantal</option>
              <option>Plástico</option>
              <option>Carpeta</option>
              <option>Sobre</option>
              <option>Toldo</option>
              <option>Billetera</option>
              <option>Cosmético</option>
              <option>Cuidado personal</option>
              <option>Pañuelos</option>
              <option>Productos de empaque</option>
              <option>Mascarillas</option>
              <option>Sedas</option>
              <option>Crepée</option>
              <option>Villelas</option>
              <option>Four way </option>
              <option>Liverpool</option>
              <option>Chifon</option>
              <option>Mezclillas</option>
              <option>Algodónes </option>
              <option>Fiesta</option>
              <option>Satín</option>
              <option>Librete</option>
              <option>Encajes</option>
              <option>Puntos</option>
              <option>Licras</option>
              <option>Scuba </option>
              <option>Buzo</option>
              <option>Velvet</option>
              <option>Linos</option>
              <option>Linetas</option>
              <option>Sincatex </option>
              <option>Corduroy</option>

              <option> Cuadros </option>
              <option> Army </option>
              <option> Casimir </option>
              <option> Bengalina </option>
              <option> Fantasía </option>
              <option>Mesh </option>
              <option>Cancan </option>
              <option>Malla </option>
              <option>Entretelas </option>
              <option>Bandera </option>
              <option>Tapis </option>
              <option>Cortinería </option>
              <option>Sabanas </option>
              <option>Mantelería </option>
              <option>Yute </option>
              <option>Franela </option>
              <option>Mantas </option>
              <option>Pana </option>
              <option>Microfibras </option>
              <option>Sintéticas </option>
              <option>Peluche </option>
              <option>Cortes </option>
              <option>Retazos </option>
              <option>Mantas </option>
              <option>Ahulado </option>
              <option>Razos </option>
              <option>Nylon </option>
              <option>Panama </option>
              <option>Pana </option>
              <option>Loneta </option>
              <option>Toldo </option>
              <option>Franelas </option>
              <option>Litúrgicas </option>
              <option>Rodeo </option>
              <option>Deportivas </option>
              <option>Bolas </option>
              <option>Animal print </option>
              <option>Columbia </option>
              <option>Gabardina </option>
              <option>Bengalina </option>
              <option>Navideña </option>
              <option>Cuerina </option>
              <option>Camuflada </option>
              <option>Razo </option>
              <option>Mosquitero </option>
              <option>Cobija </option>
              <option>Amuzen </option>
              <option>Laurel </option>
              <option>Cocina </option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Descripción</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Descripción del producto"
            name="descripcion"
            id="descripcion"
            {...register("descripcin", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Características del producto</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Características generales del producto"
          ></textarea>
        </div>
      </div>
      <div className="field">
        <label className="label">Cantidad</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Cantidad disponible del producto"
            name="cantidad"
            id="cantidad"
            {...register("cantidad", {
              required: "Required",
            })}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Status</label>
        <div className="control">
          <label className="radio">
            <input type="radio" name="question" />
            Disponible
          </label>
          <label className="radio">
            <input type="radio" name="question" />
            No disponible
          </label>
          <label className="radio">
            <input type="radio" name="question" />
            Otro
          </label>
        </div>
      </div>
      <div className="field is-grouped mb-5">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default CreateProductForm;
