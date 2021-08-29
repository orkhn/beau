import "styles/globals.css";

import Layout from "components/layout/Layout";
import Head from "next/head";

import { Provider } from "next-auth/client";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
        <meta property="og:title" content="Beau - A Beauty cave" />
        <meta
          property="og:description"
          content="Beau is a cosmetics company that offering organic beauty products for women."
        />
        {/* <meta property="og:url" content="https://beau.vercel.app/" /> */}
      </Head>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
