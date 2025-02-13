import style from "./style.module.css";

type Props = {
    name: string;
    description: string;
    icon: string;
};

export default function FeatureButton({ name, description, icon }: Props) {
    return (
        <div className={style.container}>
            <h2 className={style.name}>{name}</h2>
            <p className={style.description}>
                {description}
            </p>
            <img className={style.icon} src={icon} alt={name} />
        </div>
    );
};