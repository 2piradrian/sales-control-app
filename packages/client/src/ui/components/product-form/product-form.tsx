import FilledButton from "../filled-button/filled-button";
import InputLabel from "../input-label/input-label";
import OutlinedButton from "../outlined-button/outlined-button";
import SelectLabel from "../select-label/select-label";
import style from "./style.module.css";

export default function ProductForm() {
  return (
    <div className={style.container}>
        <InputLabel
          id="name"
          label="Nombre"
          placeholder="Nombre del producto"
          required={true}
          type="text"
          value=""
        />
        <InputLabel
          id="description"
          label="Descripción"
          placeholder="Descripción del producto"
          required={true}
          type="text"
          value=""
        />
        <InputLabel
          id="stock"
          label="Stock"
          placeholder="Existencias disponibles"
          required={true}
          type="number"
          value=""
        />
        <InputLabel
          id="stockAlert"
          label="Alerta de stock"
          placeholder="Cuando el stock sea menor o igual a"
          required={true}
          type="number"
          value=""
        />
        <InputLabel
          id="price"
          label="Precio"
          placeholder="Precio del producto"
          required={true}
          type="number"
          value=""
        />
        <SelectLabel
          id="category"
          label="Categoría"
          value=""
          values={["Electrónica", "Hogar", "Jardín", "Deportes"]}
        />
        <SelectLabel
          id="status"
          label="Estado"
          value=""
          values={["Activo", "Inactivo"]}
        />
        <InputLabel
          id="index"
          label="Índice de búsqueda"
          placeholder="Palabras clave para búsqueda separadas por un espacio"
          required={true}
          type="text"
          value=""
        />
        <div className={style.buttons}>
          <OutlinedButton text="Cancelar" onClick={() => {}} />
          <FilledButton text="Crear" onClick={() => {}} />
        </div>
    </div>
  );
}