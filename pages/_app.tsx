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
        <Component {...pageProps} />
      </IconContext.Provider>
    </>
  );
}

export default MyApp;
