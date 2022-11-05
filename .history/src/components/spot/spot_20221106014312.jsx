import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import SpotList from "../spot_list/spot_list";
import styles from "./spot.module.css";

const Spot = ({ authService, user }) => {
  const [userName, setUserName] = useState(user);
  console.log(user);
  const [spots, setSpots] = useState({
    1: {
      id: 1,
      fileURL: "./images/main2.jpg",
      userName,
    },
    2: {
      id: 2,
      fileURL: "./images/main4.jpg",
      userName,
    },
    3: {
      id: 3,
      fileURL: "./images/main3.jpg",
      userName,
    },
    4: {
      id: 4,
      fileURL: "./images/main5.jpg",
      userName,
    },
    5: {
      id: 5,
      fileURL: "./images/main3.jpg",
      userName,
    },
    6: {
      id: 6,
      fileURL: "./images/main3.jpg",
      userName,
    },
    7: {
      id: 7,
      fileURL: "./images/main4.jpg",
      userNmae: user && user.displayName,
      userName,
    },
    8: {
      id: 8,
      fileURL: "./images/main2.jpg",
      userNmae: user && user.displayName,
      userName,
    },
  });

  return <SpotList spots={spots} />;
};

export default Spot;
