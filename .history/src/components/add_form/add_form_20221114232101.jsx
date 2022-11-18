import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import Swal from "sweetalert2";
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

    if (
      departureRef.current.value === "출발지점" ||
      goalRef.current.value === "목표지점"
    ) {
      Swal.fire({
        title: "출발지점과 목표지점을 선택하세여ㅛ",
        text: "Plese sign in",
        confirmButtonColor: " #7396bf",
        confirmButtonText: "확인",
        imageAlt: "Custom image",
      });
    } else {
      const card = {
        id: Date.now(),
        appointment: startDate.getTime(),
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

      navigate({ pathname: "/activity" }, { state: startDate });
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <div className={styles.appointment}>
          <div>📅</div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy년 M월 d일, aa h:mm "
            showTimeInput
            minDate={new Date()}
            className={styles.datepiker}
          />
        </div>
        <div className={styles.icon}>
          <div>&nbsp;📍&nbsp;</div>
          <select
            className={styles.iconInput}
            ref={departureRef}
            name="departure"
          >
            <option>출발지점</option>
            <option>입구</option>
            <option>영랑호 생태공원(반려견 놀이터)</option>
            <option>다리</option>
            <option>영랑교</option>
          </select>
        </div>
        <div className={styles.icon}>
          <div>🏁</div>
          <select className={styles.iconInput} ref={goalRef} name="goal" id="">
            <option>목표지점</option>
            <option>완주</option>
            <option>완주 Across 호수윗길</option>
            <option>영랑호 생태공원(반려견 놀이터)</option>
            <option>호수윗길</option>
            <option>미정</option>
          </select>
        </div>
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
          placeholder="MODE (ex/ 열정적으로🔥)"
        />
        <input
          className={styles.input}
          ref={etcRef}
          name="etc"
          placeholder="추가사항"
        />

        <button className={styles.button} onClick={onClick}>
          POST
        </button>
      </form>
    </section>
  );
};

export default AddForm;
