import Layout from "../components/Layout/Layout";

export default function Clientes() {
  return <p>Clientes</p>;
}

Clientes.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
