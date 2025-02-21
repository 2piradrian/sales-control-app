import { CategoryEntity, ProductEntity, StatusEntity } from "../../../domain";
import FilledButton from "../filled-button/filled-button";
import InputLabel from "../input-label/input-label";
import OutlinedButton from "../outlined-button/outlined-button";
import SelectLabel from "../select-label/select-label";
import style from "./style.module.css";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  onDelete?: () => void;
  categories: CategoryEntity[];
  statuses: StatusEntity[];
  product?: ProductEntity;
};

export default function ProductForm({ onSubmit, onCancel, onDelete, categories, statuses, product }: Props) {
  
  return (
    <form className={style.container} onSubmit={onSubmit}>
        <InputLabel
          id="name"
          label="Nombre"
          placeholder="Nombre del producto"
          required={true}
          type="text"
          value={product?.name}
        />
        <InputLabel
          id="description"
          label="Descripción"
          placeholder="Descripción del producto"
          required={false}
          type="text"
          value={product?.description}
        />
        <InputLabel
          id="stock"
          label="Stock"
          placeholder="Existencias disponibles"
          required={true}
          type="number"
          value={product?.stock.toString()}
        />
        <InputLabel
          id="stockAlert"
          label="Alerta de stock"
          placeholder="Cuando el stock sea menor o igual a"
          required={true}
          type="number"
          value={product?.stockAlert.toString()}
        />
        <InputLabel
          id="price"
          label="Precio"
          placeholder="Precio del producto"
          required={true}
          type="number"
          value={product?.price.toString()}
        />
        <SelectLabel
          id="category"
          label="Categoría"
          value={categories.find((c) => c.id === product?.categoryId)?.name || ""}
          values={categories.map((c) => c.name)}
        />
        <SelectLabel
          id="status"
          label="Estado"
          value={statuses.find((s) => s.id === product?.statusId)?.name || ""}
          values={statuses.map((s) => s.name)}
        />
        <div className={style.buttons}>
          <OutlinedButton text="Cancelar" onClick={() => {}} type="button" />
          <FilledButton text="Crear" onClick={() => {}} type="submit" />
        </div>
    </form>
  );

}