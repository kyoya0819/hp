import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
    
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="ja">
                <Head>
                    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "edd65bb1b38a49bb92cca95aa3730777"}'></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;
