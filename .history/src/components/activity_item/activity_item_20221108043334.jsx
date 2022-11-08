import React from "react";
import styles from "./activity_item.module.css";

const ActivityItem = ({ card }) => {
  const { id, author, createTime, appointment, mean, course, goal, mode } =
    card;

  const publishedAt = (publishedAt) => {
    const now = new Date();
    const time = new Date(publishedAt);

    const t = (now - time) / 1000;

    if (t < 60) return Math.floor(t) + "초 전";
    const tm = t / 60;
    if (tm < 60) return Math.floor(tm) + "분 전";
    const th = tm / 60;
    if (th < 24) return Math.floor(th) + "시간 전";
    const td = th / 24;
    if (td < 8) return Math.floor(td) + "일 전";
    const tw = td / 7;
    if (tw < 5) return Math.floor(tw) + "주 전";
    const tmon = td / 30;
    if (tw < 30) return Math.floor(tmon) + "달 전";
    const ty = td / 365;
    return Math.floor(ty) + "년 전";
  };

  return (
    <section className={styles.card}>
      <p className={styles.author}>{author}</p>
      <p className={styles.createTime}>{publishedAt(Date(createTime))}</p>
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
        <div className={styles.chip}>
          {mode}
          <i className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}></i>
        </div>
      </div>
    </section>
  );
};

export default ActivityItem;
