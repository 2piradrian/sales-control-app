import { useState } from "react";
import style from "./style.module.css"

type Props = {
    id: string;
    type: "text" | "number";
    label: string;
    placeholder: string;
    required: boolean;
    value: string | undefined;
}

export default function InputLabel({ label, type, placeholder, id, required, value }: Props){
    const [self, setSelf] = useState<string | undefined>(value || "")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelf(e.target.value);
    }

    return(
        <div className={style.container}>
            <label htmlFor={id}>{label}</label>
		    <input 
                id={id} 
                name={id} 
                type={type} 
                value={self} 
                required={required} 
                placeholder={placeholder} 
                onChange={handleChange} 
                onWheel={(e: React.WheelEvent<HTMLInputElement>) => e.currentTarget.blur()} 
            />
        </div>
    )
}