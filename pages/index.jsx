import Layout from "../components/Layout/Layout";

export default function Index() {
  return <p>Inicio</p>;
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
