import { useContext, useEffect, useRef, useState } from "react";
import NavbarContext from "../../context/Navbar/NavbarContext";
import FlorestaRealLogo from "../FlorestaRealLogo";
import ManagerButtonChangeProject from "../ManagerButtonChangeProject/ManagerButtonChangeProject";
import Portal from "../Portal";
import { Crear as IconCrear } from "../SVGIcons";


function Header({ isMember }) {
  const { isCollapse } = useContext(NavbarContext);

  return (
    <header>
      <div
        className={`flex flex-nowrap ${
          isCollapse ? "justify-center" : "px-4"
        } py-2`}
      >
        <FlorestaRealLogo sizeLogo="50" isTextHidden={isCollapse} />
      </div>

      <div className={`${isCollapse ? 'flex justify-center py-2' : 'px-4 py-2'}`}>
        <ManagerButtonChangeProject />
      </div>

      {isMember && <ButtonCrear />}
    </header>
  );
}

function ButtonCrear() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [coordenadas, setCoordenadas] = useState([0, 0]);
  const miref = useRef();
  const { isCollapse } = useContext(NavbarContext);

  function handleOpenDropdown(e) {
    setIsOpenDropdown(!isOpenDropdown);
    var direct = miref.current.getBoundingClientRect();
    setCoordenadas([direct.bottom, direct.left]);
  }

  return (
    <div className={`${isCollapse ? "px-2" : "px-4"} mt-4`}>
      <div className="relative">
        <button
          ref={miref}
          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 px-3 py-2 rounded space-x-2"
          onClick={handleOpenDropdown}
        >
          <div className="flex items-center justify-center w-5 h-5">
            <IconCrear fill color="white" size="16" />
          </div>
          {!isCollapse && (
            <div className="text-white font-bold text-sm leading-none">
              Crear
            </div>
          )}
        </button>

        {isOpenDropdown && (
          <Portal>
            <DropdownCrear
              coordenadas={coordenadas}
              closeDropdown={() => setIsOpenDropdown(false)}
            />
          </Portal>
        )}
      </div>
    </div>
  );
}

function DropdownCrear({ coordenadas, closeDropdown }) {
  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  function Text({ children }) {
    return (
      <span className="text-sm text-gray-500 whitespace-nowrap">
        {children}
      </span>
    );
  }

  function Button({ children }) {
    return (
      <button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        {children}
      </button>
    );
  }

  return (
    <div
      className="absolute bg-white border border-gray-300 shadow-xl mt-3"
      style={{ top: coordenadas[0], left: coordenadas[1] }}
    >
      <Button>
        <IconCrear size="16" color="#1877F2" />
        <Text>Nuevo cliente</Text>
      </Button>
      <Button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Nueva venta</Text>
      </Button>
      <Button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Reservar una propiedad</Text>
      </Button>
      <Button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Crear cotización</Text>
      </Button>
      <Button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Cobrar a un cliente</Text>
      </Button>
      <Button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Agregar ingreso</Text>
      </Button>
      <Button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Agregar egreso</Text>
      </Button>

      <style jsx>{`
        div::before {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 10px;
          width: 10px;
          height: 10px;
          background: white;
          transform-origin: bottom left;
          transform: rotate(45deg) translate(0, -1px);
          border-left: 1px solid rgb(209, 213, 219);
          border-top: 1px solid rgb(209, 213, 219);
        }
      `}</style>
    </div>
  );
}

export default Header;
