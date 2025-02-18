import style from "./style.module.css";

type Props = {
    text: string;
    type: "button" | "submit";
    onClick?: () => void;
    modifier?: string;
}

export default function FilledButton({ text, onClick, type, modifier }: Props) {
    return (
        <button 
            className={`${style.container} ${modifier}`} 
            onClick={onClick} 
            type={type}
        >
            {text}
        </button>
    );
}