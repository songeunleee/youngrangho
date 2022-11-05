import React from "react";
import styles from "./add_spot.module.css";

const AddSpot = ({ onAdd }) => {
  return (
    <div onClick={onAdd} className={styles.border}>
      <img className={styles.img} src="./images/plus (4).png" alt="" />
    </div>
  );
};

export default AddSpot;
