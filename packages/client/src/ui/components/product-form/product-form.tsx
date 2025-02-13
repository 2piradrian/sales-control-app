import InputLabel from "../input-label/input-label";
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
    </div>
  );
}