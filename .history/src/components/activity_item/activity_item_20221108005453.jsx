import React from "react";

const ActivityItem = ({ card }) => {
  const { id, author, createTime, appointment, mean, course, goal, mode } =
    card;
  return (
    <section>
      <p>{author}</p>
      <p>{Date(createTime)}</p>
      <div>{appointment}</div>
      <div>{mean}</div>
      <div>{course}</div>
      <div>{goal}</div>
      <div>{mode}</div>
    </section>
  );
};

export default ActivityItem;
