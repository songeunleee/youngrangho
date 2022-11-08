import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./activity.module.css";

const Activity = ({ authService, user }) => {
  return (
    <p className={styles.text}>
      안녕하세요 저넌 이송은입니다 이곳은 액티비티 같이 활동 할 사람을 모집하는
      곳입니다.
    </p>
  );
};
export default Activity;
