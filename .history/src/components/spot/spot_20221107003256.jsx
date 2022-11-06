import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddSpot from "../add_spot/add_spot";
import Header from "../header/header";
import SpotList from "../spot_list/spot_list";
import styles from "./spot.module.css";

const Spot = ({ authService, user, fileUpload, repository }) => {
  const time = new Date("Sun Nov 06 2022 04:28:18 GMT+0900");

  const [spots, setSpots] = useState({});

  useEffect(() => {
    if (!user) {
      return;
    }
    const stopSynk = repository.syncSpots(user && user.uid, (spots) => {
      setSpots(spots);
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
    <section>
      <SpotList
        fileUpload={fileUpload}
        user={user}
        spots={spots}
        addSpot={addSpot}
        deleteSpot={deleteSpot}
      />
    </section>
  );
};

export default Spot;
