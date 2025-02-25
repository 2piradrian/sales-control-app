import { useNavigate } from "react-router-dom";
import FeatureButton from "../../components/feature-button/feature-button";
import Title from "../../components/title/title";
import Layout from "../../layout/layout";
import style from "./style.module.css";

export default function CategoriesRoute() {

    const navigate = useNavigate();

    return (
      <Layout>
          <section className={`${style.container} container`}>
              <div className={`${style.delimiter} delimiter`}>
                  <Title text="Categorias" />
                  <div className={style.features}>
                      <FeatureButton 
                        name="Creá una categoría" 
                        description="Agregá una nueva categoría de productos."
                        icon="/icons/categorylist.svg"
                        onClick={() => {navigate("/categories/create")}}
                      />
                      <FeatureButton 
                        name="Editá o eliminá categorías" 
                        description="Modificá las categorías de productos existentes en el sistema."
                        icon="/icons/pencil.svg"
                        onClick={() => {navigate("/categories/list")}}
                      />
                  </div>
              </div>
          </section>
      </Layout>
    );
    
}