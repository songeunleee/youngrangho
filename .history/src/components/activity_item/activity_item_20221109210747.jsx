import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import JoinList from "../join_list/join_list";
import styles from "./activity_item.module.css";

const ActivityItem = ({ card, addJoin, DropJoin, user }) => {
  const [joinListShow, setJoinListShow] = useState(false);
  const [showDropOut, setShowDropOut] = useState(false);
  const [showJoin, setShowJoin] = useState(true);

  const {
    id,
    author,
    createTime,
    appointment,
    mean,
    course,
    departure,
    goal,
    mode,
    joinList,
    userUid,
  } = card;

  useEffect(() => {
    user && user.uid && userUid && setShowDelete(true);

    setShowDropOut(false);
    setShowJoin(true);
    setJoinListShow(false);

    if (
      user &&
      card.joinList.filter((item) => item.userImg == user.photoURL).length > 0
    ) {
      setShowDropOut(true);
      setShowJoin(false);
    }
  }, [user]);

  const clickJoinList = () => {
    setJoinListShow(!joinListShow);
  };

  const clickJoin = (card) => {
    user && setShowJoin(false);
    user && setShowDropOut(true);
    user && setJoinListShow(true);
    user && addJoin(card);
  };

  const clickDropOut = (card) => {
    setShowJoin(true);
    setShowDropOut(false);
    DropJoin(card);
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

  const appointmentTime = (appointment) => {
    return appointment + "/";
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.info}>
          <p className={styles.author}>📝 {author}</p>
          <p className={styles.createTime}>{publishedAt(createTime)}</p>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.content}>
            {appointment && (
              <div className={`${styles.chip} ${styles.goal}`}>
                <div className={styles.G}>📅</div>
                {appointment}&nbsp;
                <i
                  className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}
                ></i>
              </div>
            )}
            {departure && (
              <div className={`${styles.chip} ${styles.goal}`}>
                <div className={styles.G}>📍</div>
                {departure}&nbsp;
                <i
                  className={`fa-solid fa-circle-xmark ${styles.chipDelete}`}
                ></i>
              </div>
            )}
            {goal && (
              <div className={`${styles.chip} ${styles.goal}`}>
                <div className={styles.G}>🏁</div>
                {goal}&nbsp;
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
        <div className={styles.btnBox}>
          <div className={styles.display}>
            <button
              onClick={() => clickJoin(card)}
              className={`${styles.btns} ${styles.joinBtn} ${
                showJoin && styles.showJoin
              }`}
            >
              Join
            </button>
            <button
              onClick={() => clickDropOut(card)}
              className={` ${styles.btns} ${styles.dropBtn}  ${
                showDropOut && styles.showDropBtn
              }`}
            >
              Drop Out
            </button>
            <button
              className={`${styles.btns} ${styles.delete} ${
                showDelete && styles.showDelete
              }`}
            >
              Delete
            </button>
          </div>
          <button onClick={clickJoinList} className={styles.joinlistBtn}>
            +
          </button>
        </div>
      </div>
      <div className={`${styles.joinList} ${joinListShow && styles.showList}`}>
        <JoinList joinList={card.joinList} />
      </div>
    </section>
  );
};

export default ActivityItem;
