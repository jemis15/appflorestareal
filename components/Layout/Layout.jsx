// import UserState, { useUser } from "../../context/User/UserState";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";
import useMember from "../../hooks/useMember";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  const { query } = useRouter();
  const { user } = useAuth({ middleware: "auth" });
  const { member } = useMember({
    user: user ? user.id : 0,
    guild: query.guild || 0,
  });

  return (
    <>
      <Navbar />
      {member ? (
        children
      ) : (
        <div className="h-screen flex items-center justify-center">
          <div className="text-xl">No hay nada que mostrar</div>
        </div>
      )}
    </>
  );
}

export default (props) => (
  // <UserState>
  <Layout {...props} />
  // </UserState>
);
