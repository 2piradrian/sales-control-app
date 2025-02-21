import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/product-form/product-form";
import Title from "../../components/title/title";
import Layout from "../../layout/layout";
import style from "./style.module.css";
import useViewModel from "./viewmodel/useViewModel";

export default function ProductsCreate() {

  const navigate = useNavigate();
  const { loading, categories, createProduct } = useViewModel();

  return (
    <Layout>
      <section className={`${style.container} container`}>
        <div className={`${style.delimiter} delimiter`}>
          <Title text="Crear Producto" />
          {loading && <p>Cargando...</p>}
          {!loading && categories && 
            <ProductForm 
              onSubmit={(e) => {
                  createProduct(e).then(() => { navigate("/products/list"); })
                }
              }
              onCancel={() => {
                  navigate("/products")
                }
              }
              categories={categories}
            />
          }
        </div>
      </section>
    </Layout>
  );
}