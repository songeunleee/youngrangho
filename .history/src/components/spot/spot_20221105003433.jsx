import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./spot.module.css";

const Spot = ({ authService }) => {
  const location = useLocation();
  console.log(location);

  return <h1>Spot</h1>;
};

export default Spot;
