import { useNavigate } from "react-router-dom";
import FeatureButton from "../../components/feature-button/feature-button";
import Title from "../../components/title/title";
import Layout from "../../layout/layout";
import style from "./style.module.css";

export default function ProductsRoute() {

    const navigate = useNavigate();

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
                        onClick={() => {navigate("/products/create")}}
                      />
                      <FeatureButton 
                        name="Editá o eliminá productos" 
                        description="Modificá la información de los productos existentes en el sistema." 
                        icon="/icons/pencil.svg"
                        onClick={() => {navigate("/products/edit")}}
                      />
                      <FeatureButton 
                        name="Registrá una compra" 
                        description="Registrá una compra de productos para reponer stock." 
                        icon="/icons/alertfile.svg"
                        onClick={() => {navigate("")}}
                      />
                      <FeatureButton 
                        name="Eliminá una compra" 
                        description="Eliminá una compra de productos para corregir stock." 
                        icon="/icons/delete.svg"
                        onClick={() => {navigate("")}}
                      />
                  </div>
              </div>
          </section>
      </Layout>
    );

}