import React from "react";
import Spot from "../spot/spot";
import styles from "./spot_list.module.css";

const SpotList = (spots) => (
  <section>
    <ul>
      {Object.keys(spots).map((key) => (
        <Spot key={key} spot={spots[key]} />
      ))}
    </ul>
  </section>
);

export default SpotList;
