import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import Swal from "sweetalert2";
const AddForm = ({ repository, user }) => {
  const [startDate, setStartDate] = useState(Date.now());

  const navigate = useNavigate();

  const departureRef = useRef();
  const goalRef = useRef();
  const meanRef = useRef();
  const courseRef = useRef();
  const modeRef = useRef();
  const etcRef = useRef();

  const onClick = (event) => {
    event.preventDefault();

    console.log((startDate - Date.now()) / 1000 / 60);
    const card = {
      id: Date.now(),
      appointment: startDate.toString(),
      departure: departureRef.current.value,
      goal: goalRef.current.value,
      mean: meanRef.current.value,
      course: courseRef.current.value,
      mode: modeRef.current.value,
      etc: etcRef.current.value,
      userUid: user.uid,
      author: user.displayName,
      joinList: [],
    };
    repository.saveAvtivity(1, card);
    console.log(card);

    navigate({ pathname: "/activity" });
  };

  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <div className={styles.appointment}>
          <div>ğ</div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyyë Mì dì¼, aa h:mm "
            showTimeSelect
            minDate={new Date()}
            className={styles.datepiker}
          />
        </div>
        <div className={styles.icon}>
          <div>&nbsp;ğ&nbsp;</div>
          <select
            className={styles.iconInput}
            ref={departureRef}
            name="departure"
          >
            <option>ì¶ë°ì§ì </option>
            <option>ìêµ¬</option>
            <option>ìëí¸ ìíê³µì(ë°ë ¤ê²¬ ëì´í°)</option>
            <option>ë¤ë¦¬</option>
            <option>ìëêµ</option>
          </select>
        </div>
        <div className={styles.icon}>
          <div>ğ</div>
          <select className={styles.iconInput} ref={goalRef} name="goal" id="">
            <option>ëª©íì§ì </option>
            <option>ìì£¼</option>
            <option>ìì£¼ Across í¸ììê¸¸</option>
            <option>ìëí¸ ìíê³µì(ë°ë ¤ê²¬ ëì´í°)</option>
            <option>í¸ììê¸¸</option>
            <option>ë¯¸ì </option>
          </select>
        </div>
        <select className={styles.input} ref={meanRef} name="mean" id="">
          <option>ê±·ê¸°</option>
          <option>ë°ê¸°ğââï¸</option>
          <option>ìì ê±°ğ´ââï¸</option>
          <option>ë°ë ¤ê²¬ ì°ì±ğ¦®</option>
        </select>
        <select className={styles.input} ref={courseRef} name="course" id="">
          <option>ì ë°©í¥</option>
          <option>ì­ë°©í¥</option>
          <option>ë¯¸ì </option>
        </select>
        <input
          className={styles.input}
          ref={modeRef}
          name="mode"
          placeholder="MODE (ex/ ì´ì ì ì¼ë¡ğ¥)"
        />
        <input
          className={styles.input}
          ref={etcRef}
          name="etc"
          placeholder="ì¶ê°ì¬í­"
        />

        <button className={styles.button} onClick={onClick}>
          POST
        </button>
      </form>
    </section>
  );
};

export default AddForm;
