import React from "react";
import styles from "./spot_item.module.css";
const SpotItem = ({ spot }) => {
  const { fileURL } = spot;
  return (
    <section>
      <img src={fileURL} alt="" />
    </section>
  );
};

export default SpotItem;
