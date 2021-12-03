import { useContext, useEffect, useState } from "react";
import NavbarContext from "../../context/Navbar/NavbarContext";
import {
  Caret as IconCaret,
  Crear as IconCrear,
  Logo as Logo,
} from "../SVGIcons";

const projects = [
  { id: 1, name: "Proyecto Satipo" },
  { id: 2, name: "Proyecto Mazamari" },
  { id: 3, name: "Proyecto Pangoa" },
];

function Header() {
  const { isCollapse } = useContext(NavbarContext);
  const [currentProject, setCurrentProject] = useState({
    id: 1,
    name: "Project Satipo",
  });

  function handleChangeCurrentProject(projectId) {
    var currentProject = projects.find((project) => project.id === projectId);
    if (currentProject) {
      setCurrentProject(currentProject);
    }
  }

  return (
    <header>
      <div
        className={`flex flex-nowrap items-center ${
          isCollapse ? "px-2" : "px-4"
        } mt-2`}
      >
        <Logo size="50" />
        {!isCollapse && (
          <h4 className="font-semibold text-xl ml-4 truncate text-gray-600">Floresta Real</h4>
        )}
      </div>

      <ButtonProject
        projects={projects}
        currentProject={currentProject}
        changeCurrentProject={handleChangeCurrentProject}
      />
      <ButtonCrear />
    </header>
  );
}

function ButtonProject({ projects, currentProject, changeCurrentProject }) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const { isCollapse } = useContext(NavbarContext);

  return (
    <div className={`${isCollapse ? "px-2 mt-4" : "px-4 mt-2"}`}>
      <div className="relative">
        <button
          className={`flex w-full items-center ${
            isCollapse
              ? "justify-center hover:bg-gray-100"
              : "justify-between border border-gray-300 px-2 py-2 hover:border-gray-400"
          } rounded cursor-pointer select-none`}
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        >
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="flex items-center">
              <span
                className={`inline-block w-8 h-8 bg-gray-500 rounded-full`}
              />
            </div>
            {!isCollapse && (
              <div className="truncate">{currentProject.name}</div>
            )}
          </div>
          {!isCollapse && (
            <div>
              <IconCaret size="14" fill />
            </div>
          )}
        </button>
        {isOpenDropdown && (
          <DropdowProjects
            projects={projects}
            currentProject={currentProject}
            changeCurrentProject={changeCurrentProject}
            closeDropdown={() => setIsOpenDropdown(false)}
          />
        )}
      </div>
    </div>
  );
}

function DropdowProjects({
  projects,
  currentProject,
  changeCurrentProject,
  closeDropdown,
}) {
  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);
  return (
    <div className="absolute top-full z-10 w-64 bg-white border border-gray-300 mt-1 px-2 py-3 rounded shadow-xl">
      <div className="px-1 mb-2">
        <h4 className="font-semibold text-sm select-none">Tus proyectos</h4>
      </div>
      <div className="space-y-1">
        {projects.map((project) => {
          const isCurrentProject = project.id === currentProject.id;

          return (
            <button
              className={`flex items-center w-full px-2 py-2 rounded space-x-2 ${
                isCurrentProject
                  ? "bg-blue-100 hover:bg-blue-100"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => changeCurrentProject(project.id)}
              key={project.id}
            >
              <div>
                <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              </div>
              <div>
                <div className="truncate text-sm">{project.name}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ButtonCrear() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const { isCollapse } = useContext(NavbarContext);

  return (
    <div className={`${isCollapse ? "px-2" : "px-4"} mt-4`}>
      <div className="relative">
        <button
          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 px-3 py-2 rounded space-x-2"
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        >
          <div className="flex items-center justify-center w-5 h-5">
            <IconCrear fill color="white" size="16" />
          </div>
          {!isCollapse && (
            <div className="text-white font-bold text-sm leading-none">Crear</div>
          )}
        </button>

        {isOpenDropdown && (
          <DropdownCrear closeDropdown={() => setIsOpenDropdown(false)} />
        )}
      </div>
    </div>
  );
}

function DropdownCrear({ closeDropdown }) {
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

  return (
    <div className="absolute bg-white border border-gray-300 shadow-xl mt-3">
      <button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Nuevo cliente</Text>
      </button>
      <button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Nueva venta</Text>
      </button>
      <button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Reservar una propiedad</Text>
      </button>
      <button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Crear cotización</Text>
      </button>
      <button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Cobrar a un cliente</Text>
      </button>
      <button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Agregar ingreso</Text>
      </button>
      <button className="w-full flex items-center p-3 hover:bg-blue-50 space-x-2">
        <IconCrear size="16" color="#1877F2" />
        <Text>Agregar egreso</Text>
      </button>

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
