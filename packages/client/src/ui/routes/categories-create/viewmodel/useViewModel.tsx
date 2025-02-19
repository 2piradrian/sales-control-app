import { useRepositories, sendAlert } from "../../../../core";
import { CategoryEntity } from "../../../../domain";

export default function useViewModel() {

    const { categoryRepository } = useRepositories();

    const createCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.currentTarget));
            
            if(!form.name) {
                sendAlert({type: "error", message: "El nombre de la categoría es requerido"});
                return;
            }

            const category = CategoryEntity.fromObject(form);
            await categoryRepository.create(category);
            
            sendAlert({type: "success", message: "Categoría creada con éxito"});
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            sendAlert({type: "error", message: "Ha ocurrido un error al crear la categoría"});
            return Promise.reject();
        }
    };

    return {
        createCategory
    };
    
};