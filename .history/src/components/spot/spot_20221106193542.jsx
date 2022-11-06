import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddSpot from "../add_spot/add_spot";
import Header from "../header/header";
import SpotList from "../spot_list/spot_list";
import styles from "./spot.module.css";

const Spot = ({ authService, user }) => {
  const time = new Date("Sun Nov 06 2022 04:28:18 GMT+0900");

  const [spots, setSpots] = useState({
    1: {
      id: 1,
      fileURL: "./images/main2.jpg",
      userName: "songeun",
      uploadTime: time,
      userUid: "FjWi6hSH7OeFsGGfguAPw7O3poL2",
    },
    2: {
      id: 2,
      fileURL: "./images/main4.jpg",
      userName: "songeun",
      uploadTime: time,
    },
    3: {
      id: 3,
      fileURL: "./images/main3.jpg",
      userName: "songeun",
      uploadTime: time,
    },
    4: {
      id: 4,
      fileURL: "./images/main5.jpg",
      userName: "songeun",
      uploadTime: time,
    },
    5: {
      id: 5,
      fileURL: "./images/main3.jpg",
      userName: "songeun",
      uploadTime: time,
      userUid: "2JLdyikUkFZd8fo9REXkiLAkSfY2",
    },
    6: {
      id: 6,
      fileURL: "./images/main3.jpg",
      userName: "songeun",
      uploadTime: time,
    },
    7: {
      id: 7,
      fileURL: "./images/main4.jpg",
      userNmae: user && user.displayName,
      userName: "송은",
      uploadTime: time,
    },
    8: {
      id: 8,
      fileURL: "./images/main2.jpg",
      userNmae: user && user.displayName,
      userName: "songeun",
      uploadTime: time,
    },
  });

  const addSpot = (spot) => {
    setSpots((spots) => {
      const updated = { ...spots };
      updated[spot.id] = spot;
      return updated;
    });
  };

  const deleteSpot = (spot) => {
    setSpots((spots) => {
      const updated = { ...spots };
      delete updated[spot.id];
      return updated;
    });
  };

  return (
    <section>
      <SpotList
        user={user}
        spots={spots}
        addSpot={addSpot}
        deleteSpot={deleteSpot}
      />
    </section>
  );
};

export default Spot;
