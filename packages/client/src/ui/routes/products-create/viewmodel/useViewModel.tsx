import { useEffect, useState } from "react";
import { sendAlert, useRepositories } from "../../../../core";
import { CategoryEntity, ProductEntity } from "../../../../domain";

export default function useViewModel() {

    const { productRepository, categoryRepository } = useRepositories();

    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<CategoryEntity[]>();
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        setLoading(true);
        const categories = await getCategories() || [];
        setCategories(categories);
        setLoading(false);
    };

    const getCategories = async () => {
        try {
            return await categoryRepository.findAll();
        }
        catch (error) {
            console.error(error);
        }
    };

    const createProduct = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            e.preventDefault();
            const form = Object.fromEntries(new FormData(e.currentTarget));

            const product = ProductEntity.fromObject(form);
            await productRepository.create(product);
            
            sendAlert({type: "success", message: "Producto creado con éxito"});
            return Promise.resolve();
        }
        catch (error) {
            console.error(error);
            sendAlert({type: "error", message: "Ha ocurrido un error al crear el producto"});
            return Promise.reject();
        }
    };

    return {
        loading,
        categories,
        createProduct
    };

};