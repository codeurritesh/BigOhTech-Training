import Header from "../components/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Head Demo" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="Ritesh" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />
    </>
  );
};

export default index;
