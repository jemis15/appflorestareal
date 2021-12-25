import { useState } from "react";
import BaseText from "../../../../../components/Base/BaseText";
import Layout from "../../../../../components/Layout/Layout";
import NavSetting from "../../../../../components/NavSetting/NavSetting";
import SearchBar from "../../../../../components/SearchBar/SearchBar";
import { Pen as IconPen, User as IconUser } from "../../../../../components/SVGIcons";

export default function Configuraciones() {
  const roles = [
    { id: 1, name: "Administrador", colorString: "#3498DB", memberCount: 2 },
    { id: 2, name: "Cajero", colorString: "#28B463", memberCount: 1 },
    { id: 3, name: "Analista", colorString: "#D35400", memberCount: 1 },
  ];
  const [query, setQuery] = useState("");

  return (
    <div className="px-7 pt-4 pb-7 h-screen">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        <div className="flex-none">
          <BaseText size="header1" weight="bold">
            Configuración
          </BaseText>
        </div>
        <div className="flex-auto flex space-x-6 mt-5 overflow-hidden">
          <NavSetting />
          <div className="flex-auto bg-white rounded-lg p-10">
            <div>
              <div>
                <div className="mb-5">
                  <BaseText size="header1" color="heading" weight="bold">
                    Roles
                  </BaseText>
                </div>
                <div className="mb-4">
                  <BaseText size="value" color="value">
                    Usa roles para organizar a los miembros de tu grupo y
                    personalizar sus permisos.
                  </BaseText>
                </div>
                <div>
                  <RoleSearch
                    query={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onClear={() => setQuery("")}
                  />
                </div>
                <div className="mt-8">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="border-b pb-2 font-semibold text-left text-xs">
                          <BaseText size="valueDescription">Roles - 3</BaseText>
                        </th>
                        <th className="border-b pb-2 font-semibold text-left text-xs">
                          <BaseText size="valueDescription">Miembros</BaseText>
                        </th>
                        <th className="border-b pb-2 w-px"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {roles.map((rol) => {
                        if (
                          query != "" &&
                          !rol.name.toLowerCase().includes(query.toLowerCase())
                        ) {
                          return null;
                        }
                        return (
                          <tr
                            key={rol.id}
                            className="group border-b hover:bg-gray-50 focus-within:bg-gray-50"
                          >
                            <td className="py-2 text-sm">{rol.name}</td>
                            <td className="py-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <div className="text-gray-600">{rol.memberCount}</div>
                                <div className="text-gray-600">
                                  <IconUser size="14" />
                                </div>
                              </div>
                            </td>
                            <td className="py-2">
                              <div className="flex flex-nowrap space-x-4">
                                <button className="w-9 h-9 bg-gray-200 rounded-full inline-flex items-center justify-center opacity-0 group-hover:opacity-100">
                                  <IconPen size="16" />
                                </button>
                                <button className="w-9 h-9 bg-gray-100 group-hover:bg-gray-200 rounded-full font-bold text-xl">
                                  ···
                                </button>
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
      </div>
    </div>
  );
}

const RoleSearch = ({ query, onClear, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-auto">
        <SearchBar
          query={query}
          onChange={onChange}
          onClear={onClear}
          placeholder="Buscar rol"
        />
      </div>
      <button className="flex-none px-3 py-2 bg-blue-500 text-white rounded-md">
        <BaseText size="value" weight="bold">
          Crear rol
        </BaseText>
      </button>
    </div>
  );
};

Configuraciones.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
