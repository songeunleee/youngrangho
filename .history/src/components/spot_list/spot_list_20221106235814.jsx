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
  const giveloading = (loading) => {
    return loading;
  };

  return (
    <section className={styles.spotlist}>
      <ul className={styles.list}>
        <AddSpot
          user={user}
          onAdd={addSpot}
          fileUpload={fileUpload}
          giveloading={giveloading}
        />
        {Object.keys(spots)
          .map((key) => (
            <SpotItem
              key={key}
              spot={spots[key]}
              onDelete={deleteSpot}
              user={user}
              loading={giveloading}
            />
          ))
          .reverse()}
      </ul>
    </section>
  );
};

export default SpotList;
