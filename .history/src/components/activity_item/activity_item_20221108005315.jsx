import React from "react";

const ActivityItem = ({ card }) => {
  const { id, author, createTime, appointment, mean, course, goal, mode } =
    card;
  return (
    <section>
      <p>{author}</p>
    </section>
  );
};

export default ActivityItem;
