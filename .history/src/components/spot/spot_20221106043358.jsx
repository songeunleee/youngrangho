import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddSpot from "../add_spot/add_spot";
import Header from "../header/header";
import SpotList from "../spot_list/spot_list";
import styles from "./spot.module.css";

const Spot = ({ authService, user }) => {
  const publishedAt = (publishedAt) => {
    const now = new Date();
    const time = new Date(publishedAt);

    const t = (now - time) / 1000;

    if (t < 60) return Math.floor(t) + "초 전";
    const tm = t / 60;
    if (tm < 60) return Math.floor(tm) + "분 전";
    const th = tm / 60;
    if (th < 24) return Math.floor(th) + "시간 전";
    const td = th / 24;
    if (td < 8) return Math.floor(td) + "일 전";
    const tw = td / 7;
    if (tw < 5) return Math.floor(tw) + "주 전";
    const tmon = td / 30;
    if (tw < 30) return Math.floor(tmon) + "달 전";
    const ty = td / 365;
    return Math.floor(ty) + "년 전";
  };
  const time = new Date("Sun Nov 06 2022 04:28:18 GMT+0900");
  console.log(publishedAt(time));
  const [spots, setSpots] = useState({
    1: {
      id: 1,
      fileURL: "./images/main2.jpg",
      userName: "songeun",
      now: time,
      publishedAt: publishedAt(now),
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

  const addSpot = (spot) => {
    setSpots((spots) => {
      const updated = { ...spots };
      updated[spot.id] = spot;
      return updated;
    });
  };

  return (
    <section>
      <SpotList user={user} spots={spots} addSpot={addSpot} />
    </section>
  );
};

export default Spot;
