import FilledButton from "../filled-button/filled-button";
import InputLabel from "../input-label/input-label";
import OutlinedButton from "../outlined-button/outlined-button";
import style from "./style.module.css";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
};

export default function CategoryForm({ onSubmit, onCancel }: Props) {

  return (
    <form className={style.container} onSubmit={onSubmit}>
        <InputLabel
          id="name"
          label="Nombre"
          placeholder="Nombre de la categoría"
          required={true}
          type="text"
          value=""
        />
        <div className={style.buttons}>
          <OutlinedButton text="Cancelar" onClick={() => {onCancel()}} />
          <FilledButton text="Crear" type="submit" />
        </div>
    </form>
  );
  
}