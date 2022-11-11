import { ref } from "firebase/storage";
import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";
import DatePicker from "react-datepicker";
import { useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
const AddForm = (props) => {
  const navigate = useNavigate();
  const [Hours, setHours] = useState(null);
  const [Minutes, setMinutes] = useState(null);

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
      <DatePicker
        selected="2022-11-11"
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </form>
  );
};

export default AddForm;
