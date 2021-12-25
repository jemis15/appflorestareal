import { useState } from "react";
import { Logo } from "../components/SVGIcons";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth({
    middleware: "guest"
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    nickname: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    await login({
      email: user.nickname,
      password: user.password,
      setErrors,
      setStatus,
    });
    setLoading(false);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-screen max-w-md p-8">
        <div className="flex justify-center">
          <Logo size="150" />
        </div>
        <h1 className="text-center text-2xl tracking-wide font-semibold text-gray-700">
          Floresta Real
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-12 space-y-4">
            <div>
              <div className="text-gray-500 text-sm">Nombre de usuario</div>
              <input
                type="text"
                className="px-3 py-2 rounded-md w-full focus:outline-none ring-blue-200 focus:ring-2 focus:border-blue-500 mt-2 border border-gray-300"
                name="nickname"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div className="text-gray-500 text-sm">Contraseña</div>
              <input
                type="password"
                className="px-3 py-2 rounded-md w-full focus:outline-none ring-blue-200 focus:ring-2 focus:border-blue-500 mt-2 border border-gray-300"
                name="password"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="px-3 py-2 rounded-md bg-blue-500 ring-blue-700 focus:ring-2 focus:outline-none text-white w-full font-semibold"
            >
              {loading ? "Cargando..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
