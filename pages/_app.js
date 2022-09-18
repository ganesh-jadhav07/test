import '../styles/globals.css';
import NavBar from '../components/navigation/NavBar';
import Screen4 from '../components/HomePage/Screen4';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Screen4 />
    </>
  );
}

export default MyApp;
