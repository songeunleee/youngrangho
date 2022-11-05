import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import SpotList from "../spot_list/spot_list";
import styles from "./spot.module.css";

const Spot = ({ authService, user }) => {
  const [spots, setSpots] = useState({
    1: {
      id: 1,
      fileURL: "./images/main2.jpg",
      userName: "송은이",
    },
    2: {
      id: 2,
      fileURL: "./images/main4.jpg",
      userName: "송은이",
    },
    3: {
      id: 3,
      fileURL: "./images/main3.jpg",
      userName: "송은이",
    },
    4: {
      id: 4,
      fileURL: "./images/main5.jpg",
      userName: "송은이",
    },
    5: {
      id: 5,
      fileURL: "./images/main3.jpg",
      userName: "송은이",
    },
    6: {
      id: 6,
      fileURL: "./images/main3.jpg",
      userName: "송은이",
    },
    7: {
      id: 7,
      fileURL: "./images/main4.jpg",
      userNmae: user && user.displayName,
      userName: "송은이",
    },
    8: {
      id: 8,
      fileURL: "./images/main2.jpg",
      userNmae: user && user.displayName,
      userName: "송은이",
    },
  });

  return <SpotList spots={spots} />;
};

export default Spot;
