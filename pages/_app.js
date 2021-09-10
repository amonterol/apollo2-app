import "bulma/css/bulma.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Head from "next/head";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tienda Chayito</title>
      </Head>
      {pageProps.appData}
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  console.log("GET INITIAL PROPS _APP");
  const initialProps =
    App.getInitialProps && (await App.getInitialProps(context));

  console.log(initialProps);

  return {
    pageProps: { appData: "Hello _App Component", ...initialProps.pageProps },
  };
};

export default MyApp;
