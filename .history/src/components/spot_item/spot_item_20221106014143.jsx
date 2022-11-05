import React from "react";
import styles from "./spot_item.module.css";

const SpotItem = ({ spot }) => {
  const { fileURL, id, userName } = spot;
  console.log(user);
  return (
    <section className={styles.spotitem}>
      <div className={styles.border}>
        <img className={styles.img} src={fileURL} alt="" />
        <i class="fa-solid fa-camera"></i>
        <p className={styles.userName}>{spot.userName}</p>
      </div>
    </section>
  );
};

export default SpotItem;
