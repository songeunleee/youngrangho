import React from "react";
import styles from "./add_card.module.css";

const AddCard = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.addCard}>
        <div 
        <img className={styles.img} src="./images/plus (4).png" alt="" />
      </div>
    </section>
  );
};

export default AddCard;
