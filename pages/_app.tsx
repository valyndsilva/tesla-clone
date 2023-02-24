import "../styles/globals.css";
import { Layout } from "../components";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
// import Login from "./login";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
