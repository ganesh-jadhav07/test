import "../styles/globals.css";
import Layout from "../components/navigation/Layout";
import Head from "next/head";
import { store } from '../lib/Redux/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout>
        <Head>
          <link rel="shortcut icon" href="/bp.png" />
        </Head>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp;
