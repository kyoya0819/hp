import Head from "next/head";
import type { AppProps } from "next/app";

import "styles/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title />
                <meta property="og:url" content="https://kyoya0819.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="kyoya0819 / Miyako Nari" />
                <meta property="og:site_name" content="kyoya0819 / Miyako Nari" />
                <meta property="og:description" content="Very sleepy, that is sleepy." />
                <meta property="og:image" content="https://kyoya0819.com/ogp.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="description" content="Very sleepy, that is sleepy." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
