import { useRouter } from "next/router";
import BaseLink from "../Base/BaseLink";
import BaseText from "../Base/BaseText";

const NavSetting = () => {
  const { asPath, query } = useRouter();
  const project_id = query.project; 
  const guild_id = query.guild; 

  return (
    <div className="flex-none w-64 bg-white rounded-lg px-2 py-4">
      <div>
        <BaseText weight="bold" className="text-gray-600 mb-2 mx-3">
          Ajuste de la cuenta
        </BaseText>
        <div className="flex flex-col space-y-1">
          <NavButton
            to={`/projects/${project_id}/${guild_id}/configuraciones/cuenta`}
            label="Mi cuenta"
            active={
              asPath ===
              `/projects/${project_id}/${guild_id}/configuraciones/cuenta`
            }
          />
          <NavButton
            to={`/projects/${project_id}/${guild_id}/configuraciones/perfil`}
            label="Perfil de usuario"
            active={asPath === `/projects/${project_id}/${guild_id}/configuraciones/perfil`}
            className="text-left"
          />
        </div>
      </div>
      <hr className="my-4 mx-3" />
      <div>
        <BaseText weight="bold" className="text-gray-600 mb-2 mx-3">
          Proyecto Satipo
        </BaseText>
        <div className="flex flex-col space-y-1">
          <NavButton
            to={`/projects/${project_id}/${guild_id}/configuraciones/proyecto`}
            label="Vista general"
            active={asPath === `/projects/${project_id}/${guild_id}/configuraciones/proyecto`}
          />
          <NavButton
            to={`/projects/${project_id}/${guild_id}/configuraciones/roles`}
            label="Roles"
            active={asPath === `/projects/${project_id}/${guild_id}/configuraciones/roles`}
          />
          <NavButton
            to={`/projects/${project_id}/${guild_id}/configuraciones/auditoria`}
            label="Registro de auditoria"
            active={asPath === `/projects/${project_id}/${guild_id}/configuraciones/auditoria`}
          />
          <NavButton
            to={`/projects/${project_id}/${guild_id}/configuraciones/miembros`}
            label="Miembros"
            active={asPath === `/projects/${project_id}/${guild_id}/configuraciones/miembros`}
          />
        </div>
      </div>
    </div>
  );
};

const NavButton = ({ to, label, active, className, ...otherProps }) => {
  return (
    <BaseLink
      to={to}
      className={`px-3 py-2 text-sm rounded-md ${
        active
          ? "bg-blue-50 text-blue-500 font-bold hover:bg-blue-100"
          : "hover:bg-gray-100"
      } ${className}`}
      {...otherProps}
    >
      {label}
    </BaseLink>
  );
};

export default NavSetting;
