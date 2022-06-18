import type { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/variables.css";
import Navbar from "../components/Navbar";
import { IconContext } from "react-icons";

function MyApp({ Component, pageProps }: AppProps) {
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
