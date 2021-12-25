import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import NavbarState from "../../context/Navbar/NavbarState";
import { useAuth } from "../../hooks/useAuth";
import useMember from "../../hooks/useMember";
import { useRouter } from "next/router";

function Navbar() {
  const { query } = useRouter();
  const { user } = useAuth({ middleware: "auth" });
  const { member } = useMember({
    user: user ? user.id : 0,
    guild: query.guild || 0,
  });

  return (
    <NavbarState>
      <aside className="fixed left-0 top-0 bottom-0 border-r border-gray-300 flex flex-col bg-white">
        <Header isMember={member} />
        <Nav isMember={member} />
        <Footer isMember={member} />
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
