import UserState from "../context/User/UserState";
import { initAxiosInterceptors } from "../helpers/auth-helpre";
import "../styles/globals.css";

initAxiosInterceptors();

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <UserState>
      <Component {...pageProps} />
    </UserState>
  );
  // return <Component {...pageProps} />;
}

export default MyApp;
