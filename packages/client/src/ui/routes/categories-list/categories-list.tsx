import Layout from "../../layout/layout";
import Title from "../../components/title/title";
import Table from "../../components/table/table";
// ---
import useViewModel from "./viewmodel/useViewModel";
import style from "./style.module.css";

export default function CategoriesList() {

  const { loading, categories } = useViewModel();

  return (
    <Layout>
      <section className={`${style.container} container`}>
        <div className={`${style.delimiter} delimiter`}>
          <Title text="Editar o eliminar categorías" />
          { loading && <p>Cargando...</p> }
          { !loading && 
            <Table 
              headers={["Nombre"]} 
              fields={["name"]}  
              data={categories} 
              onRowClick={(id) => { console.log(id); }} 
            /> 
          }
        </div>
      </section>
    </Layout>
  );
}