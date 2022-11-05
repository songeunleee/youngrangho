import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import SpotList from "../spot_list/spot_list";
import styles from "./spot.module.css";

const Spot = ({ authService, user }) => {
  const [spots, setSpots] = useState({
    1: { id: 1, fileURL: "./images/main2.jpg" },
    2: { id: 2, fileURL: "./images/main4.jpg" },
    3: { id: 3, fileURL: "./images/main3.jpg" },
    4: { id: 4, fileURL: "./images/main3.jpg" },
    5: { id: 5, fileURL: "./images/main3.jpg" },
    6: { id: 6, fileURL: "./images/main2.jpg" },
    7: { id: 7, fileURL: "./images/main4.jpg" },
    8: { id: 8, fileURL: "./images/main5.jpg" },
  });

  return <SpotList spots={spots} />;
};

export default Spot;