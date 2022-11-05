import React from "react";
import styles from "./spot_item.module.css";

const SpotItem = ({ spot }) => {
  const { fileURL, id, userName } = spot;

  return (
    <section className={styles.spotitem}>
      <div className={styles.border}>
        <img className={styles.img} src={fileURL} alt="" />
        <div className={styles.info}>
          <i className="fa-solid fa-camera"></i>
          <p className={styles.userName}>{spot.userName}</p>
        </div>
      </div>
    </section>
  );
};

export default SpotItem;
