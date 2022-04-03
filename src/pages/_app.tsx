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
                <meta property="og:url" content="https://kyoya0819.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="kyoya0819" />
                <meta property="og:site_name" content="kyoya0819 | ホームページ" />
                <meta property="og:description" content="こたつで一日中生活するシロクマエンジニア。" />
                <meta property="og:image" content="https://kyoya0819.com/ogp.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="description" content="こたつで一日中生活するシロクマエンジニア。" />
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
