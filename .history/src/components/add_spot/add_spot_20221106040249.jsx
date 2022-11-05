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
          imageUrl: "./images/log-in.png",
          imageWidth: 200,
          imageHeight: 200,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "확인",
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
