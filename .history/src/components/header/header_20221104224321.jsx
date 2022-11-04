import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  const location = useLocation().pathname;

  const isActivity = (location) => {
    return location === "/activity" ? true : false;
  };
  console.log(isActivity(location));
  return (
    <>
      <header className={styles.header}>
        <Link
          className={`${styles.link} ${!isActivity() ? styles.spot : null}`}
          to="/spot"
        >
          Spot
        </Link>
        <Link
          className={`${styles.link} ${isActivity() ? styles.activity : null}`}
          to="/activity"
        >
          Activity
        </Link>
        <button className={styles.button}>Sign up</button>
        <button className={styles.button}>Sign in</button>
      </header>
    </>
  );
};

export default Header;
