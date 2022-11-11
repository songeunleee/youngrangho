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

  const onClick = () => {
    navigate({ pathname: "/activity" }, { state: selectRef.current.value });
  };

  const onChange = () => {
    console.log(selectRef.current.value);
  };

  const ExampleCustomInput = ({ value, onClick }) => (
    <button className={styles.DatePicker} onClick={onClick}>
      {value}
    </button>
  );

  return (
    <form>
      <select ref={selectRef} onChange={onChange} name="everyOronce">
        <option>한번만</option>
        <option>매주</option>
      </select>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MMMM d, yyyy h:mm aa"
        customInput={<ExampleCustomInput />}
      />
      <button onClick={onClick}>전송</button>
    </form>
  );
};

export default AddForm;
