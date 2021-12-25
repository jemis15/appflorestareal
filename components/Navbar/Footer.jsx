import { useRouter } from "next/router";
import { useContext, useState } from "react";
import NavbarContext from "../../context/Navbar/NavbarContext";
import { useAuth } from "../../hooks/useAuth";
import useMember from "../../hooks/useMember";
import BaseLink from "../Base/BaseLink";
import BaseText from "../Base/BaseText";
import { Popup } from "../Popup";
import {
  Notificacion as IconNotificacion,
  Search as IconSearch,
  Setting as IconSetting,
  Caret as IconCaret,
} from "../SVGIcons";

function Header({ isMember }) {
  const { isCollapse } = useContext(NavbarContext);
  const { query, push } = useRouter();

  return (
    <>
      <footer>
        <div className="border-t border-gray-300 mx-4"></div>
        <div className={`flex p-2 ${isCollapse ? "flex-col" : ""}`}>
          <ButtonUser />
          {isMember && (
            <>
              <Button>
                <IconNotificacion />
              </Button>
              <Button>
                <IconSearch />
              </Button>
              <Button
                onClick={() =>
                  push(
                    `/projects/${query.project}/${query.guild}/configuraciones/cuenta`
                  )
                }
              >
                <IconSetting />
              </Button>
            </>
          )}
          <ButtonToggleCollapse />
        </div>
      </footer>
    </>
  );
}

function Button({ children, className, ...othersProps }) {
  return (
    <button
      className={`flex justify-center items-center w-11 h-9 hover:bg-gray-100 rounded cursor-pointer ${className}`}
      {...othersProps}
    >
      <div>{children}</div>
    </button>
  );
}

function ButtonUser() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const { user } = useAuth();

  return (
    <div>
      <Popup
        trigger={
          <div>
            <Button onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
              <Avatar initial={user ? user.name[0] : ""} size="6" />
            </Button>
          </div>
        }
        position={["top left"]}
      >
        <DropdownUser />
      </Popup>
    </div>
  );
}

function DropdownUser() {
  const { user, logout } = useAuth({ middleware: "auth" });

  return (
    <div className="flex flex-col absolute bottom-0 left-full z-10 border border-gray-300 w-64 bg-white rounded-md shadow-lg">
      <div className="flex items-center px-4 py-3">
        <div className="mr-3">
          <Avatar initial={user ? user.name[0] : ""} size="8" />
        </div>
        <div className="overflow-hidden">
          <div className="truncate text-sm font-semibold">{user.name}</div>
        </div>
      </div>
      <div className="pb-2 mx-2">
        <BaseLink
          to="/configuraciones/perfil"
          className="inline-block w-full text-left px-3 py-2 rounded hover:bg-gray-100"
        >
          <BaseText size="value">Perfil</BaseText>
        </BaseLink>
        <BaseLink
          to="/configuraciones/cuenta"
          className="inline-block w-full text-left px-3 py-2 rounded hover:bg-gray-100"
        >
          <BaseText size="value">Cuenta</BaseText>
        </BaseLink>
        <button
          className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
          onClick={logout}
        >
          <BaseText size="value">Cerrar sesión</BaseText>
        </button>
      </div>
    </div>
  );
}

function Avatar({ initial, size = "5", ...othersProps }) {
  return (
    <span
      className={`flex items-center justify-center w-${size} h-${size} bg-blue-200 text-blue-700 rounded-full text-xs font-bold`}
      {...othersProps}
    >
      {initial}
    </span>
  );
}

function ButtonToggleCollapse() {
  const { isCollapse, changeCollapse } = useContext(NavbarContext);

  return (
    <Button className="ml-auto" onClick={() => changeCollapse(!isCollapse)}>
      <span className="w-5 h-5 flex items-center justify-center">
        <IconCaret
          size="14"
          className={`transform transition-transform ${
            isCollapse ? "-rotate-90" : "rotate-90"
          }`}
        />
      </span>
    </Button>
  );
}

export default Header;
