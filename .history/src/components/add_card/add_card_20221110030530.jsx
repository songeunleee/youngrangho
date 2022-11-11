import React from "react";
import styles from "./add_card.module.css";

const AddCard = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.addCard}>
        <div className={styles.add}>📝 추가하기</div>
      </div>
    </section>
  );
};

export default AddCard;
