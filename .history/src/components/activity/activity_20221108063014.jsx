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
      createTime: Date.now(),
      appointment: "2022-11-08 오후 3시",
      mean: "자전거🚴‍♀️",
      course: "역방향",
      goal: "완주",
      mode: "수다스럽게 🗯",
    },
    2: {
      id: 2,
      author: "송은이",
      createTime: Date.now(),
      appointment: "2022-11-10 오전 11시",
      mean: "반려견 산책🦮",
      course: "정방향",
      goal: "반려견 놀이터",
      mode: "음악 들으며🎧",
    },
    3: {
      id: 3,
      author: "이송은",
      createTime: Date.now(),
      appointment: "아무때나 Call me",
      mean: "뛰기🏃‍♀️",
      course: "정방향",
      goal: "완주 across 호수윗길",
      mode: "열정적으로🔥",
    },
  });

  return <ActivityList cards={cards} />;
};
export default Activity;
