import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.link} to="/spot">
          Spot
        </Link>
        <Link className={styles.link} to="/activity">
          Activity
        </Link>
        <button className={styles.button}>Sign up</button>
        <button className={styles.button}>Sign in</button>
      </header>
    </>
  );
};

export default Header;
