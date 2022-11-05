import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddSpot from "../add_spot/add_spot";
import Header from "../header/header";
import SpotList from "../spot_list/spot_list";
import styles from "./spot.module.css";

const Spot = ({ authService, user }) => {
  const [spots, setSpots] = useState({
    1: {
      id: 1,
      fileURL: "./images/main2.jpg",
      userName: "songeun",
    },
    2: {
      id: 2,
      fileURL: "./images/main4.jpg",
      userName: "songeun",
    },
    3: {
      id: 3,
      fileURL: "./images/main3.jpg",
      userName: "songeun",
    },
    4: {
      id: 4,
      fileURL: "./images/main5.jpg",
      userName: "songeun",
    },
    5: {
      id: 5,
      fileURL: "./images/main3.jpg",
      userName: "songeun",
    },
    6: {
      id: 6,
      fileURL: "./images/main3.jpg",
      userName: "songeun",
    },
    7: {
      id: 7,
      fileURL: "./images/main4.jpg",
      userNmae: user && user.displayName,
      userName: "송은",
    },
    8: {
      id: 8,
      fileURL: "./images/main2.jpg",
      userNmae: user && user.displayName,
      userName: "songeun",
    },
  });

  const addSpot = () => {
    console.log("add");
  };

  return (
    <section>
      <SpotList spots={spots} addSpot={addSpot} />
    </section>
  );
};

export default Spot;
