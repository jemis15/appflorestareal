import Axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { deleteToken, getToken, setToken } from "../../helpers/auth-helpre";
import UserContext from "./UserContext";

const UserState = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRouter();

  // useEffect(() => {
  //   async function cargarUsuario() {
  //     console.log("peticion al servidor");
  //     if (!getToken()) {
  //       setLoading(false);
  //       route.push("/login");
  //       return;
  //     }

  //     try {
  //       const { data: usuario } = await Axios.get("/api/user");
  //       setUser(usuario);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   loading && !user && cargarUsuario();
  //   console.log("cangando usuario ...");
  // }, []);

  async function login(email, password) {
    try {
      await Axios.get("/api/sanctum/csrf-cookie");
      const { data: auth } = await Axios.post("/api/auth", {
        email: email,
        password: password,
      });
      setToken(auth.token);
      return auth;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  function logout() {
    setUser(null);
    deleteToken();
  }

  return <UserContext.Provider value={{ user, login, logout }} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve estar dentro del proveedor UserContext");
  }

  return context;
};

const generateRandomString = (num) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result1 = Math.random().toString(36).substring(0, num);

  return result1;
};

export default UserState;
