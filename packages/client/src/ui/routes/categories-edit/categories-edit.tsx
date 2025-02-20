import { useNavigate } from "react-router-dom";
import CategoryForm from "../../components/category-form/category-form";
import Title from "../../components/title/title";
import Layout from "../../layout/layout";
// ---
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";

export default function CategoriesEdit() {

  const navigate = useNavigate();
  const { loading, category, updateCategory, deleteCategory } = useViewModel();

  return (
    <Layout>
      <section className={`${style.container} container`}>
        <div className={`${style.delimiter} delimiter`}>
          <Title text="Crear Categoría" />
          {loading && <p>Cargando...</p>}
          {!loading && category &&
            <CategoryForm 
              onSubmit={(e) => {
                  updateCategory(e).then(() => { navigate("/categories/list"); })
                }
              }
              onCancel={() => {
                  navigate("/categories")
                }
              }
              onDelete={() => {
                  deleteCategory().then(() => { navigate("/categories/list"); })
                }
              }
              category={category}
            />
          }
        </div>
      </section>
    </Layout>
  );
}