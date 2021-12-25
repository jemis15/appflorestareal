import BaseText from "../../../../../components/Base/BaseText";
import Layout from "../../../../../components/Layout/Layout";
import NavSetting from "../../../../../components/NavSetting/NavSetting";

export default function Configuraciones() {
  return (
    <div className="px-7 pt-4 pb-7 h-screen">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        <div  className="flex-none">
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
                  Mi cuenta
                </BaseText>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <div className="font-semibold text-sm mb-2">
                      Nombre de usuario
                    </div>
                    <Input value="Jafett Jamis Flores Meza" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-2">
                      Correo electronico
                    </div>
                    <Input value="floresmezajames1999@outlook.com" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-2">Contraseña</div>
                    <Input type="password" value="" />
                    <div className="text-sm mt-2 text-gray-600">
                      Si no quiere cambiar su contraseña deje esto en blanco.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-2">
                      Repita su contraseña
                    </div>
                    <Input type="password" value="" />
                  </div>
                </div>
                <div className="mt-5">
                  <button className="px-3 py-2 rounded-md bg-blue-500 text-white">
                    Guardar cambios
                  </button>
                </div>
              </div>
              {/* <div className="space-y-6 border p-5 rounded-lg bg-gray-50">
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-xs mb-1 text-gray-700">
                        Nombre de usuario
                      </div>
                      <div>Jemis15</div>
                    </div>
                    <div>
                      <button className="px-4 py-2 text-sm bg-gray-400 text-white rounded-md">
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-xs mb-1 text-gray-700">
                        Correo electrónico
                      </div>
                      <div>floresmezajames1999@outlook.com</div>
                    </div>
                    <div>
                      <button className="px-4 py-2 text-sm bg-gray-400 text-white rounded-md">
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-xs mb-1 text-gray-700">
                        Contraseña
                      </div>
                      <div>********</div>
                    </div>
                    <div>
                      <button className="px-4 py-2 text-sm bg-gray-400 text-white rounded-md">
                        Cambiar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-10" />

              <div>
                <div className="mb-5">
                  <BaseText size="header1" weight="bold">
                    Contraseña
                  </BaseText>
                </div>
                <div>
                  <button className="text-sm px-3 py-2 rounded-md bg-blue-500 text-white">
                    <BaseText size="value" weight="bold">
                      Carbiar contraseña
                    </BaseText>
                  </button>
                </div>
              </div> */}
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
      className="block w-full border rounded-md focus:ring-2 ring-blue-100 ring-inset focus:border-blue-500 outline-none px-3 py-2 mt-1"
      defaultValue={value}
    />
  );
};

Configuraciones.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
