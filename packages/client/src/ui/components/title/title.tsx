import style from "./style.module.css";

type Props = {
    text: string;
}

export default function Title({ text }: Props) {
    return (
        <h1 className={style.title}>{text}</h1>
    );
};