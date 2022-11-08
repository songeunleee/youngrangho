import { set } from "firebase/database";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ActivityList from "../activity_list/activity_list";
import Header from "../header/header";
import styles from "./activity.module.css";

const Activity = ({ authService, user }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      author: "송은",
      createTime: new Date("2022-11-4"),
      appointment: new Date("2022-11-10 10:20"),
      departure: "입구",
      mean: "자전거🚴‍♀️",
      course: "역방향",
      goal: "완주",
      mode: "수다스럽게 🗯",
    },
  });
  console.log(cards);
  return <ActivityList cards={cards} />;
};
export default Activity;
