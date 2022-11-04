import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./activity.module.css";

const Activity = ({ authService, user }) => {
  const location = useLocation();
  console.log(user);
  const isSignin = (user) => {
    return user ? "로그인됨" : "안됨";
  };

  return <h1>{isSignin(user)}</h1>;
};
export default Activity;
