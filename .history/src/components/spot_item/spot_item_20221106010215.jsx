import React from "react";
import styles from "./spot_item.module.css";

const SpotItem = ({ spot }) => {
  const { fileURL, id } = spot;
  console.log(id);
  return (
    <div className={styles.border}>
      <img className={styles.img} src={fileURL} alt="" />
    </div>
  );
};

export default SpotItem;
