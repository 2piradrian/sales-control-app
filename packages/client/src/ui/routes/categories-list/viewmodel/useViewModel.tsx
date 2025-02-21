import { useEffect, useState } from "react";
import { sendAlert, useRepositories } from "../../../../core";
import { CategoryEntity } from "../../../../domain";

export default function useViewModel() {

    const { categoryRepository } = useRepositories();

    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<CategoryEntity[]>([]);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
        sendAlert({type: "info", message: "Clickeá una categoría para editarla o eliminarla"});
    }, []);

    const fetch = async () => {
        try {
            setLoading(true);

            const categoriesFetched = await categoryRepository.findAll() || [];
            setCategories(categoriesFetched);  

            setLoading(false);
        }
        catch (error) {
            console.error(error);
            sendAlert({type: "error", message: "Ha ocurrido un error al cargar las categorías"});
        }
    };

    return {
        loading,
        categories
    };
    
};