import React, { useReducer, useRef } from "react";
import AddSpot from "../add_spot/add_spot";
import Spot from "../spot/spot";
import SpotItem from "../spot_item/spot_item";
import styles from "./spot_list.module.css";

const SpotList = ({ spots, addSpot, deleteSpot, user, fileUpload , onFileChange}) => {
  const inputRef = useRef();
  const onChange = async (event) => {
    const uploaded = await fileUpload.upload(event.target.files[0]);
    onFileChange({
        
        url: uploaded
      });
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
        <AddSpot user={user} onAdd={addSpot} />
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
