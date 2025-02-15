import FeatureButton from "../../components/feature-button/feature-button";
import Title from "../../components/title/title";
import Layout from "../../layout/layout";
import style from "./style.module.css";

export default function ProductsRoute() {
  return (
    <Layout>
        <section className={`${style.container} container`}>
            <div className={`${style.delimiter} delimiter`}>
                <Title text="Productos" />
                <div className={style.features}>
                    <FeatureButton 
                        name="Creá nuevos productos" 
                        description="Agregá nuevos productos al sistema." 
                        icon="/icons/addfolder.svg"
                        path="/products/create-product"
                    />
                    <FeatureButton 
                        name="Editá o eliminá productos" 
                        description="Modificá la información de los productos existentes en el sistema." 
                        icon="/icons/pencil.svg"
                        path="/products/edit-product"
                    />
                    <FeatureButton 
                        name="Creá una categoría" 
                        description="Agregá una nueva categoría de productos."
                        icon="/icons/categorylist.svg"
                        path="/products/create-category"
                    />
                    <FeatureButton 
                        name="Editá o eliminá categorías" 
                        description="Modificá las categorías de productos existentes en el sistema."
                        icon="/icons/pencil.svg"
                        path="/products/edit-category"
                    />
                                        <FeatureButton 
                        name="Registrá una compra" 
                        description="Registrá una compra de productos para reponer stock." 
                        icon="/icons/alertfile.svg"
                        path=""
                    />
                    <FeatureButton 
                        name="Eliminá una compra" 
                        description="Eliminá una compra de productos para corregir stock." 
                        icon="/icons/delete.svg"
                        path=""
                    />
                </div>
            </div>
        </section>
    </Layout>
  );
}