import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import NavbarContext from "../../context/Navbar/NavbarContext";

import {
  Inicio as IconInicio,
  Ventas as IconVentas,
  Creditos as IconCreditos,
  Cobros as IconCobros,
  Cotizaciones as IconCotizaciones,
  Reservas as IconReservas,
  Caja as IconCaja,
  Clientes as IconClientes,
  Calendario as IconCalendario,
  Estadisticas as IconEstadisticas,
} from "../SVGIcons";

const Menus = [
  {
    label: "Inicio",
    url: "/",
    icon: IconInicio,
    active: true,
  },
  {
    label: "Ventas",
    url: "/ventas",
    icon: IconVentas,
    active: false,
  },
  {
    label: "Creditos",
    url: "/creditos",
    icon: IconCreditos,
    active: false,
  },
  {
    label: "Cobros",
    url: "/cobros",
    icon: IconCobros,
    active: false,
  },
  {
    label: "Cotizaciones",
    url: "/cotizaciones",
    icon: IconCotizaciones,
    active: false,
  },
  {
    label: "Reservas",
    url: "/reservas",
    icon: IconReservas,
    active: false,
  },
  {
    label: "Caja",
    url: "/caja",
    icon: IconCaja,
    active: false,
  },
  {
    label: "Clientes",
    url: "/clientes",
    icon: IconClientes,
    active: false,
  },
  {
    label: "separate",
  },
  {
    label: "Calendario",
    url: "/calendario",
    icon: IconCalendario,
    active: false,
  },
  {
    label: "Estadisticas",
    url: "/estadisticas",
    icon: IconEstadisticas,
    active: false,
  },
];

function Nav() {
  const { pathname } = useRouter();
  const { isCollapse } = useContext(NavbarContext);

  return (
    <nav className="flex-grow flex flex-col mt-8 px-2 overflow-y-auto overflow-x-hidden">
      {Menus.map((menu, key) => {
        if (menu.label === "separate") {
          return <hr className="border-gray-300 mx-2 my-4" key={key} />;
        }

        var active = false;

        if (
          (menu.url !== "/" &&
            pathname !== "/" &&
            menu.url.startsWith(pathname)) ||
          (menu.url === "/" && menu.url === pathname)
        ) {
          active = true;
        }

        return (
          <MenuLink
            label={menu.label}
            url={menu.url}
            active={active}
            key={key}
            className="space-x-3 mt-1"
          >
            <span className="flex items-center justify-center w-6 h-6">
              <menu.icon fill={active} />
            </span>
            {!isCollapse && (
              <span className="flex items-center justify-center leading-none">
                {menu.label}
              </span>
            )}
          </MenuLink>
        );
      })}
    </nav>
  );
}

function MenuLink({ children, url, className, active, ...otherProps }) {
  return (
    <Link href={url}>
      <a
        className={`flex items-center p-2 rounded ${
          active
            ? "font-bold text-blue-500 bg-blue-50 hover:bg-blue-100"
            : "hover:bg-gray-100"
        } ${className}`}
        {...otherProps}
      >
        {children}
      </a>
    </Link>
  );
}

// function MenuLink({ label, url, active, Icon }) {
//   return (
//     <Link href={url}>
//       <a
//         className={`flex items-center mx-2 mt-1 p-2 rounded space-x-3 ${
//           active
//             ? "font-bold text-blue-500 bg-blue-50 hover:bg-blue-100"
//             : "hover:bg-gray-100"
//         }`}
//       >
//         <div>
//           <div className="flex items-center justify-center w-5 h-5">
//             {Icon ? (
//               <Icon fill={active} size="20" />
//             ) : (
//               <span className="inline-block w-5 h-5 bg-gray-100"></span>
//             )}
//           </div>
//         </div>
//         {/* <div>{label}</div> */}
//       </a>
//     </Link>
//   );
// }

export default Nav;
