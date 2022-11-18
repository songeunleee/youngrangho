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
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy년 M월 d일, aa h:mm "
          showTimeSelect
          minDate={new Date()}
          className={styles.datepiker}
        />

        <select className={styles.input} ref={departureRef} name="departure">
          <option>📍 출발지점</option>
          <option>입구</option>
          <option>영랑호 생태공원(반려견 놀이터)</option>
          <option>다리</option>
          <option>영랑교</option>
        </select>

        <select className={styles.input} ref={goalRef} name="goal" id="">
          <option>🏁 목표지점</option>
          <option>완주</option>
          <option>완주 Across 호수윗길</option>
          <option>영랑호 생태공원(반려견 놀이터)</option>
          <option>호수윗길</option>
          <option>미정</option>
        </select>
        <select className={styles.input} ref={meanRef} name="mean" id="">
          <option>걷기</option>
          <option>뛰기🏃‍♀️</option>
          <option>자전거🚴‍♀️</option>
          <option>반려견 산책🦮</option>
        </select>
        <select className={styles.input} ref={courseRef} name="course" id="">
          <option>정방향</option>
          <option>역방향</option>
          <option>미정</option>
        </select>
        <input
          className={styles.input}
          ref={modeRef}
          name="mode"
          placeholder="ex) 열정적으로🔥"
        />
        <input
          className={styles.input}
          ref={etcRef}
          name="etc"
          placeholder="추가사항"
        />

        <button onClick={onClick}>올리기</button>
      </form>
    </section>
  );
};

export default AddForm;
