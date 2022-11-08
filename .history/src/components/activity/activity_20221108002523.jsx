import { set } from "firebase/database";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ActivityList from "../activity_list/activity_list";
import Header from "../header/header";
import styles from "./activity.module.css";

const Activity = ({ authService, user }) => {
  const [activitys, setActivitys] = useState({
    1: {
      id: 1,
      author: "송은",
      createTime: Date.now(),
      appointment: "",
      mean: "자전거",
      course: "역방향",
      goal: "1 바퀴 완주",
      mode: "수다스럽게",
    },
  });

  return <ActivityList />;
};
export default Activity;
