import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./spot.module.css";

const Spot = ({ authService, user }) => {
  const [spots, setSpots] = useState({
    1: { id: 1, imageURL: null },
    2: { id: 2, imageURL: null },

    3: { id: 2, imageURL: null },
  });

  return <h1>spot</h1>;
};

export default Spot;
