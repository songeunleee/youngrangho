import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
  <>
    <header className={styles.header}>
      <Link className={styles.link} to="/spot">
        Spot
      </Link>
      <Link className={styles.link} to="/spot">
        Spot
      </Link>
      <Link className={styles.link} to="/spot">
        Spot
      </Link>
      <Link className={styles.link} to="/spot">
        Spot
      </Link>
    </header>
  </>
);

export default Header;
