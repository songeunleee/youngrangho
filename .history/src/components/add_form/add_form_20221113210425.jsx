import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const AddForm = ({ repository, user }) => {
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();

  const departureRef = useRef();
  const goalRef = useRef();
  const meanRef = useRef();
  const courseRef = useRef();
  const modeRef = useRef();
  const etcRef = useRef();

  const onClick = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      appointment: Date(startDate),
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
    console.log(startDate);
    console.log(card);

    navigate({ pathname: "/activity" });
  };

  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <div className={styles.appointment}>
          <div>š</div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyyė Mģ dģ¼, aa h:mm "
            showTimeSelect
            minDate={new Date()}
            className={styles.datepiker}
          />
        </div>
        <div className={styles.icon}>
          <div>&nbsp;š&nbsp;</div>
          <select
            className={styles.iconInput}
            ref={departureRef}
            name="departure"
          >
            <option>ģ¶ė°ģ§ģ </option>
            <option>ģźµ¬</option>
            <option>ģėķø ģķź³µģ(ė°ė ¤ź²¬ ėģ“ķ°)</option>
            <option>ė¤ė¦¬</option>
            <option>ģėźµ</option>
          </select>
        </div>
        <div className={styles.icon}>
          <div>š</div>
          <select className={styles.iconInput} ref={goalRef} name="goal" id="">
            <option>ėŖ©ķģ§ģ </option>
            <option>ģģ£¼</option>
            <option>ģģ£¼ Across ķøģģźøø</option>
            <option>ģėķø ģķź³µģ(ė°ė ¤ź²¬ ėģ“ķ°)</option>
            <option>ķøģģźøø</option>
            <option>ėÆøģ </option>
          </select>
        </div>
        <select className={styles.input} ref={meanRef} name="mean" id="">
          <option>ź±·źø°</option>
          <option>ė°źø°šāāļø</option>
          <option>ģģ ź±°š“āāļø</option>
          <option>ė°ė ¤ź²¬ ģ°ģ±š¦®</option>
        </select>
        <select className={styles.input} ref={courseRef} name="course" id="">
          <option>ģ ė°©ķ„</option>
          <option>ģ­ė°©ķ„</option>
          <option>ėÆøģ </option>
        </select>
        <input
          className={styles.input}
          ref={modeRef}
          name="mode"
          placeholder="MODE (ex) ģ“ģ ģ ģ¼ė”š„)"
        />
        <input
          className={styles.input}
          ref={etcRef}
          name="etc"
          placeholder="ģ¶ź°ģ¬ķ­"
        />

        <button className={styles.button} onClick={onClick}>
          POST
        </button>
      </form>
    </section>
  );
};

export default AddForm;
