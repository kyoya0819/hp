import Head from "next/head";
import type { AppProps } from "next/app";

import Header from "components/Header/Header";

import "styles/reset.scss";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <Header />

            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
