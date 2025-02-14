import FilledButton from "../filled-button/filled-button";
import InputLabel from "../input-label/input-label";
import OutlinedButton from "../outlined-button/outlined-button";
import style from "./style.module.css";

export default function CategoryForm() {
  return (
    <div className={style.container}>
        <InputLabel
          id="name"
          label="Nombre"
          placeholder="Nombre de la categoría"
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