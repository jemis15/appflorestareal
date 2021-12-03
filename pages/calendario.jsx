import Layout from "../components/Layout/Layout";

export default function Calendario() {
  return <p>Calendario</p>;
}

Calendario.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
