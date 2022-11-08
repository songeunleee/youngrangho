import React from "react";
import JoinItem from "../join_item/join_item";
import styles from "./join_list.module.css";
const JoinList = ({ joinList }) => (
  <div>
    {joinList.map((user) => (
      <JoinItem key={user.userImg} user={user} />
    ))}
  </div>
);

export default JoinList;
