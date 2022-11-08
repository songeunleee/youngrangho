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
      <div className={styles.info}>
        <p className={styles.author}>{author}</p>
        <p className={styles.createTime}>{publishedAt(Date(createTime))}</p>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.content}>
          {appointment && (
            <div className={`${styles.chip} ${styles.appointment}`}>
              {appointment}
              <i
                className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}
              ></i>
            </div>
          )}

          {mean && (
            <div className={`${styles.chip} ${styles.mean}`}>
              {mean}
              <i
                className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}
              ></i>
            </div>
          )}
          {course && (
            <div className={`${styles.chip} ${styles.course}`}>
              {course}
              <i
                className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}
              ></i>
            </div>
          )}
          {goal && (
            <div className={`${styles.chip} ${styles.goal}`}>
              GOAL:{goal}
              <i
                className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}
              ></i>
            </div>
          )}
          {mode && (
            <div className={`${styles.chip} ${styles.mode}`}>
              {mode}
              <i
                className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}
              ></i>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ActivityItem;
