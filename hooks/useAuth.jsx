import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteToken, setToken } from "../helpers/auth-helpre";

export const useAuth = ({ middleware } = {}) => {
  const router = useRouter();
  const [token, changeToken] = useState(null);

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status != 409) throw error;

        router.push("/verify-email");
      })
  );

  const csrf = () => axios.get("/api/sanctum/csrf-cookie");

  const login = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/api/auth", props)
      .then((data) => {
        mutate();
        setToken(data.data.token);
        changeToken(data.data.token);

        // corregir error de redireccionamiendo al logearce;
        // const route_redirect = data.setting ? `/projects/${data.project}/${data.guild}` : "/"
        // router.push(route_redirect);
      })
      .catch((error) => {
        if (error.response.status != 422) throw error;

        setErrors(Object.values(error.response.data.errors).flat());
      });
  };

  const logout = async () => {
    if (!error) {
      await axios.post("/api/logout");
      mutate();
      deleteToken();
    }

    router.push("/login");
    // window.location.pathname = "/login";
  };

  useEffect(() => {
    if (middleware == "guest" && user) {
      const route_redirect = user.setting
        ? `/projects/${user.setting.project}/${user.setting.guild}`
        : "/";
      router.push(route_redirect);
    }
    if (middleware == "auth" && error) logout();
  }, [user, error]);

  return {
    user,
    login,
    logout,
    token,
    isLoading: !error && !user
  };
};
