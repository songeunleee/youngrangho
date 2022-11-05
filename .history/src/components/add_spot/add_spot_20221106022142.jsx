import React from "react";
import styles from "./add_spot.module.css";

const AddSpot = (props) => {
  return (
    <div className={styles.border}>
      <i className={`fa-solid fa-plus ${styles.i}`}></i>
    </div>
  );
};

export default AddSpot;
