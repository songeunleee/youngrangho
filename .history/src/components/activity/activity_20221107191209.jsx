import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./activity.module.css";
import ActivityList from "../activity_list/activity_list";

const Activity = ({ authService, user }) => {
  return <ActivityList />;
};
export default Activity;
