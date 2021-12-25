import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import NavbarContext from "../../context/Navbar/NavbarContext";
import { useAuth } from "../../hooks/useAuth";
import userMember from "../../hooks/useMember";

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

const getMenus = (basePath) => {
  return [
    {
      label: "Inicio",
      url: basePath || '/',
      icon: IconInicio,
      active: true,
    },
    {
      label: "Ventas",
      url: `${basePath}/ventas`,
      icon: IconVentas,
      active: false,
      permision: "ver_ventas",
    },
    {
      label: "Creditos",
      url: `${basePath}/creditos`,
      icon: IconCreditos,
      active: false,
      permision: "ver_creditos",
    },
    {
      label: "Cobros",
      url: `${basePath}/cobros`,
      icon: IconCobros,
      active: false,
      permision: "ver_cobros",
    },
    {
      label: "Cotizaciones",
      url: `${basePath}/cotizaciones`,
      icon: IconCotizaciones,
      active: false,
      permision: "ver_cotizaciones",
    },
    {
      label: "Reservas",
      url: `${basePath}/reservas`,
      icon: IconReservas,
      active: false,
      permision: "ver_reservas",
    },
    {
      label: "Caja",
      url: `${basePath}/caja`,
      icon: IconCaja,
      active: false,
    },
    {
      label: "Clientes",
      url: `${basePath}/clientes`,
      icon: IconClientes,
      active: false,
      permision: "ver_clientes",
    },
    {
      label: "separate",
    },
    {
      label: "Calendario",
      url: `${basePath}/calendario`,
      icon: IconCalendario,
      active: false,
      permision: "ver_calendario",
    },
    {
      label: "Estadisticas",
      url: `${basePath}/estadisticas`,
      icon: IconEstadisticas,
      active: false,
      permision: "ver_estadisticas",
    },
  ];
};

function Nav({isMember}) {
  const { asPath, query } = useRouter();
  const { isCollapse } = useContext(NavbarContext);
  const baseUrl = isMember ? `/projects/${query.project}/${query.guild}` : "";

  return (
    <nav className="flex-grow flex flex-col mt-8 px-2 overflow-y-auto overflow-x-hidden">
      {isMember && getMenus(baseUrl).map((menu, key) => {
        if (menu.label === "separate") {
          return <hr className="border-gray-300 mx-2 my-4" key={key} />;
        }

        var active = false;

        if (
          (menu.url !== baseUrl &&
            asPath !== baseUrl &&
            menu.url.startsWith(asPath)) ||
          (menu.url === baseUrl && menu.url === asPath)
        ) {
          active = true;
        }

        return (
          <MenuLink
            label={menu.label}
            url={`${menu.url}`}
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
