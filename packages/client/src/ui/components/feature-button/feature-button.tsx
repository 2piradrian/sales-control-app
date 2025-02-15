import style from "./style.module.css";

type Props = {
    name: string;
    description: string;
    icon: string;
};

export default function FeatureButton({ name, description, icon }: Props) {
    return (
        <div className={style.container}>
            {name} - {description} - {icon}
        </div>
    );
};