import React, { useEffect, useRef, useState } from "react";
import styles from "./spot_item.module.css";

const SpotItem = ({ spot, user, onDelete }) => {
  const { fileURL, id, userName, uploadTime, userUid } = spot;
  const [userUidNow, setUserUidNow] = useState(null);
  const [loading, setLoading] = useState(true);
  const imgRef = useRef();

  console.log(loading);
  const onClick = () => {
    (user && user.uid) === userUid && onDelete(spot);
  };

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
    <section className={styles.spotitem}>
      <div className={styles.border}>
        <i
          onClick={onClick}
          className={`fa-solid fa-xmark ${styles.i} ${
            (user && user.uid) === userUid && styles.deletebtn
          }`}
        ></i>

        {!loading ? (
          <img
            ref={imgRef}
            onClick={onClick}
            className={styles.img}
            src={fileURL}
            alt=""
            onLoad={() => console.log(1)}
          />
        ) : (
          <div className={styles.loading}></div>
        )}

        <div className={styles.info}>
          <i className={`fa-solid fa-camera ${styles.icon}`}></i>
          <p className={styles.userName}>{userName}</p>
          <p className={styles.time}>{publishedAt(uploadTime)}</p>
        </div>
      </div>
    </section>
  );
};

export default SpotItem;
