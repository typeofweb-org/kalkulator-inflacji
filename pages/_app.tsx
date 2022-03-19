import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Kalkulator inflacji – Na podstawie cen towarów i usług konsumpcyjnych
        </title>
        <meta
          name="description"
          content="Kalkulator Inflacji Polska 2022 – Na podstawie cen towarów i usług udostępnianych przez GUS"
        />
        <meta
          property="og:title"
          content="Kalkulator inflacji: Stwórz swój własny koszyk i wylicz Twoją inflację"
        />
        <meta property="og:site_name" content="Kalkulator inflacji" />
        <meta
          property="og:url"
          content="https://kalkulator-inflacji.vercel.app"
        />
        <meta
          property="og:description"
          content="Kalkulator Inflacji Polska 2022 – Stwórz swój własny koszyk i wylicz Twoją inflację – Na podstawie cen towarów i usług udostępnianych przez GUS"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kalkulator-inflacji.vercel.app/kalkulator_inflacji_og.png"
        />
      </Head>
      <div className="min-h-full flex  flex-col">
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
