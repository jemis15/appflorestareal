import Layout from "../components/Layout/Layout";

export default function Cotizaciones() {
    return <p>Cotizaciones</p>
}

Cotizaciones.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };