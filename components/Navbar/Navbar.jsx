import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import NavbarState from "../../context/Navbar/NavbarState";

function Navbar() {
  return (
    <NavbarState>
      <aside className="fixed left-0 top-0 bottom-0 border-r border-gray-300 flex flex-col bg-white">
        <Header />
        <Nav />
        <Footer />
      </aside>

      <style jsx>{`
        aside {
          width: var(--sidebar-width);
          transition: width 200ms;
          will-change: width;
        }
      `}</style>
    </NavbarState>
  );
}

export default Navbar;
