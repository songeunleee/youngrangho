import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import styles from "./add_spot.module.css";

const AddSpot = ({ user, onAdd, fileUpload }) => {
  const [loading, setloading] = useState(false);
  const inputRef = useRef();

  const onChange = async (event) => {
    setloading(true);
    const uploaded = await fileUpload.upload(event.target.files[0]);
    setloading(false);
    const now = new Date();
    const spot = {
      id: Date.now(), //uuid
      fileURL: uploaded || "",
      userName: user && user.displayName,
      uploadTime: now,
      userUid: user && user.uid,
    };
    onAdd(spot);
  };
  console.log(loading);
  const onClick = () => {
    user
      ? inputRef.current.click()
      : Swal.fire({
          title: "로그인 후 이용가능 합니다",
          text: "Plese sign in",
          imageUrl: "./images/log-in.png",
          imageWidth: 200,
          imageHeight: 200,
          confirmButtonColor: " #7396bf",
          confirmButtonText: "확인",
          imageAlt: "Custom image",
        });
  };

  return (
    <div onClick={onClick} className={styles.border}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <img className={styles.img} src="./images/plus (4).png" alt="" />
    </div>
  );
};

export default AddSpot;
