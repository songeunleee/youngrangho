import React from "react";
import styles from "./add_card.module.css";

const AddCard = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.addCard}>
        <i className={`fa-solid fa-circle-plus ${styles.img}`}></i>
      </div>
    </section>
  );
};

export default AddCard;
