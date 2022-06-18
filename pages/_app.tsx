import type { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/variables.css";
import Navbar from "../components/ui/Navbar";
import { IconContext } from "react-icons";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.setAttribute("data-theme", "stealth");
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
