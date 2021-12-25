import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

const Index = () => {
  const { push } = useRouter();
  const { user, isLoading } = useAuth({ middleware: "auth" });

  if (isLoading) {
    return null;
  }

  if (user) {
    const route_redirect = user.setting
      ? `/projects/${user.setting.project}/${user.setting.guild}`
      : "/";
    push(route_redirect);
  }

  return null;
};

export default Index;
