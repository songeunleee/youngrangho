import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
  <>
    <header className={styles.header}>
      <button className={styles.button}>Spot</button>
      <button className={styles.button}>Activity</button>
      <button className={styles.button}>Sign in</button>
      <button className={styles.button}>Sign up</button>
    </header>
  </>
);

export default Header;
