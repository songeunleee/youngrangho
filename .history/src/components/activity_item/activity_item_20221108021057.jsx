import React from "react";
import styles from "./activity_item.module.css";

const ActivityItem = ({ card }) => {
  const { id, author, createTime, appointment, mean, course, goal, mode } =
    card;
  return (
    <section className={styles.card}>
      <p className={styles.author}>{author}</p>
      <p className={styles.createTime}>{Date(createTime)}</p>
      <div className={styles.content}>
        <div className={styles.chip}>
          {appointment}
          <i className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}></i>
        </div>
        <div className={styles.chip}>
          {mean}
          <i className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}></i>
        </div>
        <div className={styles.chip}>
          {course}
          <i className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}></i>
        </div>
        <div className={styles.chip}>
          {goal}
          <i className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}></i>
        </div>
        <div className={styles.chip} style={`color:black`}>
          {mode}
          <i className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}></i>
        </div>
      </div>
    </section>
  );
};

export default ActivityItem;
