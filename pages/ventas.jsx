import Layout from "../components/Layout/Layout";

export default function Ventas() {
  return <p>Ventas</p>;
}

Ventas.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
