import ProductForm from "../../components/product-form/product-form";
import Title from "../../components/title/title";
import Layout from "../../layout/layout";
import style from "./style.module.css";

export default function ProductsCreate() {
  return (
    <Layout>
      <section className={`${style.container} container`}>
        <div className={`${style.delimiter} delimiter`}>
          <Title text="Registrar Producto" />
          <ProductForm />
        </div>
      </section>
    </Layout>
  );
}