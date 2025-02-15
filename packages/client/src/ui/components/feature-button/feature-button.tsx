import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

type Props = {
    name: string;
    description: string;
    icon: string;
    path: string;
};

export default function FeatureButton({ name, description, icon, path }: Props) {

    const navigate = useNavigate();

    return (
        <div className={style.container} onClick={() => navigate(path)}>
            <h2 className={style.name}>{name}</h2>
            <p className={style.description}>
                {description}
            </p>
            <img className={style.icon} src={icon} alt={name} />
        </div>
    );
};