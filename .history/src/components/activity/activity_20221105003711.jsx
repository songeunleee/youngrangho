import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./activity.module.css";

const Activity = ({ authService }) => {
  const location = useLocation().state.id;
  console.log(location);

  const isSignin = (location) => {
    return location ? "로그인됨" : "안됨";
  };

  return <h1>{isSignin()}</h1>;
};
export default Activity;
