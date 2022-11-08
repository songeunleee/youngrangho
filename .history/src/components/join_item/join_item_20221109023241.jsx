import React from "react";
import styles from "./join_item.module.css";

const JoinItem = ({ user }) => {
  return (
    <section className={styles.item}>
      <img className={styles.img} src={user.userImg} alt="" />
      <div className={styles.name}>{user.name}</div>
    </section>
  );
};

export default JoinItem;
