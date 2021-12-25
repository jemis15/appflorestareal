import { useState } from "react";
import BaseText from "../Base/BaseText";
import BaseButton from "../Button/BaseButton";
import { Popup } from "../Popup";
import {
  AngleUpDown,
  Caret,
  Chevron,
  Close,
  Close as IconClose,
  Crear as IconCrear,
  Pen,
} from "../SVGIcons";

const METODOSDEPAGO = [
  { name: "En efectivo" },
  {
    name: "Transferencia bancaria",
    options: [
      { name: "numberOperacion", label: "Número de operación" },
      { name: "fechaDeposito", label: "Fecha de deposito" },
      { name: "banco", label: "Banco" },
    ],
  },
  {
    name: "Tarjeta",
    options: [{ name: "numberOperacion", label: "Número de operación" }],
  },
  {
    name: "Yape",
    options: [{ name: "numberOperacion", label: "Número de operación" }],
  },
];

const BANCOS = [
  { id: 1, name: "BANCO DE CREDITOS DEL PERU", number: "244558566897" },
  { id: 2, name: "BANCO DE LA NACION", number: "022554856654" },
];

const ButtonCreateVenta = () => {
  const [optionPago, setOptionPago] = useState("CONTADO");
  const [metodoPago, setMetodoPago] = useState("En efectivo");
  const [banco, setBanco] = useState({});
  const [createSale, setCreateSale] = useState({
    cliente_id: null,
    estate: [],
    type_sale: null,// 0:al contado, 1:al credito
    status: null,//0:borrador, 1:en_venta, 2:reservado, 3:vendido, 4:anulado 0,1,2,3,4 
    path_contrato: null,
  });

  return (
    <div>
      <Popup
        trigger={
          <BaseButton
            variant="create"
            icon={<IconCrear size="16" fill />}
            label={
              <BaseText size="value" weight="bold">
                Crear
              </BaseText>
            }
          />
        }
        overlayStyle={{ background: "rgba(0,0,0,0.4)" }}
        lockScroll
        modal
        nested
      >
        {(close) => (
          <div
            className="fixed top-0 right-0 bottom-0 z-20 bg-white"
            style={{ width: 540 }}
            overlayStyle={{ background: "blue !important" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex-none bg-white flex items-center justify-between px-5 py-5 border-b">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <BaseText size="value" color="heading">
                      Proyecto Satipo
                    </BaseText>
                    <BaseText
                      weight="bold"
                      color="heading"
                      className="text-2xl leading-6"
                    >
                      Crear
                    </BaseText>
                  </div>
                </div>
                <div>
                  <button
                    className="flex items-center justify-center p-3 hover:bg-gray-200 rounded-md"
                    onClick={close}
                  >
                    <IconClose size="14" />
                  </button>
                </div>
              </div>
              <div className="flex-auto px-5 py-2 overflow-y-auto">
                <div className="mt-3">
                  <div className="font-semibold">Seleccione un cliente</div>
                  <div className="mt-3">
                    <Popup
                      trigger={
                        <div className="border rounded-md flex justify-between items-center px-3 py-2">
                          <div>Buscar cliente</div>
                          <div>
                            <AngleUpDown />
                          </div>
                        </div>
                      }
                      position={["bottom left", "bottom right"]}
                    >
                      <div
                        className="border rounded-md bg-white p-4 shadow"
                        style={{ width: 483 }}
                      >
                        <div>
                          <input
                            type="text"
                            className="border rounded-md w-full px-3 py-2"
                            placeholder="Buscar cliente"
                          />
                        </div>
                        <div className="text-xs text-gray-500 font-semibold mt-4">
                          BUSQUEDA RECIENTE
                        </div>
                        <div className="mt-3 space-y-3">
                          <div>Cliente 1</div>
                          <div>Cliente 2</div>
                          <div>Cliente 3</div>
                        </div>
                      </div>
                    </Popup>
                  </div>
                  <div className="mt-3 hidden">
                    <div className="border rounded-md flex justify-between items-center px-4 py-3 hover:bg-gray-100 hover:border-gray-300 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-700">
                            Carlos Alcides Carrion
                          </div>
                          <div className="text-sm text-gray-500">71118137</div>
                        </div>
                      </div>
                      <div>
                        <Chevron size={16} className="transform rotate-180" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-semibold">
                    Agrega propiedades a vender
                  </div>
                  <ul className="divide-y border rounded-md mt-3">
                    {Array(2)
                      .fill(null)
                      .map((item, key) => (
                        <li
                          key={key}
                          className="flex items-center justify-between bg-gray-100 px-4 py-3"
                        >
                          <div>
                            <div className="text-sm">
                              Lote #{key + 1} - Manzana F
                            </div>
                            {/* <div className="text-sm">Lote {key + 1}</div>
                            <div className="text-xs text-gray-500">Manzana A</div> */}
                          </div>
                          <div>
                            <div className="text-sm">S/ 25000</div>
                            {/* <div className="text-xs text-gray-500">Precio</div> */}
                          </div>
                          <div className="flex items-center space-x-4">
                            <button>
                              <Pen size="16" />
                            </button>
                            <button>
                              <Close size="12" />
                            </button>
                          </div>
                        </li>
                      ))}
                    <li className="bg-gray-100 px-3 py-3">
                      <BaseText className="text-blue-500" size="value">
                        + Agrega otra propiedad
                      </BaseText>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <div className="font-semibold">Opciones de pago</div>
                  <div className="mt-2 divide-y border rounded-md">
                    <div>
                      <button
                        className={`px-4 py-3 flex items-center space-x-3 w-full ${
                          optionPago === "CONTADO"
                            ? ""
                            : "bg-gray-100 border-gray-300"
                        }`}
                        onClick={() => setOptionPago("CONTADO")}
                      >
                        <div>
                          <IconRatio active={optionPago === "CONTADO"} />
                        </div>
                        <div className="text-sm">Al contado</div>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`px-4 py-3 flex items-center space-x-3 w-full ${
                          optionPago === "CREDITO"
                            ? ""
                            : "bg-gray-100 border-gray-300"
                        }`}
                        onClick={() => setOptionPago("CREDITO")}
                      >
                        <div>
                          <IconRatio active={optionPago === "CREDITO"} />
                        </div>
                        <div className="text-sm">Al credito</div>
                      </button>
                      {/* {optionPago === "CREDITO" && <hr />} */}
                      <div className={optionPago === "CREDITO" ? "" : "hidden"}>
                        <div className="grid grid-cols-2 ml-8 gap-x-8 gap-y-2 px-5 pb-5 pt-2 rounded-md">
                          <div>
                            <div className="text-sm">Numero de cuotas</div>
                            <div className="mt-2">
                              <input
                                type="text"
                                className="border rounded-md px-2 py-1 w-full"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="text-sm">TEA</div>
                            <div className="mt-2">
                              <input
                                type="text"
                                className="border rounded-md px-2 py-1 w-full"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="text-sm">Inicial</div>
                            <div className="mt-2">
                              <input
                                type="text"
                                className="border rounded-md px-2 py-1 w-full"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="text-sm">Fecha de pago</div>
                            <div className="mt-2">
                              <input
                                type="date"
                                className="border rounded-md px-2 py-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 hidden">
                  <div className="font-semibold">
                    Metodo de pago de la inicial
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <button className="px-3 py-2 bg-gray-300 hover:bg-gray-200 text-sm rounded-l-md rounded-r-sm">
                      En efectivo
                    </button>
                    <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-sm">
                      Transferencia bancaria
                    </button>
                    <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-sm">
                      Tarjeta
                    </button>
                    <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-l-sm rounded-r-md">
                      Yape
                    </button>
                  </div>
                  <div className="mt-2">
                    <div className="text-sm text-gray-800">
                      Ingrese el monto efectivo
                    </div>
                    <input
                      type="text"
                      className="border rounded-md px-3 py-1 mt-2"
                    />
                    <div className="text-sm mt-1 text-yellow-600">
                      Se deve dar de vuelto <strong>S/ 0.5</strong>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-semibold">
                    Metodo de pago de la inicial
                  </div>
                  <div className="mt-2 divide-y divide-gray-300 border border-gray-300 rounded-md">
                    {METODOSDEPAGO.map((met, key) => {
                      return (
                        <div key={key}>
                          <div
                            className={`flex items-center space-x-3 px-3 py-3 cursor-pointer ${
                              met.name === metodoPago ? "" : "bg-gray-100"
                            }`}
                            onClick={() => setMetodoPago(met.name)}
                          >
                            <div>
                              <IconRatio active={met.name === metodoPago} />
                            </div>
                            <div className="text-sm">{met.name}</div>
                          </div>
                          {met.name === metodoPago &&
                            met.options &&
                            met.options.length > 0 && (
                              <div className="px-3 pb-5">
                                <div className="ml-9 space-y-3">
                                  {met.options.map((option) => {
                                    if (option.name === "numberOperacion") {
                                      return (
                                        <div>
                                          <div className="text-xs text-gray-400 font-semibold">
                                            {option.label}
                                          </div>
                                          <input
                                            type="text"
                                            className="px-3 py-1 mt-2 border rounded-md"
                                          />
                                        </div>
                                      );
                                    } else if (
                                      option.name === "fechaDeposito"
                                    ) {
                                      return (
                                        <div>
                                          <div className="text-xs text-gray-400 font-semibold">
                                            {option.label}
                                          </div>
                                          <input
                                            type="date"
                                            className="px-3 py-1 mt-2 border rounded-md"
                                          />
                                        </div>
                                      );
                                    } else if (option.name === "banco") {
                                      return (
                                        <div>
                                          <div className="text-xs text-gray-400 font-semibold">
                                            {option.label}
                                          </div>
                                          <Popup
                                            trigger={
                                              <button className="flex items-center space-x-4 border rounded-md px-3 py-2 mt-2">
                                                <div className="text-sm">
                                                  Banco{" "}
                                                  <strong>
                                                    {banco.name || "Ninguno"}
                                                  </strong>
                                                </div>
                                                <div>
                                                  <Caret size="14" fill />
                                                </div>
                                              </button>
                                            }
                                            position={[
                                              "bottom left",
                                              "bottom right",
                                            ]}
                                          >
                                            {(close) => (
                                              <div className="bg-white rounded-md border divide-y">
                                                <div className="text-xs text-gray-500 font-semibold px-3 py-1">
                                                  BANCOS
                                                </div>
                                                {BANCOS.map((banco) => (
                                                  <div
                                                    className="group px-3 py-2 hover:bg-blue-500 cursor-pointer"
                                                    onClick={() => {
                                                      setBanco(banco);
                                                      close();
                                                    }}
                                                  >
                                                    <div className="text-xs text-gray-800 group-hover:text-gray-100">
                                                      {banco.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500 group-hover:text-gray-200">
                                                      Número de cuenta:{" "}
                                                      {banco.number}
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </Popup>
                                        </div>
                                      );
                                    }
                                  })}
                                </div>
                              </div>
                            )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-semibold">Contrato</div>
                  <div className="flex space-x-1 mt-2">
                    <button className="px-3 py-2 bg-gray-300 hover:bg-gray-200 text-sm rounded-l-md rounded-r-sm">
                      Autogenerado
                    </button>
                    <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-l-sm rounded-r-md">
                      Subir contrato
                    </button>
                  </div>
                  <div className="mt-2 bg-gray-100 rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <BaseText size="value" weight="bold">
                        Subir contrato
                      </BaseText>
                      <button className="relative">
                        <BaseText size="value" className="text-blue-500">
                          Subir contrato
                        </BaseText>
                        <input
                          type="file"
                          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                          style={{ fontSize: 0 }}
                        />
                      </button>
                    </div>
                    <div className="mt-2">
                      <div className="w-24 h-24 border-2 border-blue-500 rounded-xl"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-semibold">Adjuntar archivos</div>
                  <div className="mt-2 bg-gray-100 rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <BaseText size="value" weight="bold">
                        Subir archivos
                      </BaseText>
                      <button className="relative">
                        <BaseText size="value" className="text-blue-500">
                          Subir archivos
                        </BaseText>
                        <input
                          type="file"
                          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                          style={{ fontSize: 0 }}
                        />
                      </button>
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="flex justify-between items-center border rounded-md px-4 py-3 bg-white">
                        <div className="text-sm">Copia de dni</div>
                        <div>
                          <button>
                            <Close size="12" />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center border rounded-md px-4 py-3 bg-white">
                        <div className="text-sm">Recibo de luz</div>
                        <div>
                          <button>
                            <Close size="12" />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center border rounded-md px-4 py-3 bg-white">
                        <div className="text-sm">Titulo de propiedad</div>
                        <div>
                          <button>
                            <Close size="12" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-semibold">Otros</div>
                  <div className="mt-2">
                    <div className="text-sm">Fecha de creación</div>
                    <input
                      type="date"
                      className="border rounded-md px-3 py-1 mt-2"
                      defaultValue="2021-12-28"
                    />
                  </div>
                  <div className="mt-2">
                    <div className="text-sm">Usuario</div>
                    <div className="mt-2">
                      <Popup
                        trigger={
                          <button className="flex items-center space-x-4 bg-gray-200 rounded-full px-1 py-1">
                            <div className="flex items-center space-x-2">
                              <div className="w-7 h-7 border-2 rounded-full border-white bg-blue-800 text-white flex items-center justify-center text-xs font-semibold">
                                J
                              </div>
                              <BaseText
                                size="value"
                                color="value"
                                weight="bold"
                              >
                                Jafett Jamis Flores Meza
                              </BaseText>
                            </div>
                            <div className="pr-2">
                              <Caret size="16" fill />
                            </div>
                          </button>
                        }
                        position={[
                          "bottom left",
                          "bottom right",
                          "top left",
                          "top right",
                        ]}
                      >
                        <div className="bg-white rounded-lg border shadow p-1 space-y-1">
                          <div className="flex items-center hover:bg-gray-100 cursor-pointer px-1 py-1 space-x-2 rounded-md">
                            <div className="w-7 h-7 border bg-yellow-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                              L
                            </div>
                            <BaseText size="value">Luis Peres Garcia</BaseText>
                          </div>
                          <div className="flex items-center hover:bg-gray-100 cursor-pointer px-1 py-1 space-x-2 rounded-md">
                            <div className="w-7 h-7 border bg-yellow-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                              M
                            </div>
                            <BaseText size="value">Luis Peres Garcia</BaseText>
                          </div>
                          <div className="flex items-center hover:bg-gray-100 cursor-pointer px-1 py-1 space-x-2 rounded-md">
                            <div className="w-7 h-7 border bg-yellow-700 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                              N
                            </div>
                            <BaseText size="value">Luis Peres Garcia</BaseText>
                          </div>
                        </div>
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none">
                <div className="border-t flex">
                  <div className="flex space-x-3 ml-auto px-3 py-3">
                    <button
                      className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-500"
                      onClick={close}
                    >
                      <BaseText size="value" weight="bold">
                        Cancelar
                      </BaseText>
                    </button>
                    <button className="px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white">
                      <BaseText size="value" weight="bold">
                        Guardar venta
                      </BaseText>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

const IconRatio = ({ active }) => {
  return (
    <div className="w-6 h-6 border-2 border-gray-900 rounded-full flex items-center justify-center">
      {active && (
        <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
      )}
    </div>
  );
};

export default ButtonCreateVenta;
