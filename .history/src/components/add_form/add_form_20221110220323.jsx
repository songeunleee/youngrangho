import { ref } from "firebase/storage";
import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";
import DatePicker from "react-datepicker";

const AddForm = (props) => {
  const navigate = useNavigate();

  const dateRef = useRef();
  const onClick = () => {
    navigate({ pathname: "/activity" }, { state: dateRef.current.value });
  };
  () => {
    const [Hours,setHours] = useState()
    const [Minutes,setMinutes] = useState()
    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 16)
    );
  return (
    <form>
      <select name="">
        <option>한번만</option>
        <option>정기적</option>
      </select>
      <DatePicker
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </form>
  );
};

export default AddForm
