import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
  <>
    <header className={styles.header}>
      <Link to="/spot">Spot</Link>
      <button className={styles.button}>Activity</button>
      <button className={styles.button}>Sign up</button>
      <button className={styles.button}>Sign in</button>
    </header>
  </>
);

export default Header;
