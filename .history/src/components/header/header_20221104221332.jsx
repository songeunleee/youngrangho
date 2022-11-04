import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  const location = useLocation().pathname;
  console.log(location);
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
