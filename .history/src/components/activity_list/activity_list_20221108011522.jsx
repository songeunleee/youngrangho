import React from "react";
import ActivityItem from "../activity_item/activity_item";
import styles from "./activity_list.module.css";

const ActivityList = ({ cards, user }) => {
  return (
    <section className={styles.list}>
      {Object.keys(cards).map((key) => (
        <ActivityItem key={key} card={cards[key]} user={user} />
      ))}
    </section>
  );
};

export default ActivityList;
