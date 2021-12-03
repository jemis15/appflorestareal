import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import NavbarState from "../../context/Navbar/NavbarState";

function Navbar() {
  return (
    <NavbarState>
      <aside
        className="absolute left-0 top-0 bottom-0 border-r border-gray-300 flex flex-col bg-white"
        style={{
          width: "var(--sidebar-width)",
          transition: "width 200ms",
          willChange: "width",
        }}
      >
        <Header />
        <Nav />
        <Footer />
      </aside>
    </NavbarState>
  );
}

export default Navbar;
