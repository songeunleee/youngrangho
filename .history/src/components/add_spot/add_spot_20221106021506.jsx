import React from "react";
import styles from "./add_spot.module.css";

const AddSpot = (props) => {
  return (
    <div className={styles.border}>
      <img className={styles.img} src="./images/upload.png" alt="" />
    </div>
  );
};

export default AddSpot;
