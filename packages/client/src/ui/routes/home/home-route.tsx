import Layout from "../../layout/layout";
import style from "./style.module.css";

export default function HomeRoute() {
  return (
    <Layout>
      <section className={`${style.container} container`}>
        <div className={`${style.delimiter} delimiter`}>
        </div>
      </section>
    </Layout>
  );
};