import React from "react";
import styles from "./join_item.module.css";

const JoinItem = ({ user }) => {
  return (
    <section className=>
      <img src={user.userImg} alt="" />
      <div>{user.name}</div>
    </section>
  );
};

export default JoinItem;
