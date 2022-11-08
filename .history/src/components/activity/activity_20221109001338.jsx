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
    2: {
      id: 2,
      author: "송은이",
      createTime: Date.now(),
      appointment: new Date("2022-11-15 11:30"),
      departure: "입구",
      goal: "반려견 놀이터",
      mean: "반려견 산책🦮",
      course: "정방향",
      mode: "음악 들으며🎧",
    },
    3: {
      id: 3,
      author: "이송은",
      createTime: Date.now(),
      appointmnew: Date(nob),
      departure: "입구",
      mean: "뛰기🏃‍♀️",
      course: "정방향",
      goal: "완주 across 호수윗길",
      mode: "열정적으로🔥",
    },
    4: {
      id: 4,
      author: "송은",
      createTime: Date.now(),
      appointment: new Date("2022-11-15 11:30"),
      departure: "입구",
      mean: "자전거🚴‍♀️",
      course: "역방향",
      goal: "완주",
      mode: "수다스럽게 🗯",
    },
    5: {
      id: 5,
      author: "송은",
      createTime: Date.now(),
      appointment: new Date("2022-11-15 11:30"),
      departure: "입구",
      mean: "자전거🚴‍♀️",
      course: "역방향",
      goal: "완주",
      mode: "수다스럽게 🗯",
    },
    6: {
      id: 6,
      author: "송은",
      createTime: Date.now(),
      appointment: new Date("2022-11-15 11:30"),
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
