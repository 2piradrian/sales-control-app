import { useEffect, useState } from "react";
import { useRepositories } from "../../../../core";
import { CategoryEntity } from "../../../../domain";

export default function useViewModel() {

    const { categoryRepository } = useRepositories();

    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<CategoryEntity[]>([]);
    /* --- ----- --- */

    useEffect(() => {
        fetch().then(() => { setLoading(false) });
    }, []);

    const fetch = async () => {
        setLoading(true);

        const categories = await getAllCategories() || [];
        setCategories(categories);  
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