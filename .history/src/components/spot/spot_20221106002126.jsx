import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import SpotList from "../spot_list/spot_list";
import styles from "./spot.module.css";

const Spot = ({ authService, user }) => {
  const [spots, setSpots] = useState({
    1: { id: 1, fileURL: "public/images/main.jpg" },
    2: { id: 2, fileURL: null },
    3: { id: 3, fileURL: null },
  });

  return <img src="./images/main2.jpg" alt="" />;
};

export default Spot;
