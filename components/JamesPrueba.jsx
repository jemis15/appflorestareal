import Link from "next/link";

const JamesPrueba = () => {
  return (
    <ul>
      <li>
        <Link href="/projects/10">
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/projects/10/ventas">
          <a>Venta</a>
        </Link>
      </li>
      <li>
        <Link href="/projects/10/reservas">
          <a>Reservas</a>
        </Link>
      </li>
      <li>
        <Link href="/projects/10/cobros">
          <a>Cobros</a>
        </Link>
      </li>
    </ul>
  );
};

export default JamesPrueba;