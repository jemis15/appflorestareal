import { useState } from "react";
import BaseText from "../../../../../components/Base/BaseText";
import Layout from "../../../../../components/Layout/Layout";
import NavSetting from "../../../../../components/NavSetting/NavSetting";
import { Chevron, RedoAlt } from "../../../../../components/SVGIcons";

export default function Auditoria() {
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
          <div className="flex-auto bg-white rounded-lg p-10 overflow-y-auto">
            <div>
              <div className="mb-5">
                <BaseText size="header1" color="heading" weight="bold">
                  Registro de auditoría
                </BaseText>
              </div>
              <hr className="my-5" />
              <AudiLogList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AudiLogList = () => {
  const [audiLogActive, setAudiLogActive] = useState(null);
  function handleContentClick(event) {
    var item = null;
    var element = event.target;
    while (item == null) {
      var attribute = element.getAttribute("data-list-item-id");
      if (attribute != null) {
        item = attribute;
        setAudiLogActive(parseInt(attribute));
      } else {
        element = element.parentNode;
      }
    }
  }
  return (
    <div className="space-y-2">
      {Array(20)
        .fill(null)
        .map((item, key) => {
          return (
            <AudiLogClickWrap
              key={key}
              expanded={audiLogActive === key}
              idActive={key}
              onContentClick={handleContentClick}
            />
          );
        })}
    </div>
  );
};

const AudiLogClickWrap = ({ expanded, idActive, onContentClick }) => {
  return (
    <div className="border border-gray-300 bg-gray-50 rounded-md flex flex-col items-stretch justify-start">
      <div
        className="flex items-center space-x-3 py-3 pl-3 pr-4"
        data-list-item-id={idActive}
        onClick={onContentClick}
      >
        <div className="flex-none">
          <RedoAlt />
        </div>
        <div className="flex-none">
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
        </div>
        <div className="flex-auto flex flex-col">
          <div className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-900">Jemis15</span>
            {" Ha actualizado los roles de "}
            <span className="font-semibold text-gray-900">Jemis15</span>
          </div>
          <div className="text-gray-600 text-sm">hoy a las 10:59</div>
        </div>
        <div className="flex-none">
          <Chevron
            className={`transition-transform transform ${
              expanded ? "-rotate-90" : "-rotate-180"
            }`}
            size={14}
          />
        </div>
      </div>
      {expanded && (
        <>
          <hr />
          <div className="px-3 py-3 bg-white rounded-b-md">
            <div className="ml-5 flex space-x-2">
              <div className="flex space-x-2">
                <div>01</div>
                <div>-</div>
              </div>
              <div>
                <div>
                  Con el nombre <strong>nuevo rol</strong>
                </div>
                <div>Crear invitacion</div>
                <div>Crear invitacion</div>
                <div>Crear invitacion</div>
                <div>Crear invitacion</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Auditoria.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
