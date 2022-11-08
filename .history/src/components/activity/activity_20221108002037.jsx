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
    },
  });

  return <ActivityList />;
};
export default Activity;
