import Layout from "../components/Layout/Layout";

export default function Reservas() {
  return <p>Reservas</p>;
}

Reservas.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
