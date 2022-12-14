import { set } from "firebase/database";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import JoinList from "../join_list/join_list";
import styles from "./activity_item.module.css";

const ActivityItem = ({ card, addJoin, DropJoin, user, deleteCard }) => {
  const [joinListShow, setJoinListShow] = useState(false);
  const [showDropOut, setShowDropOut] = useState(false);
  const [showJoin, setShowJoin] = useState(true);
  const [showDelete, setShowDelete] = useState(false);

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
    etc,
  } = card;

  const [Day, setDay] = useState(
    parseInt((appointment - Date.now()) / 1000 / (60 * 60 * 24))
  );
  const [Hour, setHour] = useState(
    parseInt(
      ((appointment - Date.now()) / 1000 - Day * 60 * 60 * 24) / (60 * 60)
    )
  );
  const [Min, setMin] = useState(
    parseInt(
      ((appointment - Date.now()) / 1000 -
        (Day * 60 * 60 * 24 + Hour * 60 * 60)) /
        60
    ) + 1
  );

  useEffect(() => {
    if ((user && user.uid) === userUid) {
      setShowJoin(false);
      setShowDelete(true);
    } else {
      setShowDropOut(false);
      setShowJoin(true);
      setJoinListShow(false);
      setShowDelete(false);
      if (
        user &&
        joinList &&
        card.joinList.filter((item) => item.userImg == user.photoURL).length > 0
      ) {
        setShowDropOut(true);
        setShowJoin(false);
      }
    }
  }, [user]);
  useEffect(() => {
    const stop = setInterval(() => {
      let time = (appointment - Date.now()) / 1000;
      let day = parseInt(time / (60 * 60 * 24));
      let hour = parseInt((time - day * 60 * 60 * 24) / (60 * 60));
      let min = parseInt((time - (day * 60 * 60 * 24 + hour * 60 * 60)) / 60);
      setMin(min);
      setHour(hour);
      setDay(day);
      time--;

      if (time <= 0) {
        clearInterval(stop);
        deleteCard(card);
      }
    }, 60000);

    return () => {
      clearInterval(stop);
    };
  }, [card]);
  const clickJoinList = () => {
    setJoinListShow(!joinListShow);
    console.log(card);
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

  const clickDelete = (card) => {
    deleteCard(card);
  };

  const publishedAt = (publishedAt) => {
    const now = new Date();
    const time = new Date(publishedAt);

    const t = (now - time) / 1000;

    if (t < 60) return Math.floor(t) + "??? ???";
    const tm = t / 60;
    if (tm < 60) return Math.floor(tm) + "??? ???";
    const th = tm / 60;
    if (th < 24) return Math.floor(th) + "?????? ???";
    const td = th / 24;
    if (td < 8) return Math.floor(td) + "??? ???";
    const tw = td / 7;
    if (tw < 5) return Math.floor(tw) + "??? ???";
    const tmon = td / 30;
    if (tw < 30) return Math.floor(tmon) + "??? ???";
    const ty = td / 365;
    return Math.floor(ty) + "??? ???";
  };

  const appointmentTime = (appointment) => {
    return (
      new Date(appointment).getMonth() +
      1 +
      "??? " +
      new Date(appointment).getDate() +
      "??? " +
      new Date(appointment).getHours() +
      "??? " +
      new Date(appointment).getMinutes() +
      "???"
    );
  };

  return (
    <section className={styles.container}>
      <p className={styles.time}>
        {Day}??? {Hour}?????? {Min}???
      </p>
      <div className={styles.card}>
        <div className={styles.info}>
          <p className={styles.author}>???? {author}</p>
          <p className={styles.createTime}>{publishedAt(id)}</p>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.content}>
            {appointment && (
              <div className={`${styles.chip} ${styles.goal}`}>
                <div className={styles.G}>????</div>
                {appointmentTime(appointment)}&nbsp;
              </div>
            )}
            {departure && (
              <div className={`${styles.chip} ${styles.goal}`}>
                <div className={styles.G}>????</div>
                {departure}&nbsp;
              </div>
            )}
            {goal && (
              <div className={`${styles.chip} ${styles.goal}`}>
                <div className={styles.G}>????</div>
                {goal}&nbsp;
              </div>
            )}
            {mean && (
              <div className={`${styles.chip} ${styles.mean}`}>{mean}</div>
            )}
            {course && (
              <div className={`${styles.chip} ${styles.course}`}>{course}</div>
            )}
            {mode && (
              <div className={`${styles.chip} ${styles.mode}`}>{mode}</div>
            )}
            {etc && (
              <div className={`${styles.chip} ${styles.mode}`}>{etc}</div>
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
              onClick={() => clickDelete(card)}
              className={`${styles.btns} ${styles.delete} ${
                showDelete && styles.showDelete
              }`}
            >
              Delete
            </button>
          </div>
          <button onClick={clickJoinList} className={styles.joinlistBtn}>
            {joinList ? joinList.length : 0}
          </button>
        </div>
      </div>
      <div className={`${styles.joinList} ${joinListShow && styles.showList}`}>
        {joinList && <JoinList joinList={joinList} />}
      </div>
    </section>
  );
};

export default ActivityItem;
