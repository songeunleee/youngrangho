import React from "react";
import ActivityItem from "../activity_item/activity_item";
import styles from "./activity_list.module.css";

const ActivityList = ({ cards, user, addJoin, DropJoin }) => {
  return (
    <ul className={styles.list}>
      {Object.keys(cards).map((key) => (
        <ActivityItem
          key={key}
          card={cards[key]}
          user={user}
          addJoin={addJoin}
          DropJoin={DropJoin}
        />
      ))}
    </ul>
  );
};

export default ActivityList;
