import CategoryForm from "../../components/category-form/category-form";
import Title from "../../components/title/title";
import Layout from "../../layout/layout";
// ---
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";

export default function CategoriesCreate() {

  const { loading, categories } = useViewModel();

  return (
    <Layout>
      <section className={`${style.container} container`}>
        <div className={`${style.delimiter} delimiter`}>
          <Title text="Crear Categoría" />
          <CategoryForm />
        </div>
      </section>
    </Layout>
  );
}