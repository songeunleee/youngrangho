import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./spot.module.css";

const Spot = ({ authService, userId }) => {
  const location = useLocation();
  console.log("spot " + userId);

  return <h1>Spot</h1>;
};

export default Spot;
