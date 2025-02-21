import style from "./style.module.css";

type Props = {
    text: string;
    type: "button" | "submit";
    onClick: () => void;
    modifier?: string;
}

export default function OutlinedButton({ text, type, onClick, modifier }: Props) {
    return (
        <button className={`${style.container} ${modifier}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
}