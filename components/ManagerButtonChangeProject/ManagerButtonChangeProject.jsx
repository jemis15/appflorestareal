import { useRouter } from "next/router";
import { useContext } from "react";
import { Popup } from "../Popup";
import NavbarContext from "../../context/Navbar/NavbarContext";
import { useAuth } from "../../hooks/useAuth";
import useGuild from "../../hooks/useGuild";
import useGuilds from "../../hooks/useGuilds";
import BaseText from "../Base/BaseText";
import ButtonChangeProject from "../ButtonChangeProject/ButtonChangeProject";
import { Project as IconProject } from "../SVGIcons";

const ManagerButtonChangeProject = () => {
  const { isCollapse } = useContext(NavbarContext);
  const { query, push } = useRouter();
  const { user } = useAuth();
  const { guilds } = useGuilds({ user: user ? user.id : 0 });
  const { guild } = useGuild({ project_id: query.project });

  return (
    <Popup
      trigger={
        <ButtonChangeProject
          label={guild ? guild.name : ""}
          isOnlyIcon={isCollapse}
        />
      }
      position={["bottom left"]}
    >
      {(close) => (
        <div className="space-y-1 bg-white p-2 border border-gray-300 shadow-lg rounded-md w-64">
          <BaseText size="value" weight="bold" className="mb-2">
            Tus proyectos
          </BaseText>
          <div className="space-y-1">
            {Array.isArray(guilds) &&
              guilds.map((guild) => {
                const isCurrentGuild = guild.id === parseInt(query.guild);
                return (
                  <Button
                    key={guild.id}
                    icon={<IconProject size={32} />}
                    label={guild.name}
                    active={isCurrentGuild}
                    onClick={() => {
                      push(`/projects/${guild.project_id}/${guild.id}`);
                      close();
                    }}
                  />
                );
              })}
          </div>
        </div>
      )}
    </Popup>
  );
};

function Button({ icon, label, active, ...otherProps }) {
  const misClases = `flex items-center w-full px-2 py-2 rounded space-x-2 ${
    active ? "bg-blue-100 hover:bg-blue-100" : "hover:bg-gray-100"
  }`;

  return (
    <button className={misClases} {...otherProps}>
      <div>{icon}</div>
      <BaseText display="truncate">{label}</BaseText>
    </button>
  );
}

export default ManagerButtonChangeProject;
