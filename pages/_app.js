import "../styles/globals.css";
import Layout from "../components/navigation/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <head>
        <link rel="shortcut icon" href="/bp.png" />
      </head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
