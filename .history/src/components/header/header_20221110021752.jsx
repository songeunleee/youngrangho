import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ authService, getUser, user }) => {
  const location = useLocation().pathname;

  const isSpot = (location) => {
    return location === "/spot" ? true : false;
  };

  const onSignin = () => {
    authService.signin().then((data) => getUser(data.user));
  };

  const onSignout = () => {
    authService.signout();
    getUser(null);
  };

  console.log(authService.onAuthChange(user)=>user);

  return (
    <header className={styles.header}>
      <Link
        className={`${styles.logolink} ${
          !isSpot(location) ? styles.activity : null
        } `}
        to={"/"}
      >
        <img className={styles.logo} src="./images/duck (1).png" alt="" />
      </Link>
      <Link
        className={`${styles.link} ${
          !isSpot(location) ? styles.activity : null
        }`}
        to={"/activity"}
      >
        ACTIVITY
      </Link>
      <Link
        className={`${styles.link} ${isSpot(location) ? styles.spot : null}`}
        to={"/spot"}
      >
        SPOT
      </Link>

      {user ? (
        <div className={styles.signIn}>
          <img className={styles.img} src={user.photoURL} alt="" />
          <p className={styles.name}>{user.displayName}</p>
          <button
            className={`${styles.button} ${styles.sign}`}
            onClick={onSignout}
          >
            Sign out
          </button>
        </div>
      ) : (
        <button className={`${styles.button}`} onClick={onSignin}>
          Sign in
        </button>
      )}
    </header>
  );
};

export default Header;
