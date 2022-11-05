import React from "react";
import styles from "./spot_item.module.css";

const SpotItem = ({ spot }) => {
  const { fileURL, id, userName } = spot;
  console.log(id);
  return (
    <section className={styles.spotitem}>
      <div className={styles.border}>
        <img className={styles.img} src={fileURL} alt="" />
      </div>
      <p>{userName}</p>
    </section>
  );
};

export default SpotItem;
