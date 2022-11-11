import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";

const AddForm = ({ repository, user }) => {
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
      appointment: appointmentRef.current.value,
      departure: departureRef.current.value,
      goal: goalRef.current.value,
      mean: meanRef.current.value,
      course: courseRef.current.value,
      mode: modeRef.current.value,
      etc: etcRef.current.value,
      userUid: user.uid,
      author: user.displayName,
      joinList: [""],
    };
    repository.saveAvtivity(1, card);

    navigate({ pathname: "/activity" });
  };

  return (
    <form className={styles.container}>
      <input ref={appointmentRef} type="datetime-local" />

      <select ref={departureRef} name="departure">
        <option>입구</option>
        <option>영랑호 생태공원(반려견 놀이터)</option>
        <option>다리</option>
        <option>영랑교</option>
      </select>

      <select ref={goalRef} name="goal" id="">
        <option>완주</option>
        <option>완주 Across 호수윗길</option>
        <option>영랑호 생태공원(반려견 놀이터)</option>
        <option>호수윗길</option>
        <option>미정</option>
      </select>
      <select ref={meanRef} name="mean" id="">
        <option>걷기</option>
        <option>뛰기🏃‍♀️</option>
        <option>자전거🚴‍♀️</option>
        <option>반려견 산책🦮</option>
      </select>
      <select ref={courseRef} name="course" id="">
        <option>정방향</option>
        <option>역방향</option>
        <option>미정</option>
      </select>
      <input ref={modeRef} name="mode" placeholder="열정적으로🔥" />
      <input ref={etcRef} name="etc" placeholder="추가사항" />

      <button onClick={onClick}>올리기</button>
    </form>
  );
};

export default AddForm;
