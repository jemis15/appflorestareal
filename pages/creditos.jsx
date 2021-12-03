import Layout from "../components/Layout/Layout";

export default function Creditos() {
  return <p>Creditos</p>;
}

Creditos.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
