import React from "react";
import styles from "./spot_item.module.css";
const SpotItem = ({ spot }) => {
  return (
    <section>
      <img src={spot.imgURL} alt="" />
    </section>
  );
};

export default SpotItem;
