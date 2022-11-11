import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";
import DatePicker from "react-datepicker";
import { useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { set } from "firebase/database";
const AddForm = (props) => {
  const navigate = useNavigate();
  const selectRef = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const onClick = () => {
    navigate({ pathname: "/activity" }, { state: Date(startDate).toString() });
  };

  const onChange = () => {
    selectRef.current.value === "직접입력"
      ? setShowDate(true)
      : setShowDate(false);
  };
  console.log(showDate);
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MMMM d, yyyy h:mm aa"
        wrapperClassName="datePicker"
        className={styles.DatePicker}
      />

      <select ref={selectRef} onChange={onChange} name="departure">
        <option>입구</option>
        <option>영랑호 생태공원(반려견 놀이터)</option>
        <option>다리</option>
        <option>영랑교</option>
        <option>직접입력</option>
      </select>
      <select name="goal" id="">
        <option>완주</option>
        <option>완주 Across 호수윗길</option>
        <option>영랑호 생태공원(반려견 놀이터)</option>
        <option>카페</option>
        <option>직접입력</option>
      </select>
      <select name="mean" id="">
        <option>뛰기🏃‍♀️</option>
        <option>걷기</option>
        <option>자전거🚴‍♀️</option>
        <option>반려견 산책🦮</option>
      </select>
      <select name="course" id="">
        <option>정방향</option>
        <option>역방향</option>
        <option>상관없음</option>
      </select>

      <button onClick={onClick}>올리기</button>
    </div>
  );
};

export default AddForm;
