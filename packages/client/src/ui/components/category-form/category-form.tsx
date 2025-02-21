import { CategoryEntity } from "../../../domain";
import FilledButton from "../filled-button/filled-button";
import InputLabel from "../input-label/input-label";
import OutlinedButton from "../outlined-button/outlined-button";
import style from "./style.module.css";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  onDelete?: () => void;
  category?: CategoryEntity;
};

export default function CategoryForm({ onSubmit, onCancel, onDelete, category }: Props) {

  return (
    <form className={style.container} onSubmit={onSubmit}>
        <InputLabel
          id="name"
          label="Nombre"
          placeholder="Nombre de la categoría"
          required={true}
          type="text"
          value={category?.name}
        />
        <div>
          <div className={style.buttonContainer}>
              { onDelete && 
                <FilledButton type="button" text="Eliminar" onClick={() => {onDelete()}} modifier={style.delete}/> 
              }
              <div className={style.buttons}>
                <OutlinedButton text="Cancelar" onClick={() => {onCancel()}} type="button" />
                <FilledButton text={category ? "Editar" : "Crear"} type="submit" />
              </div>
          </div>
        </div>
    </form>
  );
  
}