import type { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/themes.css";
import Navbar from "../components/Navbar";
import { IconContext } from "react-icons";
import React, { useContext, useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    //useState doesn't work here for some reason??
    const savedTheme = JSON.parse(localStorage.getItem("theme") || "");
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ size: "24px" }}>
        <Navbar />
        <section className="page-container">
          <Component {...pageProps} />
        </section>
      </IconContext.Provider>
    </>
  );
}

export default MyApp;
