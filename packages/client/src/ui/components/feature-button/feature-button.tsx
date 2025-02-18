import style from "./style.module.css";

type Props = {
    name: string;
    description: string;
    icon: string;
    onClick: () => void;
};

export default function FeatureButton({ name, description, icon, onClick }: Props) {

    return (
        <div className={style.container} onClick={() => {onClick()}}>
            <h2 className={style.name}>{name}</h2>
            <p className={style.description}>
                {description}
            </p>
            <img className={style.icon} src={icon} alt={name} />
        </div>
    );

};