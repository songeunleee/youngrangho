import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddSpot from "../add_spot/add_spot";
import Header from "../header/header";
import SpotList from "../spot_list/spot_list";
import styles from "./spot.module.css";

const Spot = ({ authService, user, fileUpload, repository }) => {
  const [spots, setSpots] = useState({});
  const [loading, setloading] = useState(false);
  console.log(loading);
  useEffect(() => {
    const stopSynk = repository.syncSpots(user && user.uid, (spots) => {
      setSpots(spots);
      setloading(false);
    });
    return () => stopSynk();
  }, [user, repository]);

  const addSpot = (spot) => {
    setSpots((spots) => {
      const updated = { ...spots };
      updated[spot.id] = spot;
      return updated;
    });
    repository.saveSpot(user.uid, spot);
  };

  const deleteSpot = (spot) => {
    setSpots((spots) => {
      const updated = { ...spots };
      delete updated[spot.id];
      return updated;
    });
    repository.removeSpot(user.uid, spot);
  };

  return (
    <section className={styles.spot}>
      {loading ? (
        <div className={styles.loading}></div>
      ) : (
        <SpotList
          fileUpload={fileUpload}
          user={user}
          spots={spots}
          addSpot={addSpot}
          deleteSpot={deleteSpot}
        />
      )}
    </section>
  );
};

export default Spot;
