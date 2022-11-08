import React from "react";

const ActivityItem = ({ card }) => {
  const { id, author, createTime, appointment, mean, course, goal, mode } =
    card;
  return (
    <section className={styles.card}>
      <p className={styles.author}>{author}</p>
      <p className={styles.createTime}>{Date(createTime)}</p>
      <div className={styles.chip}>{appointment}</div>
      <div className={styles.chip}>{mean}</div>
      <div className={styles.chip}>{course}</div>
      <div className={styles.chip}>{goal}</div>
      <div className={styles.chip}>{mode}</div>
    </section>
  );
};

export default ActivityItem;
