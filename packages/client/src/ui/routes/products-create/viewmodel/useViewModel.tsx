import { useEffect, useState } from "react";
import { sendAlert, useRepositories } from "../../../../core";
import { CategoryEntity, ProductEntity, StatusEntity } from "../../../../domain";

export default function useViewModel() {

    const { productRepository, categoryRepository, statusRepository } = useRepositories();

    /* --- States --- */
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<CategoryEntity[]>();
    const [statuses, setStatuses] = useState<StatusEntity[]>();
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        setLoading(true);

        const categoriesFetched = await categoryRepository.findAll() || [];
        setCategories(categoriesFetched);

        const statusesFetched = await statusRepository.findAll() || [];
        setStatuses(statusesFetched);
        
        setLoading(false);
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
        statuses,
        createProduct
    };

};