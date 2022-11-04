import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ authService, getUser, user }) => {
  const location = useLocation().pathname;

  const isActivity = (location) => {
    return location === "/activity" ? true : false;
  };

  const onSignin = () => {
    authService.signin().then((data) => getUser(data.user));
  };

  const onSignout = () => {
    authService.signout();
    getUser(null);
  };
  console.log("header " + user.uid);

  return (
    <>
      <header className={styles.header}>
        <Link
          className={`${styles.link} ${
            !isActivity(location) ? styles.spot : null
          }`}
          to={"/spot"}
        >
          Spot
        </Link>
        <Link
          className={`${styles.link} ${
            isActivity(location) ? styles.activity : null
          }`}
          to={"/activity"}
        >
          Activity
        </Link>

        {user ? (
          <button className={`${styles.button} `} onClick={onSignout}>
            Sign out
          </button>
        ) : (
          <button className={`${styles.button}`} onClick={onSignin}>
            Sign in
          </button>
        )}
      </header>
    </>
  );
};

export default Header;
