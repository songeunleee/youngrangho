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
  const appointmentRef = useRef();
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
    <form className={styles.container}>
      <input ref={appointmentRef} type="datetime-local" />
      <div className={styles.box}>
        <div>π</div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM d, yyyy h:mm aa"
          showTimeSelect
          minDate={new Date()}
        />
      </div>

      <select ref={departureRef} name="departure">
        <option>μκ΅¬</option>
        <option>μλνΈ μνκ³΅μ(λ°λ €κ²¬ λμ΄ν°)</option>
        <option>λ€λ¦¬</option>
        <option>μλκ΅</option>
      </select>

      <select ref={goalRef} name="goal" id="">
        <option>μμ£Ό</option>
        <option>μμ£Ό Across νΈμμκΈΈ</option>
        <option>μλνΈ μνκ³΅μ(λ°λ €κ²¬ λμ΄ν°)</option>
        <option>νΈμμκΈΈ</option>
        <option>λ―Έμ </option>
      </select>
      <select ref={meanRef} name="mean" id="">
        <option>κ±·κΈ°</option>
        <option>λ°κΈ°πββοΈ</option>
        <option>μμ κ±°π΄ββοΈ</option>
        <option>λ°λ €κ²¬ μ°μ±π¦?</option>
      </select>
      <select ref={courseRef} name="course" id="">
        <option>μ λ°©ν₯</option>
        <option>μ­λ°©ν₯</option>
        <option>λ―Έμ </option>
      </select>
      <input ref={modeRef} name="mode" placeholder="μ΄μ μ μΌλ‘π₯" />
      <input ref={etcRef} name="etc" placeholder="μΆκ°μ¬ν­" />

      <button onClick={onClick}>μ¬λ¦¬κΈ°</button>
    </form>
  );
};

export default AddForm;
