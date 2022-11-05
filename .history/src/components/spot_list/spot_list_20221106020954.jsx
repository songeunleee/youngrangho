import React from "react";
import Spot from "../spot/spot";
import SpotItem from "../spot_item/spot_item";
import styles from "./spot_list.module.css";

const SpotList = ({ spots }) => (
  <section className={styles.spotlist}>
    <ul className={styles.list}>
      {Object.keys(spots).map((key) => (
        <SpotItem key={key} spot={spots[key]} />
      ))}
      <AddSpot />
    </ul>
  </section>
);

export default SpotList;
