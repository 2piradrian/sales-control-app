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
        setLoading(true);

        const categories = await getAllCategories() || [];
        setCategories(categories);  

        setLoading(false);
    };

    const getAllCategories = async () => {
        try {
            return await categoryRepository.findAll();
        }
        catch (error) {
            console.error(error);
        }
    };

    return {
        loading,
        categories
    };
    
};