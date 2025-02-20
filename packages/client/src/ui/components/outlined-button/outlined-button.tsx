import style from "./style.module.css";

type Props = {
    text: string;
    onClick: () => void;
    modifier?: string;
}

export default function OutlinedButton({ text, onClick, modifier }: Props) {
    return (
        <button className={`${style.container} ${modifier}`} onClick={onClick}>
            {text}
        </button>
    );
}