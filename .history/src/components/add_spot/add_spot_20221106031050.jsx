import React from "react";
import styles from "./add_spot.module.css";

const AddSpot = ({ user, onAdd }) => {
  const onClick = () => {
    const spot = {
        id: Date.now(), //uuid
        fileURL:'./images/main4.jpg',
        userName:

      };
    onAdd();
  };

  return (
    <div onClick={onClick} className={styles.border}>
      <img className={styles.img} src="./images/plus (4).png" alt="" />
    </div>
  );
};

export default AddSpot;
