import "../styles/globals.css";
import Layout from "../components/navigation/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
          <link rel="shortcut icon" href="/bp.png" />
        </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
