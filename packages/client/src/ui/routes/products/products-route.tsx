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
                    <FeatureButton name="Feature 1" description="asd" icon="asdasd"/>
                    <FeatureButton name="Feature 1" description="asd" icon="asdasd"/>
                    <FeatureButton name="Feature 1" description="asd" icon="asdasd"/>
                    <FeatureButton name="Feature 1" description="asd" icon="asdasd"/>
                </div>
            </div>
        </section>
    </Layout>
  );
}