import { useRouter } from "next/router";
import BaseLink from "../../../../components/Base/BaseLink";
import BaseText from "../../../../components/Base/BaseText";
import ButtonCreateVenta from "../../../../components/ButtonCreateVenta/ButtonCreateVenta";
import { ButtonFilterDate } from "../../../../components/ButtonFilterDate";
import { ButtonFilterDeslizable } from "../../../../components/ButtonFilterDeslizable";
import { InputSearch } from "../../../../components/InputSearch";
import Layout from "../../../../components/Layout/Layout";

const LINKS_NAVIGATION = [
  { label: "Todas las ventas", content: "ALL", default: true },
  { label: "Pendientes", content: "PENDIENTES" },
  { label: "Concluidos", content: "CONCLUIDOS" },
  { label: "Anulados", content: "ANULADOS" },
];

export default function Ventas() {
  const router = useRouter();

  function links() {
    return LINKS_NAVIGATION.map((link, key) => (
      <BaseLink
        key={key}
        to={`/ventas?content=${link.content}`}
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
          <div>
            <BaseText size="header1" weight="bold">
              Ventas
            </BaseText>
          </div>
          <div className="flex items-center space-x-2">
            <ButtonCreateVenta />
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
                textStrong="Tipo de publicación:"
                options={[
                  { label: "Todos los tipos", label2: "Todos", value: "ALL" },
                  { label: "Al contado", value: "Al contado" },
                  { label: "Al credito", value: "Al credito" },
                ]}
                valueDefault="ALL"
                onChange={(e) => console.log(e)}
              />

              <ButtonFilterDeslizable
                textStrong="Estado de venta:"
                options={[
                  { label: "Todos los estados", label2: "Todos", value: "ALL" },
                  { label: "En proceso", value: "En proceso" },
                  { label: "Anulado", value: "Anulado" },
                  { label: "Finalizado", value: "Finalizado" },
                ]}
                valueDefault="ALL"
                onChange={(e) => console.log(e)}
              />

              <ButtonFilterDate />

              <InputSearch />
            </div>
            <div>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300"></th>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300">
                      Cliente
                    </th>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300">
                      Estado de venta
                    </th>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300">
                      Tipo de venta
                    </th>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300">
                      Total
                    </th>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300">
                      Guardado por última vez
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array(5)
                    .fill(null)
                    .map((item, key) => {
                      var isFirstItem = key === 0;

                      return (
                        <tr className="hover:bg-gray-50" key={key}>
                          <td
                            className={`${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                          >
                            <div>
                              <input type="checkbox" />
                            </div>
                          </td>
                          <td
                            className={`${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                          >
                            <div className="flex space-x-3 py-2">
                              <div>
                                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-sm">
                                  Luis Unchupaico Limas
                                </div>
                                <div className="text-sm text-gray-500">
                                  DNI: 71154633
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                  <div>
                                    <div className="w-5 h-5 rounded-full bg-gray-300"></div>
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Jafett Jamis Flores Meza
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            className={`${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div>
                                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                              </div>
                              <div className="text-sm text-green-500">
                                En proceso
                              </div>
                            </div>
                          </td>
                          <td
                            className={`${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                          >
                            <div className="text-sm text-gray-800">
                              Al contado
                            </div>
                          </td>
                          <td
                            className={`${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                          >
                            <div className="text-sm text-gray-800">
                              S/ 25000
                            </div>
                          </td>
                          <td
                            className={`${
                              !isFirstItem && "border-t border-gray-300"
                            }`}
                          >
                            <div className="relative">
                              <div className="space-y-2">
                                <div className="text-sm text-gray-800">
                                  11/11/2021 13:49
                                </div>
                                <div className="text-sm text-gray-800">
                                  Jafett Jamis Flores Meza
                                </div>
                                <div className="absolute"></div>
                              </div>
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

Ventas.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
