import Layout from "../components/Layout/Layout";

export default function Cobros() {
  return <p>Cobros</p>;
}

Cobros.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
