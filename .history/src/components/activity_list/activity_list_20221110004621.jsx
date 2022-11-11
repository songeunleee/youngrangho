import React from "react";
import ActivityItem from "../activity_item/activity_item";
import AddCard from "../add_card/add_card";
import styles from "./activity_list.module.css";

const ActivityList = ({ cards, user, addJoin, DropJoin }) => {
  return (
    <section className={styles.container}>
      <div className={styles.list}>
        <AddCard></AddCard>
        {Object.keys(cards).map((key) => (
          <ActivityItem
            key={key}
            card={cards[key]}
            user={user}
            addJoin={addJoin}
            DropJoin={DropJoin}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivityList;
