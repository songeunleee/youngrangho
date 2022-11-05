import React from "react";
import Spot from "../spot/spot";
import SpotItem from "../spot_item/spot_item";
import styles from "./spot_list.module.css";

const SpotList = (spots) => (
  <section>
    <ul>{Object.keys(spots).map(<SpotItem />)}</ul>
  </section>
);

export default SpotList;
