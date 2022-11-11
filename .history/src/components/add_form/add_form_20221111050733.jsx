import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";
import DatePicker from "react-datepicker";
import { useEffect } from "react";
import "./DatePicker.css";

import "react-datepicker/dist/react-datepicker.css";
import { set } from "firebase/database";

const AddForm = ({ repository }) => {
  const navigate = useNavigate();
  const selectRef = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const [showInput, setShowInput] = useState(false);

  const onSubmit = () => {
    const card = {
      id: Date.now(),
      departure: selectRef.current.value,
    };

    repository.saveSpots(1, card);
    navigate({ pathname: "/activity" });
  };

  console.log(showInput);
  return (
    <form className={styles.container}>
      <div className={styles.box}>
        <input type="datetime-local" />
      </div>

      <select ref={selectRef} name="departure">
        <option>입구</option>
        <option>영랑호 생태공원(반려견 놀이터)</option>
        <option>다리</option>
        <option>영랑교</option>
      </select>

      <select name="goal" id="">
        <option>완주</option>
        <option>완주 Across 호수윗길</option>
        <option>영랑호 생태공원(반려견 놀이터)</option>
        <option>호수윗길</option>
        <option>미정</option>
      </select>
      <select name="mean" id="">
        <option>걷기</option>
        <option>뛰기🏃‍♀️</option>
        <option>자전거🚴‍♀️</option>
        <option>반려견 산책🦮</option>
      </select>
      <select name="course" id="">
        <option>정방향</option>
        <option>역방향</option>
        <option>상관없음</option>
      </select>
      <input name="mode" placeholder="열정적으로🔥" />
      <input name="etc" placeholder="추가사항" />

      <button onClick={onSubmit}>올리기</button>
    </form>
  );
};

export default AddForm;
