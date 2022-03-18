import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Kalkulator inflacji – Na podstawie cen towarów i usług konsumpcyjnych
        </title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
