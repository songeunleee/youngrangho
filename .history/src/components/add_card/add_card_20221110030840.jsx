import React from "react";
import styles from "./add_card.module.css";

const AddCard = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.addCard}>
        <div className={styles.top}>📝 추가하기</div>
        <div>
          <input type="date" />
          <input type="time" />
        </div>
        <div>
          <select name="출발" id="">
            <option value="입구">입구</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default AddCard;
