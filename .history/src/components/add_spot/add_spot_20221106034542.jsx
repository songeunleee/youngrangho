import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import styles from "./add_spot.module.css";

const AddSpot = ({ user, onAdd }) => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    setUserName(user && user.displayName);
  }, [user]);

  const onClick = () => {
    const spot = {
      id: Date.now(), //uuid
      fileURL: "./images/main5.jpg",
      userName,
    };
    userName
      ? onAdd(spot)
      : Swal.fire({
          title: "Sweet!",
          text: "Modal with a custom image.",
          imageUrl: "https://unsplash.it/400/200",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
  };

  return (
    <div onClick={onClick} className={styles.border}>
      <img className={styles.img} src="./images/plus (4).png" alt="" />
    </div>
  );
};

export default AddSpot;
