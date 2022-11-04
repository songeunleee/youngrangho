import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./spot.module.css";

const Spot = ({ authService, userId }) => {
  const location = useLocation();
  const isSignin = (userId) => {
    return userId ? "로그인됨" : "안됨";
  };

  return <h1>{isSignin(userId)}</h1>;
};

export default Spot;
