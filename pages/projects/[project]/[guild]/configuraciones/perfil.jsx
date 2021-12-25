import BaseText from "../../../../../components/Base/BaseText";
import Layout from "../../../../../components/Layout/Layout";
import NavSetting from "../../../../../components/NavSetting/NavSetting";

export default function Configuraciones() {
  return (
    <div className="px-7 pt-4 pb-7 h-screen">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        <div className="flex-nonde">
          <BaseText size="header1" weight="bold">
            Configuración
          </BaseText>
        </div>
        <div className="flex-auto flex space-x-6 mt-5 overflow-hidden">
          <NavSetting />
          <div className="flex-auto bg-white rounded-lg p-10">
            <div className="mb-5">
              <BaseText size="header1" weight="bold">
                Perfil de usuario
              </BaseText>
            </div>

            <div>
              <div>
                <div className="flex space-x-5">
                  <div>
                    <div className="group relative w-32 h-32 bg-indigo-400 rounded-full">
                      <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0 z-10"
                        style={{ fontSize: 0 }}
                      />
                      <div className="flex flex-col items-center justify-center absolute inset-0 uppercase opacity-0 group-hover:opacity-100 bg-gray-900 bg-opacity-50 rounded-full">
                          <span className="text-white text-xs font-semibold select-none">Cambiar</span>
                          <span className="text-white text-xs font-semibold select-none">foto</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full ring-offset-2 focus:ring rounded-md text-gray-600 outline-none">
                      <BaseText size="value" weight="bold">Eliminar</BaseText>
                    </button>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 w-48">
                      Recomendamos una imagen de al menos 512x512px para tu
                      perfil.
                    </div>
                    <button className="relative px-3 py-2 mt-4 border border-gray-400 rounded-md text-gray-600">
                      <BaseText size="value">Cambiar foto</BaseText>
                      <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        style={{ fontSize: 0 }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-10" />
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="font-semibold text-sm">Nombre</label>
                  <Input value="Flores Meza Jafett Jamis" />
                </div>
                <div>
                  <label className="font-semibold text-sm">
                    Número de celular
                  </label>
                  <Input value="931932916" />
                </div>
                <div>
                  <label className="font-semibold text-sm">
                    Fecha de nacimiento
                  </label>
                  <Input type="date" value="10/08/1999" />
                </div>
                <div>
                  <label className="font-semibold text-sm">Dirección</label>
                  <Input value="Av. Marginar S/N" />
                </div>
              </div>
              <button className="px-3 py-2 rounded-md bg-blue-500 text-white mt-5">
                Guardar cambios
              </button>
            </div>
            {/* <div className="hidden space-x-14">
              <div className="flex-auto space-y-4">
                <div>
                  <label className="font-semibold text-sm">Nombre</label>
                  <Input value="Flores Meza Jafett Jamis" />
                </div>
                <div>
                  <label className="font-semibold text-sm">
                    Número de celular
                  </label>
                  <Input value="931932916" />
                </div>
                <div>
                  <label className="font-semibold text-sm">
                    Fecha de nacimiento
                  </label>
                  <Input type="date" value="1999-08-10" />
                </div>
                <div>
                  <label className="font-semibold text-sm">
                    Dirección
                  </label>
                  <Input value="Av. Marginar s/n" />
                </div>
                <div>
                  <button className="mt-2 px-3 py-2 text-sm bg-green-500 rounded-md border border-green-600 text-white font-semibold hover:bg-green-400">
                    Actualizar perfil
                  </button>
                </div>
              </div>
              <div className="flex-none flex justify-end">
                <div>
                  <div className="font-semibold text-sm">Avatar</div>
                  <div className="w-48 h-48 bg-gray-300 rounded-full mt-3"></div>
                  <div className="text-center mt-4 text-sm text-blue-500 font-semibold">
                    Cambiar avatar
                  </div>
                </div>
              </div>
            </div> */}
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
