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
        <p className={styles.chip}>{appointment}</p>
        <button></button>
        <p className={styles.chip}>{mean}</p>
        <div className={styles.chip}>{course}</div>
        <div className={styles.chip}>{goal}</div>
        <div className={styles.chip}>{mode}</div>
      </div>
    </section>
  );
};

export default ActivityItem;