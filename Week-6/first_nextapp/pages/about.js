import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About Page </title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.mainHeading}>Hello World my about </h1>
        <Image
          src="/next.svg"
          width="500"
          height="300"
          alt="aboutImage"></Image>
      </div>
    </>
  );
};

export default about;
