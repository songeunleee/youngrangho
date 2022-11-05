import React from "react";
import styles from "./spot_item.module.css";

const SpotItem = ({ spot }) => {
  const { fileURL, id } = spot;
  console.log(id);
  return (
    <section>
      <div>
        <img src={fileURL} alt="" />
      </div>
    </section>
  );
};

export default SpotItem;
