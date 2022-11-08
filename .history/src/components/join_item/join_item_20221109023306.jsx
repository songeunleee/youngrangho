import React from "react";
import styles from "./join_item.module.css";

const JoinItem = ({ user }) => {
  return (
    <section className={styles.item}>
      <img className={styles.img} src={user.userImg} alt="" />
      <div className={styles.name}>{user.name}님이 함꼐하고 싶어합니다!</div>
    </section>
  );
};

export default JoinItem;
