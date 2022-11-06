import React from "react";
import AddSpot from "../add_spot/add_spot";
import Spot from "../spot/spot";
import SpotItem from "../spot_item/spot_item";
import styles from "./spot_list.module.css";

const SpotList = ({ spots, addSpot, user }) => (
  <section className={styles.spotlist}>
    <ul className={styles.list}>
      <AddSpot user={user} onAdd={addSpot} />
      {
        Object.keys(spots).map((key) => (
          <SpotItem key={key} spot={spots[key]} />
        )).reverse();
      }
    </ul>
  </section>
);

export default SpotList;
