import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./spot.module.css";

const Spot = ({ authService, user }) => {
  const location = useLocation();

  return <h1>spot</h1>;
};

export default Spot;
