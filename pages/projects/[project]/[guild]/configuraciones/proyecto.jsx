import BaseText from "../../../../../components/Base/BaseText";
import Layout from "../../../../../components/Layout/Layout";
import NavSetting from "../../../../../components/NavSetting/NavSetting";

export default function Configuraciones() {
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
              <div className="mb-5">
                <BaseText size="header1" weight="bold">
                  Vista general del proyecto
                </BaseText>
              </div>
              <div className="flex space-x-8">
                <div className="flex-1 flex space-x-8">
                  <div>
                    <div
                      className="group w-24 h-24 rounded-full bg-indigo-500 relative"
                      style={{
                        backgroundImage:
                          "url(https://cdn.discordapp.com/icons/922597422872531034/6d1c618aeec6da4b2c7758a2672c3765.webp?size=100)",
                      }}
                    >
                      <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0 z-20"
                        tabIndex={0}
                        style={{ fontSize: 0 }}
                      />
                      <div className="font-semibold text-white absolute inset-0 z-10 flex flex-col items-center justify-center whitespace-pre opacity-0 group-hover:opacity-100 uppercase">
                        <span className="text-xs select-none">Cambiar</span>
                        <span className="text-xs select-none">icono</span>
                      </div>
                      <span className="absolute inset-0 x-10 bg-gray-900 bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100"></span>
                    </div>
                    <div className="text-center mt-2">
                      <button className="font-semibold text-sm ring-offset-2 focus:ring outline-none w-full rounded-md text-gray-700">
                        Eliminar
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Recomendamos una imagen de al menos 512x512px para el
                      proyecto.
                    </div>
                    <button className="relative px-3 py-2 mt-4 border border-gray-500 rounded-md">
                      <BaseText size="value" className="text-gray-500">
                        Subir imagen
                      </BaseText>
                      <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full z-30 opacity-0 cursor-pointer"
                        style={{ fontSize: "0px" }}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <div>
                    <BaseText size="header4" color="heading" weight="bold">
                      Nombre del proyecto
                    </BaseText>
                  </div>
                  <Input value="Proyecto Satipo" />
                </div>
              </div>
              <hr className="my-10" />
              <div>
                <div className="mb-5">
                  <BaseText size="header1" weight="bold">
                    Ajuste de creditos
                  </BaseText>
                </div>
                <div className="divide-y">
                  <div className="flex justify-between items-center py-4">
                    <div className="">
                      Tasa de interes anual (TEA)
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="font-semibold">5%</div>
                      <div>
                        <button className="px-3 py-2 text-sm bg-gray-500 text-white rounded-md">
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <div className="">
                      Numero de cuotas (minimo y maximo en meses)
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="font-semibold">12-48 cuotas</div>
                      <div>
                        <button className="px-3 py-2 text-sm bg-gray-500 text-white rounded-md">
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <div className="">Dias de tolerancia</div>
                    <div className="flex items-center space-x-3">
                      <div className="font-semibold">3 días</div>
                      <div>
                        <button className="px-3 py-2 text-sm bg-gray-500 text-white rounded-md">
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <div className="">Mora</div>
                    <div className="flex items-center space-x-3">
                      <div className="font-semibold">50 soles</div>
                      <div>
                        <button className="px-3 py-2 text-sm bg-gray-500 text-white rounded-md">
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Input = ({ value, type = "text" }) => {
  return (
    <input
      type={type}
      className="block w-full border rounded-md focus:ring-2 ring-blue-100 ring-inset focus:border-blue-500 outline-none px-3 py-2 mt-2"
      defaultValue={value}
    />
  );
};

Configuraciones.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
