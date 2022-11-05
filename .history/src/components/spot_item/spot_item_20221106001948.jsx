import React from "react";
import styles from "./spot_item.module.css";

const SpotItem = ({ spot }) => {
  const { fileURL, id } = spot;
  console.log(id);
  return (
    <section>
      <p>{fileURL}</p>
      <img src={fileURL} alt="" />
    </section>
  );
};

export default SpotItem;
