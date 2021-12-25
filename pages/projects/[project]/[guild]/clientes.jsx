import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import BaseLink from "../../../../components/Base/BaseLink";
import BaseText from "../../../../components/Base/BaseText";
import ButtonCreateClient from "../../../../components/ButtonCreateClient/ButtonCreateClient";
import { ButtonFilterDeslizable } from "../../../../components/ButtonFilterDeslizable";
import { ButtonUpdateClient } from "../../../../components/ButtonUpdateClient";
import { InputSearch } from "../../../../components/InputSearch";
import Layout from "../../../../components/Layout/Layout";
import {
  Email as IconEmail,
  CarbonMap as IconMap,
  Phone as IconPhone,
  Arrow as IconArrow,
} from "../../../../components/SVGIcons";
import useClients from "../../../../hooks/useClients";

const LINKS_NAVIGATION = [
  { label: "Todos los clientes", content: "ALL", default: true },
  { label: "Mis clientes", content: "MIS_CLIENTES" },
  { label: "Favoritos", content: "FAVORITOS" },
  { label: "Clientes sin asignar", content: "SIN_ASIGNAR" },
];

export default function Clientes() {
  const { query } = useRouter();
  const [filter, setFilter] = useState({
    type: "",
    search: "",
  });
  const { clients, loading, refresh } = useClients({
    type: filter.type,
    search: filter.search,
    project: query.project,
    nav_router_name: query.nav,
  });
  const basePath = `/projects/${query.project}/${query.guild}/clientes`;

  const handleDeleteClient = async (client_id) => {
    const continueDelete = confirm(
      "Se eliminara el cliente. ¿Esta seguro que desea continuar?"
    );
    if (continueDelete) {
      try {
        await axios.delete(`/api/clients/${client_id}`);
        refresh();
      } catch (error) {
        console.log(error);
      }
    }
  };

  function links(basePath) {
    return LINKS_NAVIGATION.map((link, key) => {
      var active = false;

      if ((link.default && !query.content) || link.content === query.content) {
        active = true;
      }

      return (
        <BaseLink
          key={key}
          to={`${basePath}?content=${link.content}`}
          className={`inline-block px-3 py-2 rounded text-sm ${
            active
              ? "font-bold text-blue-500 bg-blue-50 hover:bg-blue-100"
              : "text-sm text-gray-900 hover:bg-gray-100"
          }`}
        >
          {link.label}
        </BaseLink>
      );
    });
  }

  return (
    <div className="px-7 pt-4 pb-7 h-screen flex flex-col">
      <div className="h-auto">
        <div className="flex justify-between my-4">
          <div>
            <BaseText size="header1" weight="bold">
              Clientes
            </BaseText>
          </div>
          <div className="flex items-center space-x-2">
            <ButtonCreateClient onSuccessCreate={refresh} />
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="bg-white rounded-lg border h-full p-4 overflow-y-auto">
          <div className="space-x-2">{links(basePath)}</div>
          <hr className="border-gray-300 mt-4" />
          <div>
            <div className="px-2 py-4 flex items-center space-x-2">
              <ButtonFilterDeslizable
                textStrong="Tipo de persona:"
                options={[
                  { label: "Todos los tipos", label2: "Todos", value: "ALL" },
                  { label: "Persona natural", value: "NATURAL" },
                  { label: "Empresa", value: "JURIDICA" },
                ]}
                valueDefault="ALL"
                onChange={(e) => setFilter({ ...filter, type: e.value })}
              />

              <InputSearch
                onChange={(e) =>
                  setFilter({ ...filter, search: e.target.value })
                }
              />
            </div>
            <div>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300"></th>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300">
                      Nombre
                    </th>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300">
                      Detalles
                    </th>
                    <th className="text-xs text-gray-500 text-left font-semibold py-3 border-b border-gray-300">
                      <div className="flex items-center space-x-2 text-blue-500">
                        <div>Guardado por última vez</div>
                        <div>
                          <IconArrow size={12} />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="text-center">
                        Cargando...
                      </td>
                    </tr>
                  ) : (
                    <>
                      {clients.map((client, key) => {
                        var isFirstItem = key === 0;

                        return (
                          <TrTableClient
                            key={key}
                            isFirstItem={isFirstItem}
                            client={client}
                            onDelete={handleDeleteClient}
                            onSuccessUpdate={refresh}
                          />
                        );
                      })}
                      {clients.length <= 0 && (
                        <tr>
                          <td colSpan={4} className="text-center">
                            No hay nada que mostrar.
                          </td>
                        </tr>
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TrTableClient = ({
  isFirstItem,
  isChecked,
  client,
  onDelete,
  onSuccessUpdate,
}) => {
  return (
    <tr className="hover:bg-gray-50 group">
      <td className={`${!isFirstItem && "border-t border-gray-300"}`}>
        <div>
          <input type="checkbox" checked={isChecked} />
        </div>
      </td>
      <td className={`${!isFirstItem && "border-t border-gray-300"}`}>
        <div className="flex space-x-3 py-2 relative">
          <div>
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          </div>
          <div className="space-y-1 relative">
            <div className="font-semibold text-sm">{client.name}</div>
            <div className="text-sm text-gray-500">
              <span className="uppercase">{client.type_document}</span>:{" "}
              {client.document}
            </div>
          </div>
          <div className="absolute bottom-0 left-12 space-x-2 bg-white opacity-0 group-hover:opacity-100">
            <ButtonUpdateClient
              client_id={client.id}
              onSuccessUpdate={onSuccessUpdate}
            />
            <button
              className="bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300"
              onClick={() => onDelete(client.id)}
            >
              <BaseText size="value">Eliminar</BaseText>
            </button>
          </div>
        </div>
      </td>
      <td className={`${!isFirstItem && "border-t border-gray-300"}`}>
        <div className="space-y-1 py-2">
          {client.email && (
            <div className="flex items-center space-x-2">
              <div>
                <IconEmail size="16" />
              </div>
              <div>
                <BaseText size="value" className="text-gray-800">
                  {client.email}
                </BaseText>
              </div>
            </div>
          )}
          {client.telefono && (
            <div className="flex items-center space-x-2">
              <div>
                <IconPhone size="16" />
              </div>
              <div>
                <BaseText size="value" className="text-gray-800">
                  {client.telefono}
                </BaseText>
              </div>
            </div>
          )}
          {client.direction && (
            <div className="flex items-center space-x-2">
              <div>
                <IconMap size="16" />
              </div>
              <div>
                <BaseText size="value" className="text-gray-800">
                  {client.direction}
                </BaseText>
              </div>
            </div>
          )}
        </div>
      </td>
      <td className={`${!isFirstItem && "border-t border-gray-300"}`}>
        <div className="relative">
          <div className="space-y-2">
            <div className="text-sm text-gray-800">
              {getFecha(client.updated_at)}
            </div>
            <div className="text-sm text-gray-800">
              {client.last_updated_by_name}
            </div>
            <div className="absolute"></div>
          </div>
        </div>
      </td>
    </tr>
  );
};

const getFecha = (fecha_string) => {
  // 2022-01-10T20:54:07
  const string_year = fecha_string.slice(0, 4);
  const string_month = fecha_string.slice(5, 7);
  const string_date = fecha_string.slice(8, 10);
  const string_hours = fecha_string.slice(11, 13);
  const string_minutes = fecha_string.slice(14, 16);
  // const string_seconds = fecha_string.slice(17, 19);

  var mifecha = `${string_date}/${string_month}/${string_year} ${string_hours}:${string_minutes}`;
  return mifecha;

  // var midate = new Date(
  //   string_year,
  //   string_month,
  //   string_date,
  //   string_hours,
  //   string_minutes,
  //   string_seconds
  // );

  // console.log(midate.getFullYear());

  // return `${midate.getDate()}/${midate.getMonth()}/${midate.getFullYear()} ${midate.getHours()}:${midate.getMinutes()}`;

  // return "11/11/2021 13:49";
};

Clientes.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
