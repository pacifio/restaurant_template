import { MantineProvider } from "@mantine/core";
import { RouterTransition } from "../components/RouterTransition/RouterTransition";
import "../styles/globals.css";
import { useEffect } from "react";
import menuControls from "../lib/burger_menu";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    menuControls();
  }, []);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        focusRing: "never",
        primaryColor: "orange",
        loader: "oval",
      }}
    >
      <RouterTransition />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
