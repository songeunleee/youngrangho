import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  const location = useLocation().pathname;

  const select = (location) => {
    return location === "/activity" ? "styles.activity" : "styles.spot";
  };

  console.log(select(location));
  return (
    { console.log(select(location))}
    <>
      <header className={styles.header}>
        <Link className={`${styles.link} ${select(location)}`} to="/spot">
          Spot
        </Link>
        <Link className={`${styles.link} ${select(location)}`} to="/activity">
          Activity
        </Link>
        <button className={styles.button}>Sign up</button>
        <button className={styles.button}>Sign in</button>
      </header>
    </>
  );
};

export default Header;