import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import styles from "./add_spot.module.css";

const AddSpot = ({ user, onAdd, fileUpload }) => {
  const [userName, setUserName] = useState(null);
  const [userUid, setUserUid] = useState(null);

  const inputRef = useRef();
  const onChange = async (event) => {
    const uploaded = await fileUpload.upload(event.target.files[0]);
    onFileUpload({
      url: uploaded,
    });
  };

  const onClick = () => {
    const now = new Date();
    const spot = {
      id: Date.now(), //uuid
      fileURL: "./images/main5.jpg",
      userName: user && user.displayName,
      uploadTime: now,
      userUid: user && user.uid,
    };
    user
      ? onAdd(spot)
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
