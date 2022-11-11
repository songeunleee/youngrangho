import { ref } from "firebase/storage";
import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";
import DatePicker from "react-datepicker";

const AddForm = (props) => {
  const navigate = useNavigate();
  const [Hours, setHours] = useState(null);
  const [Minutes, setMinutes] = useState(null);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const dateRef = useRef();
  const onClick = () => {
    navigate({ pathname: "/activity" }, { state: dateRef.current.value });
  };

  return (
    <form>
      <select name="">
        <option>한번만</option>
        <option>정기적</option>
      </select>
      <input ref={dateRef} type="date" />
      <input type="time" />
    </form>
  );
};

export default AddForm;
