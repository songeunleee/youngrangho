import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./activity.module.css";

const Activity = ({ authService, userId }) => {
  const location = useLocation();
  console.log(location);
  const isSignin = (userId) => {
    return userId ? "로그인됨" : "안됨";
  };

  return <h1>{isSignin(userId)}</h1>;
};
export default Activity;
