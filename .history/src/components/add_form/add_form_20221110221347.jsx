import { ref } from "firebase/storage";
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
  const [Hours, setHours] = useState(null);
  const [Minutes, setMinutes] = useState(null);
  const [startDate, setStartDate] = useState();

  const dateRef = useRef();
  const onClick = () => {
    navigate({ pathname: "/activity" }, { state: dateRef.current.value });
  };

  useEffect(() => {
    setStartDate(setHours(setMinutes(new Date(), 30), 16));
  }, []);
  console.log(startDate);
  return (
    <form>
      <select name="">
        <option>한번만</option>
        <option>정기적</option>
      </select>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 30), 17),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </form>
  );
};

export default AddForm;
