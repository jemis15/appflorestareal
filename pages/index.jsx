import Link from "next/link";
import Layout from "../components/Layout/Layout";

const VENTAS = [
  {
    id: 1,
    type_document: "DNI",
    document: "71118137",
    image:
      "https://pm1.narvii.com/6546/0c124f2f570beeed8cc6b16f8908a96dbae9006c_00.jpg",
    name: "Cesar Tambien Navarro",
    type_venta: "Al credito",
    total: "35000",
    userCreator: {
      id: 1,
      name: "Jafett Jamis Flores Meza",
    },
    created_at: "15/08/2021",
    updated_at: "15/08/2021",
  },
  {
    id: 2,
    type_document: "RUC",
    document: "20552486592",
    image: "https://www.bcp.com.bo/BilleteraMovil/Images/LogoBCP1.png",
    name: "Banco de Creditos del Perú",
    type_venta: "Al contado",
    total: "65000",
    userCreator: {
      id: 1,
      name: "Jafett Jamis Flores Meza",
    },
    created_at: "25/08/2021",
    updated_at: "25/08/2021",
  },
  {
    id: 3,
    type_document: "DNI",
    document: "733655923",
    image:
      "https://www.redaccionmedica.com/images/destacados/varon-de-51-anos-con-riesgo-vascular-perfil-del-futuro-cerebro-enfermo-9394.jpg",
    name: "Luis Padilla Perez",
    type_venta: "Al credito",
    total: "26000",
    userCreator: {
      id: 1,
      name: "Jafett Jamis Flores Meza",
    },
    created_at: "20/10/2021",
    updated_at: "20/10/2021",
  },
  {
    id: 4,
    type_document: "DNI",
    document: "45586695",
    image:
      "https://uploads.vibra.co/1/2020/09/perfil-psicologico-de-un-hombre-infiel-1.jpg",
    name: "Ronaldo Aliaga Quispe",
    type_venta: "Al credito",
    total: "18500",
    userCreator: {
      id: 1,
      name: "Jafett Jamis Flores Meza",
    },
    created_at: "28/10/2021",
    updated_at: "28/10/2021",
  },
  {
    id: 5,
    type_document: "DNI",
    document: "45526668",
    image:
      "https://aufloria.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-18-at-14.18.38-8.jpeg",
    name: "Ruben Chulluncui Quispe",
    type_venta: "Al credito",
    total: "32800",
    userCreator: {
      id: 1,
      name: "Jafett Jamis Flores Meza",
    },
    created_at: "05/11/2021",
    updated_at: "05/11/2021",
  },
];

export default function Index() {
  return (
    <div className="px-7 pt-4 pb-7">
      <div className="max-w-5xl mx-auto">
        <h3 className="font-bold text-xl">Inicio</h3>
      </div>
      <div className="flex max-w-5xl mx-auto space-x-4 mt-10">
        <div className="space-y-4 flex-1">
          <ReservasRecientes />
          <VentasRecientes />
        </div>
        <div className="space-y-4" style={{ width: "340px" }}>
          <Cuenta />
          <Creditos />
          <Reservas />
          <Lotes />
        </div>
      </div>
    </div>
  );
}

function Content({ children, ...otherProps }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm" {...otherProps}>
      {children}
    </div>
  );
}

function TitleContent({ children, ...otherProps }) {
  return (
    <h4 className="text-gray-900 font-semibold text-lg" {...otherProps}>
      {children}
    </h4>
  );
}

function ReservasRecientes() {
  return (
    <Content>
      <TitleContent>Reservaciones recientes</TitleContent>
      <div className="mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border-t border-b border-gray-300 py-3 pr-2 font-semibold text-sm text-left">
                Clientes
              </th>
              <th className="border-t border-b border-gray-300 py-3 px-2 font-semibold text-sm text-left">
                Caduce
              </th>
              <th className="border-t border-b border-gray-300 py-3 pl-2 font-semibold text-sm text-left">
                Inicial
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(null)
              .map((item, key) => {
                return (
                  <tr className="hover:bg-gray-50" key={key}>
                    <td>
                      <div className="flex items-center space-x-2 py-3 pr-2">
                        <div>
                          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        </div>
                        <div>
                          <div className="text-sm">
                            {item} Luis Uscamaita Sandro
                          </div>
                          <div className="text-xs text-gray-500">
                            DNI: 72255384
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm py-3 px-2">10 oct 2021</div>
                    </td>
                    <td>
                      <div className="text-sm py-3 pl-2">S/ 480</div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Content>
  );
}

function VentasRecientes() {
  return (
    <Content>
      <TitleContent>Ventas recientes</TitleContent>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr className="border-b border-t border-gray-300">
            <th className="pr-2 py-4 leading-none text-left font-semibold text-gray-900 text-sm">
              Cliente
            </th>
            <th className="px-2 py-4 leading-none text-left font-semibold text-gray-900 text-sm">
              Tipo
            </th>
            <th className="px-2 py-4 leading-none text-left font-semibold text-gray-900 text-sm">
              Creado
            </th>
            <th className="pl-2 py-4 leading-none text-left font-semibold text-gray-900 text-sm">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {VENTAS.map((venta, key) => {
            return (
              <tr key={key} className="hover:bg-gray-50 mt-4">
                <td className="py-3 pr-2">
                  <div className="flex space-x-3">
                    <div>
                      <span
                        className="inline-block w-8 h-8 bg-gray-300 rounded-full"
                        style={{ backgroundImage: "venta.image" }}
                      ></span>
                    </div>
                    <div>
                      <div className="leading-none text-sm">{venta.name}</div>
                      <div className="text-gray-500 text-xs mt-1">
                        {venta.type_document}: {venta.document}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div>
                    <span className="bg-blue-100 text-blue-500 px-2 rounded-full font-semibold text-xs">
                      {venta.type_venta}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div>
                    <div className="text-sm">20 abr 2021</div>
                    <div className="text-xs text-gray-500">
                      {venta.userCreator.name}
                    </div>
                  </div>
                </td>
                <td className="py-3 pl-2">
                  <div>
                    <span className="text-sm">S/ {venta.total}</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              <div className="text-center pt-3">
                <Link href="/ventas">
                  <a className="block bg-gray-100 hover:bg-gray-200 py-2 rounded text-sm text-gray-900">
                    Ver toda las ventas
                  </a>
                </Link>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </Content>
  );
}

function Cuenta() {
  return (
    <Content>
      <TitleContent>
        <Link href="/caja">
          <a className="hover:text-blue-500">Cuenta</a>
        </Link>
      </TitleContent>
      <div className="text-3xl text-blue-800 font-bold mt-3">S/ 3500</div>
      <div className="flex justify-between mt-4">
        <div className="flex-1">
          <div className="text-gray-500 text-xs">Ingresos</div>
          <div className="space-x-2 mt-1">
            <span className="font-bold text-green-500">+</span>
            <span className="font-semibold text-sm">S/ 4600</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-gray-500 text-xs">Egresos</div>
          <div className="space-x-2 mt-1">
            <span className="font-bold text-red-500">-</span>
            <span className="font-semibold text-sm">S/ 700</span>
          </div>
        </div>
      </div>
    </Content>
  );
}

function Lotes() {
  return (
    <Content>
      <TitleContent>Lotes</TitleContent>
      <ul className="space-y-3 mt-4">
        <li className="text-gray-700 text-sm">15 Vendidos</li>
        <li className="text-gray-700 text-sm">10 Reservados</li>
        <li className="text-gray-700 text-sm">15/40 Disponibles</li>
      </ul>
    </Content>
  );
}
function Creditos() {
  return (
    <Content>
      <TitleContent>Creditos</TitleContent>
      <ul className="space-y-3 mt-4">
        <li className="text-gray-700 text-sm">5 Por caducar</li>
        <li className="text-gray-700 text-sm">2 En estado de tolerancia</li>
        <li className="text-gray-700 text-sm">10 Caducados</li>
      </ul>
    </Content>
  );
}
function Reservas() {
  return (
    <Content>
      <TitleContent>Reservas</TitleContent>
      <ul className="space-y-3 mt-4">
        <li className="text-gray-700 text-sm">2 Por caducar</li>
        <li className="text-gray-700 text-sm">0 Caducadas</li>
        <li className="text-gray-700 text-sm">10 Finalizados</li>
      </ul>
    </Content>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
