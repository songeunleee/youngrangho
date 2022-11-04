import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ authService }) => {
  const location = useLocation().pathname;
  const [userId, setUserId] = useState(null);

  const onSignin = () => {
    authService.signin().then((data) => setUserId(data.user.uid));
  };

  const onSignout = () => {
    authService.signout();
    setUserId(null);
  };

  const isActivity = (location) => {
    return location === "/activity" ? true : false;
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
  }, [authService]);
  return (
    <>
      <header className={styles.header}>
        <Link
          className={`${styles.link} ${
            !isActivity(location) ? styles.spot : null
          }`}
          to={"/spot"}
          state={{ id: userId }}
        >
          Spot
        </Link>
        <Link
          className={`${styles.link} ${
            isActivity(location) ? styles.activity : null
          }`}
          to={"/activity"}
          state={{ id: userId }}
        >
          Activity
        </Link>

        {userId ? (
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
