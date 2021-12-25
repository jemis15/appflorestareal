import { useRouter } from "next/router";
import BaseLink from "../../../../components/Base/BaseLink";
import BaseText from "../../../../components/Base/BaseText";
import ButtonCreateVenta from "../../../../components/ButtonCreateVenta/ButtonCreateVenta";
import { ButtonFilterDate } from "../../../../components/ButtonFilterDate";
import { ButtonFilterDeslizable } from "../../../../components/ButtonFilterDeslizable";
import { InputSearch } from "../../../../components/InputSearch";
import Layout from "../../../../components/Layout/Layout";
import {
  Search as IconSearch,
  Close as IconClose,
} from "../../../../components/SVGIcons";

const LINKS_NAVIGATION = [
  { label: "Todo los movimientos", content: "ALL", default: true },
  { label: "Digital", content: "DIGITAL" },
  { label: "Ingresos / Egresos", content: "INGRESOS_EGRESOS" },
  { label: "Cajas habilitadas", content: "HABILITADAS" },
  { label: "Confirmar billetajes", content: "BILLETAJES" },
];

export default function Caja() {
  const router = useRouter();

  function links() {
    return LINKS_NAVIGATION.map((link, key) => (
      <BaseLink
        key={key}
        to={`/caja?content=${link.content}`}
        className={`inline-block px-3 py-2 rounded text-sm ${
          router.query.content === link.content || link.default
            ? "font-bold text-blue-500 bg-blue-50 hover:bg-blue-100"
            : "text-sm text-gray-900 hover:bg-gray-100"
        }`}
      >
        {link.label}
      </BaseLink>
    ));
  }

  return (
    <div className="px-7 pt-4 pb-7 h-screen flex flex-col">
      <div className="h-auto">
        <div className="flex justify-between my-4">
          <div className="flex items-center space-x-2">
            <BaseText size="header1" weight="bold">
              Caja
            </BaseText>
            <span>-</span>
            <BaseText className="text-blue-500" size="header1" weight="bold">
              S/ 23,580
            </BaseText>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm font-semibold bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-md">
              Habilitar caja de un usuario
            </button>
            <button className="px-3 py-2 text-sm font-semibold bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-md">
              Subir billetaje
            </button>
            <button className="px-3 py-2 text-sm font-semibold bg-green-500 hover:bg-green-600 text-white rounded-md">
              Crear ingreso
            </button>
            <button className="px-3 py-2 text-sm font-semibold bg-green-500 hover:bg-green-600 text-white rounded-md">
              Crear egreso
            </button>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="bg-white rounded-lg border h-full p-4">
          <div className="space-x-2">{links()}</div>
          <hr className="border-gray-300 mt-4" />
          <div>
            <div className="px-2 py-4 flex items-center space-x-2">
              <ButtonFilterDeslizable
                textStrong="Método de pago:"
                options={[
                  { label: "Todos los metodos", label2: "Todos", value: "ALL" },
                  { label: "En efectivo", value: "En efectivo" },
                  { label: "Transferencia", value: "Transferencia" },
                  { label: "Tarjeta", value: "Tarjeta" },
                  { label: "Yape", value: "Yape" },
                ]}
                valueDefault="ALL"
                onChange={(e) => console.log(e)}
              />

              <ButtonFilterDate />

              <InputSearch />
            </div>
            <div className="overflow-hidden">
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <th
                      className="text-xs text-gray-500 text-left font-semibold pl-6 pr-3 border-b border-gray-300"
                      style={{ width: "20%", height: 40 }}
                    >
                      Número de operación
                    </th>
                    <th
                      className="text-xs text-gray-500 text-left font-semibold px-3 border-b border-gray-300"
                      style={{ width: "20%", height: 40 }}
                    >
                      Fecha
                    </th>
                    <th
                      className="text-xs text-gray-500 text-left font-semibold px-3 border-b border-gray-300"
                      style={{ width: "20%", height: 40 }}
                    >
                      Monto
                    </th>
                    <th
                      className="text-xs text-gray-500 text-left font-semibold px-3 border-b border-gray-300"
                      style={{ width: "20%", height: 40 }}
                    >
                      Metodo
                    </th>
                    <th
                      className="text-xs text-gray-500 text-left font-semibold pl-3 pr-6 border-b border-gray-300"
                      style={{ width: "20%", height: 40 }}
                    >
                      Remitente
                    </th>
                  </tr>
                </thead>
              </table>
              <table className="table-auto w-full">
                <tbody>
                  {Array(10)
                    .fill(null)
                    .map((item, key) => {
                      var isFirstItem = key === 0;

                      return (
                        <tr className="hover:bg-gray-50" key={key}>
                          <td
                            className={`pl-6 pr-3 ${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                            style={{ width: "20%", height: 63 }}
                          >
                            <div className="text-sm text-gray-800 font-semibold">
                              000012
                            </div>
                          </td>
                          <td
                            className={`px-3   ${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                            style={{ width: "20%", height: 63 }}
                          >
                            <div className="text-sm text-gray-800">
                              10/08/2021 06:05 PM
                            </div>
                          </td>
                          <td
                            className={`px-3 ${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                            style={{ width: "20%", height: 63 }}
                          >
                            <div className="text-sm text-gray-800">
                              + S/ 500
                            </div>
                          </td>
                          <td
                            className={`px-3 py-2 ${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                            style={{ width: "20%", height: 63 }}
                          >
                            <div className="text-sm text-gray-800">
                              {/* <div>Efectivo</div> */}
                              <div>
                                <strong className="font-semibold">
                                  Digital:
                                </strong>{" "}
                                Transferencia
                              </div>
                              {/* <div className="text-gray-500 mt-2">
                                Banco de Creditos Del Perú
                              </div>
                              <div className="text-xs text-gray-500">
                                252566544581
                              </div> */}
                            </div>
                          </td>
                          <td
                            className={`pl-3 pr-6 ${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                            style={{ width: "20%", height: 63 }}
                          >
                            <div className="text-sm text-gray-800">
                              Luis Castañeda Alfonso
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Caja.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
