import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
  <>
    <header className={styles.header}>
      <button className={styles.button}>Sign out</button>
    </header>
  </>
);

export default Header;
