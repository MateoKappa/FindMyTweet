import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
// import { ThemeProvider } from 'next-themes'

function MyApp({Component, pageProps}) {
  return (
    // <ThemeProvider >
    <Layout>
      <Head>
        <title key="title">Find My Tweet</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
    // </ThemeProvider>
  );
}

export default MyApp;
