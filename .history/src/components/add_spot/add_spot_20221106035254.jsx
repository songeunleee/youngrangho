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
          title: "로그인 후 이용가능 합니다",
          text: "Plese sign in",
          imageUrl: "./images/main3.jpg",
          backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
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
