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
          <div>π</div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyyλ Mμ dμΌ, aa h:mm "
            showTimeSelect
            minDate={new Date()}
            className={styles.datepiker}
          />
        </div>
        <div className={styles.icon}>
          <div>π</div>
          <select className={styles.input} ref={departureRef} name="departure">
            <option>π μΆλ°μ§μ </option>
            <option>μκ΅¬</option>
            <option>μλνΈ μνκ³΅μ(λ°λ €κ²¬ λμ΄ν°)</option>
            <option>λ€λ¦¬</option>
            <option>μλκ΅</option>
          </select>
        </div>
        <div className={styles.icon}>
          <div>π</div>
          <select className={styles.input} ref={goalRef} name="goal" id="">
            <option>π λͺ©νμ§μ </option>
            <option>μμ£Ό</option>
            <option>μμ£Ό Across νΈμμκΈΈ</option>
            <option>μλνΈ μνκ³΅μ(λ°λ €κ²¬ λμ΄ν°)</option>
            <option>νΈμμκΈΈ</option>
            <option>λ―Έμ </option>
          </select>
        </div>
        <select className={styles.input} ref={meanRef} name="mean" id="">
          <option>κ±·κΈ°</option>
          <option>λ°κΈ°πββοΈ</option>
          <option>μμ κ±°π΄ββοΈ</option>
          <option>λ°λ €κ²¬ μ°μ±π¦?</option>
        </select>
        <select className={styles.input} ref={courseRef} name="course" id="">
          <option>μ λ°©ν₯</option>
          <option>μ­λ°©ν₯</option>
          <option>λ―Έμ </option>
        </select>
        <input
          className={styles.input}
          ref={modeRef}
          name="mode"
          placeholder="ex) μ΄μ μ μΌλ‘π₯"
        />
        <input
          className={styles.input}
          ref={etcRef}
          name="etc"
          placeholder="μΆκ°μ¬ν­"
        />

        <button className={styles.button} onClick={onClick}>
          POST
        </button>
      </form>
    </section>
  );
};

export default AddForm;
