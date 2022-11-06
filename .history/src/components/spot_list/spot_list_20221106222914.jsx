import React, { useReducer, useRef } from "react";
import AddSpot from "../add_spot/add_spot";
import Spot from "../spot/spot";
import SpotItem from "../spot_item/spot_item";
import styles from "./spot_list.module.css";

const SpotList = ({
  spots,
  addSpot,
  deleteSpot,
  user,
  fileUpload,
  onFileUpload,
}) => {
  return (
    <section className={styles.spotlist}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <ul className={styles.list}>
        {Object.keys(spots)
          .map((key) => (
            <SpotItem
              key={key}
              spot={spots[key]}
              onDelete={deleteSpot}
              user={user}
            />
          ))
          .reverse()}
      </ul>
    </section>
  );
};

export default SpotList;
