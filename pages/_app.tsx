import type { AppProps } from "next/app";
import { IconContext } from "react-icons";
import React, { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";

import Modal from "react-modal";
import "../styles/index.css";
import "../styles/themes.css";
import "../styles/variables.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.asPath.split("/");
  const [queryClient] = useState(() => new QueryClient());
  Modal.setAppElement("#root"); //Required by react-modal

  //Gets saved theme from local storage and applies it, uses "dark" theme as default otherwise
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : "dark";
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <title>Wordbook</title>
          </Head>

          <div className={path[1] === "home" ? "page-container" : ""} id="root">
            <IconContext.Provider value={{ size: "24px" }}>
              {path[1] === "home" && <Navbar />}
              <Component {...pageProps} />
            </IconContext.Provider>
          </div>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
