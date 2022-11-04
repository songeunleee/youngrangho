import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./activity.module.css";

const Activity = ({ authService }) => {
  const location = useLocation();
  console.log(location);

  return <h1>Activity</h1>;
};
export default Activity;
