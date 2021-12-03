import Layout from "../components/Layout/Layout";

export default function Caja() {
  return <p>Caja</p>;
}

Caja.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
