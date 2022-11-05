import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./add_spot.module.css";

const AddSpot = ({ user, onAdd }) => {
  const [userName, setUserName] = useState(null);

  setUserName(user && user.displayName);
  useEffect(() => {});

  const onClick = () => {
    const spot = {
      id: Date.now(), //uuid
      fileURL: "./images/main5.jpg",
      userName,
    };
    onAdd(spot);
  };

  return (
    <div onClick={onClick} className={styles.border}>
      <img className={styles.img} src="./images/plus (4).png" alt="" />
    </div>
  );
};

export default AddSpot;
