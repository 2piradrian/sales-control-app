import { useEffect, useState } from "react";
import { useRepositories, sendAlert } from "../../../../core";
import { CategoryEntity, Alert } from "../../../../domain";

export default function useViewModel() {

    const { categoryRepository } = useRepositories();

    /* --- States --- */
    const [alert, setAlert] = useState<Alert>({ message: "", type: "nothing" });
    /* --- ----- --- */

    useEffect(() => {
        sendAlert(alert);
    }, [alert]);

    const createCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.currentTarget));

            if(!form.name) {
                return setAlert({type: "error", message: "El nombre de la categoría es requerido"});
            }

            const category = CategoryEntity.fromObject(form);
            await categoryRepository.create(category);
        }
        catch (error) {
            console.error(error);
            return setAlert({type: "error", message: "Ha ocurrido un error al crear la categoría"});
        }
    };

    return {
        createCategory
    };
    
};