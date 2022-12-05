import React from "react";
import { useNavigate } from "react-router-dom";
import ActivityItem from "../activity_item/activity_item";
import styles from "./activity_list.module.css";

const ActivityList = ({ cards, user, addJoin, DropJoin, deleteCard }) => {
  const navigate = useNavigate();
  const clickAddCard = () => {
    user
      ? navigate("/add")
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
    <section className={styles.container}>
      <div className={styles.list}>
        <div onClick={clickAddCard} className={styles.box}>
          <div className={styles.addCard}>
            <i className={`fa-solid fa-plus ${styles.img}`}></i>
          </div>
        </div>
        {Object.keys(cards)
          .map((key) => (
            <ActivityItem
              key={key}
              card={cards[key]}
              user={user}
              addJoin={addJoin}
              DropJoin={DropJoin}
              deleteCard={deleteCard}
            />
          ))
          .reverse()}
      </div>
    </section>
  );
};

export default ActivityList;
