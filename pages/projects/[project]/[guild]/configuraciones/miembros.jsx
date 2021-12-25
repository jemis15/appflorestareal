import BaseText from "../../../../../components/Base/BaseText";
import Layout from "../../../../../components/Layout/Layout";
import NavSetting from "../../../../../components/NavSetting/NavSetting";
import SearchBar from "../../../../../components/SearchBar/SearchBar";
import { Popup } from "../../../../../components/Popup";
import {
  Crown as IconCrown,
  ThreeDots as IconThreeDots,
} from "../../../../../components/SVGIcons";
import { createContext, createRef, useContext, useState } from "react";

const Data = createContext();

function CData({ children }) {
  const [guild, setGuild] = useState({
    id: 1,
    ownerId: 1, // propietario
    name: "Proyecto Satipo",
    icon: "https://cdn.discordapp.com/icons/922597422872531034/6d1c618aeec6da4b2c7758a2672c3765.webp?size=100",
    roles: [
      {
        id: 1,
        name: "Administrador",
        colorString: "#f1c40f",
      },
      {
        id: 2,
        name: "Cajero",
        colorString: "#EA1B1B",
      },
      {
        id: 3,
        name: "Analista",
        colorString: "#17D7C0",
      },
    ],
  });

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Jafett Jamis Flores Meza",
      nickname: "jemis15",
      avatar: null,
      colorString: "#f1c40f",
      roles: [1],
      userId: 1,
    },
    {
      id: 2,
      name: "Luis Unchupaico Perez",
      nickname: "luis",
      avatar: null,
      colorString: "#f1c40f",
      roles: [4, 5, 6, 2, 3, 1],
      userId: 2,
    },
  ]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Jafett Jamis Flores Meza",
      nickname: "Jemis15",
      email: "floresmezajames1999@outlook.com",
      avatar: null,
    },
    {
      id: 2,
      name: "Luis Ramires Perez",
      nickname: "luis",
      email: "luisramires@gmail.com",
      avatar: null,
    },
  ]);

  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "Jafett Jamis Flores Meza",
    nickname: "Jemis15",
    email: "floresmezajames1999@outlook.com",
    avatar: null,
  });

  return (
    <Data.Provider
      value={{
        guild,
        members,
        users,
        currentUser,
      }}
    >
      {children}
    </Data.Provider>
  );
}

export default function Miembros() {
  const { guild, members, users, currentUser } = useContext(Data);
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
                    Miembros del proyecto
                  </BaseText>
                </div>
                <div className="mb-5">
                  <RoleSearch
                    query={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onClear={() => setQuery("")}
                  />
                </div>
                <div className="divide-y divide-gray-100">
                  {members.map((member) => {
                    if (
                      query != "" &&
                      !member.name
                        .toLowerCase()
                        .includes(query.toLowerCase()) &&
                      !member.nickname
                        .toLowerCase()
                        .includes(query.toLowerCase())
                    ) {
                      return null;
                    }
                    return (
                      <div key={member.id}>
                        <Member
                          member={member}
                          user={users.find((user) => user.id === member.userId)}
                          guild={guild}
                          currentUser={currentUser}
                        />
                      </div>
                    );
                  })}
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
          placeholder="Buscar miembros"
        />
      </div>
      <button className="flex-none px-3 py-2 bg-blue-500 text-white rounded-md">
        <BaseText size="value" weight="bold">
          Añadir miembros
        </BaseText>
      </button>
    </div>
  );
};

const Member = ({ member, user, guild, currentUser }) => {
  const isOwner = guild.ownerId === user.id;
  const roles = guild.roles.filter((rol) =>
    member.roles.find((memberRolId) => memberRolId === rol.id)
  );

  return (
    <div className="flex flex-col justify-start items-stretch hover:bg-gray-100 rounded-md -mx-5 group">
      <div className="flex items-center px-5 py-3 space-x-3">
        <div className="flex-none">
          <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
        </div>
        <div className="flex-none flex flex-col w-52">
          <div className="flex space-x-2">
            <BaseText size="value" display="truncate">
              {member.name}
            </BaseText>
            {isOwner && (
              <Popup
                trigger={
                  <span className="flex items-center justify-center">
                    <IconCrown size={14} />
                  </span>
                }
                on="hover"
                position={["top center", "bottom center", "right center"]}
              >
                <BaseText
                  size="value"
                  color="value"
                  className="leading-4"
                  style={{ maxWidth: 200 }}
                >
                  Esta persona es propietaria del proyecto y siempre tiene todos
                  los permisos.
                </BaseText>
              </Popup>
            )}
          </div>
          <BaseText size="value" color="placeholder">
            {"@"}
            {member.nickname}
          </BaseText>
        </div>
        <div className="flex-auto">
          <UserRoles userRoles={roles} />
        </div>
        <div className="flex-none">
          <ButtonTheeDots
            guild={guild}
            user={user}
            currentUser={currentUser}
            roles={member.roles}
          />
        </div>
      </div>
    </div>
  );
};

const ButtonTheeDots = ({ guild, user, currentUser, roles }) => {
  return (
    <Popup
      trigger={
        <button className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <IconThreeDots size={16} />
        </button>
      }
      position={["bottom left", "bottom-right", "top left", "top right"]}
      arrow={false}
    >
      <div className="bg-white p-2">
        {guild.ownerId !== user.id && (
          <>
            {currentUser.id === user.id && (
              <div
                className="hover:bg-gray-100 rounded-md px-3 py-2"
                role="button"
              >
                <BaseText size="value">Cambair contraseña</BaseText>
              </div>
            )}
            <div
              className="hover:bg-gray-100 rounded-md px-3 py-2"
              role="button"
            >
              <BaseText size="value">Expulsar a {user.nickname}</BaseText>
            </div>
            <div
              className="hover:bg-gray-100 rounded-md px-3 py-2"
              role="button"
            >
              <BaseText size="value">
                Expulsar y eliminar a {user.nickname}
              </BaseText>
            </div>
            <hr className="my-2 mx-3" />
          </>
        )}
        <div className="px-3 py-2">
          <BaseText size="valueDescription" weight="bold" color="value">
            Roles
          </BaseText>
        </div>
        {guild.roles.map((rol) => (
          <div
            key={rol.id}
            className="flex justify-between items-center hover:bg-gray-100 rounded-md px-3 py-2"
            role="button"
          >
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: rol.colorString }}
              ></div>
              <BaseText size="value">{rol.name}</BaseText>
            </div>
            <input
              type="checkbox"
              defaultChecked={roles.find((role) => role === rol.id)}
            />
          </div>
        ))}
      </div>
    </Popup>
  );
};

const UserRoles = ({ userRoles }) => {
  const { rolesShow, rolesHidden } = getRolesHelp();

  function getRolesHelp() {
    var numberOfItems = userRoles.length;
    if (numberOfItems > 2) {
      return {
        rolesShow: userRoles.slice(0, 2),
        rolesHidden: userRoles.slice(2, numberOfItems),
      };
    }

    return { rolesShow: userRoles, rolesHidden: [] };
  }

  return (
    <div className="flex flex-wrap items-center space-x-2">
      {rolesShow.map((role) => (
        <RolItem key={role.id} name={role.name} color={role.colorString} />
      ))}
      <ButtonMoreRoles roles={rolesHidden} />
    </div>
  );
};

const ButtonMoreRoles = ({ roles }) => {
  if (!Array.isArray(roles) || roles.length === 0) {
    return null;
  }

  return (
    <>
      <Popup
        trigger={
          <div className="px-2 py-1 bg-gray-200 rounded-md cursor-pointer select-none">
            <BaseText size="valueDescription" color="value">
              {"+"}
              {roles.length}
            </BaseText>
          </div>
        }
        position={["top center"]}
      >
        <div className="p-1">
          <BaseText
            size="valueDescription"
            weight="bold"
            color="placeholder"
            className="mb-2"
          >
            ROLES
          </BaseText>
          <div className="flex flex-wrap">
            {roles.map((rol) => {
              return (
                <RolItem
                  key={rol.id}
                  name={rol.name}
                  color={rol.colorString}
                  className="mr-1 mb-1"
                />
              );
            })}
          </div>
        </div>
      </Popup>
    </>
  );
};

const RolItem = ({ name, color, className }) => {
  return (
    <div
      className={`flex items-center space-x-2 px-2 py-1 bg-gray-200 rounded-md ${className}`}
    >
      <div>
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: color }}
        ></div>
      </div>
      <BaseText size="valueDescription" color="placeholder">
        {name}
      </BaseText>
    </div>
  );
};

Miembros.getLayout = function getLayout(page) {
  return (
    <Layout>
      <CData>{page}</CData>
    </Layout>
  );
};
