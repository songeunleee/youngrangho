import React from "react";
import styles from "./add_spot.module.css";

const AddSpot = ({ onAdd }) => {
  const onClick = () => {
    onAdd();
  };

  return (
    <div onClick={onClick} className={styles.border}>
      <img className={styles.img} src="./images/plus (4).png" alt="" />
    </div>
  );
};

export default AddSpot;
