import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ onLogout, authService }) => {
  const location = useLocation().pathname;
  const [userId, setUserId] = useState(null);

  const onSignin = () => {
    authService.login().then((data) => setUserId(data.user.uid));
  };

  const isActivity = (location) => {
    return location === "/activity" ? true : false;
  };
  return (
    <>
      <header className={styles.header}>
        <Link
          className={`${styles.link} ${
            !isActivity(location) ? styles.spot : null
          }`}
          to="/spot"
        >
          Spot
        </Link>
        <Link
          className={`${styles.link} ${
            isActivity(location) ? styles.activity : null
          }`}
          to="/activity"
        >
          Activity
        </Link>

        <button
          className={`${styles.button} ${userId ? styles.in : styles.out}`}
          onClick={onSignin}
        >
          Sign in
        </button>
      </header>
    </>
  );
};

export default Header;
