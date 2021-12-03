import { useState } from "react";
import NavbarContext from "./NavbarContext";

function NavbarState({ children }) {
  const [isCollapse, setIsCollapse] = useState(false);
  function changeCollapse(value) {
    const style = document.documentElement.style;

    if (value) {
        style.setProperty("--sidebar-width", "57px");
    }else{
        style.setProperty("--sidebar-width", "280px");
    }
    
    setIsCollapse(value);
  }

  return (
    <NavbarContext.Provider value={{ isCollapse, changeCollapse }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarState;
