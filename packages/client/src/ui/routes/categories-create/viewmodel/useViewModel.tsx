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
        getAllCategories().then((categories) => {
            setCategories(categories);
            setLoading(false);
        });
    }, []);

    const getAllCategories = async () => {
        return await categoryRepository.findAll();
    };

    return {
        loading,
        categories
    };
    
};