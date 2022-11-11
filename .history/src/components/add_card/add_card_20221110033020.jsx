import React from "react";
import styles from "./add_card.module.css";

const AddCard = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.addCard}>
        <FontAwesomeIcon className={styles.img} icon="fa-solid fa-plus" />
      </div>
    </section>
  );
};

export default AddCard;
