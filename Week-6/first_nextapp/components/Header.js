import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand_box}>
        <Navbar />
      </div>

      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>
            First Next App
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
