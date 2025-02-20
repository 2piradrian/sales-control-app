import { useParams } from "react-router-dom";
import { useRepositories, sendAlert } from "../../../../core";
import { CategoryEntity } from "../../../../domain";
import { useEffect, useState } from "react";

export default function useViewModel() {

    const { id = "" } = useParams();
    const { categoryRepository } = useRepositories();

    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [category, setCategory] = useState<CategoryEntity | undefined>();
    /* --- ----- --- */

    useEffect(() => {
        if (id !== "") {   
            fetch();
        }
    }, [id]);

    const fetch = async () => {
        setLoading(true);
        const category = await getCategory(id) || undefined;
        setCategory(category);  

        setLoading(false);
    };

    const getCategory = async (id: string) => {
        try {
            return await categoryRepository.findById(id);
        }
        catch (error) {
            console.error(error);
        }
    };

    const updateCategory = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.currentTarget));
            
            if(!form.name) {
                sendAlert({type: "error", message: "El nombre de la categoría es requerido"});
                return;
            }

            const category = CategoryEntity.fromObject({...form, id});
            await categoryRepository.update(category);
            
            sendAlert({type: "success", message: "Categoría actualizada con éxito"});
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            sendAlert({type: "error", message: "Ha ocurrido un error al actualizar la categoría"});
            return Promise.reject();
        }
    };

    const deleteCategory = async (): Promise<void> => {
        try {
            await categoryRepository.delete(id);
            sendAlert({type: "success", message: "Categoría eliminada con éxito"});
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            sendAlert({type: "error", message: "Ha ocurrido un error al eliminar la categoría"});
            return Promise.reject();
        }
    };

    return {
        loading,
        category,
        updateCategory,
        deleteCategory,
    };
    
};