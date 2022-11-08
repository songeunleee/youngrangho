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
      <div className={styles.list}>
        <AddSpot user={user} onAdd={addSpot} fileUpload={fileUpload} />
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
      </div>
    </section>
  );
};

export default SpotList;
