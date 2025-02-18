import { useRepositories } from "../../../../core";
import { CategoryEntity } from "../../../../domain";

export default function useViewModel() {

    const { categoryRepository } = useRepositories();

    const createCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.currentTarget));

            if(!form.name) {
                return alert("El nombre de la categoría es requerido");
            }

            const category = CategoryEntity.fromObject(form);
            await categoryRepository.create(category);
        }
        catch (error) {
            console.error(error);
        }
    };

    return {
        createCategory
    };
    
};