import { useContext, useEffect, useState } from "react";
import NavbarContext from "../../context/Navbar/NavbarContext";
import {
  Notificacion as IconNotificacion,
  Search as IconSearch,
  Setting as IconSetting,
  Caret as IconCaret,
} from "../SVGIcons";

function Header() {
  const { isCollapse } = useContext(NavbarContext);

  return (
    <>
      <footer>
        <div className="border-t border-gray-300 mx-4"></div>
        <div className={`flex p-2 ${isCollapse ? "flex-col" : ""}`}>
          <ButtonUser />
          <Button>
            <IconNotificacion />
          </Button>
          <Button>
            <IconSearch />
          </Button>
          <Button>
            <IconSetting />
          </Button>
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

  return (
    <div className="relative">
      <Button onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
        <Avatar initial="J" size="6" />
      </Button>
      {isOpenDropdown && (
        <DropdownUser closeDropdown={() => setIsOpenDropdown(false)} />
      )}
    </div>
  );
}

function DropdownUser({ closeDropdown }) {
  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="flex flex-col absolute bottom-0 left-full z-10 border border-gray-300 w-64 bg-white rounded shadow-lg">
      <div className="flex px-4 py-3">
        <div className="mr-3">
          <Avatar initial="J" size="8" />
        </div>
        <div className="overflow-hidden">
          <div className="truncate text-sm">Flores Meza Jafett Jamis</div>
          <div className="text-gray-400 text-xs">Administrador</div>
        </div>
      </div>
      <div className="pb-2 mx-2">
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
          Cuenta
        </button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
          Cambiar contraseña
        </button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
          Cerrar sesión
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
    <Button
      className="ml-auto"
      onClick={() => changeCollapse(!isCollapse)}
    >
      <span className="inline-block w-5 h-5 flex items-center justify-center">
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
