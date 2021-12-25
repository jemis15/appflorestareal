import Layout from "../../../../components/Layout/Layout";

export default function Estadisticas() {
  return <p>Estadisticas</p>;
}

Estadisticas.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
