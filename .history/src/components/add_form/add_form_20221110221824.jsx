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
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  () => {
    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 16)
    );
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        injectTimes={[
          setHours(setMinutes(new Date(), 1), 0),
          setHours(setMinutes(new Date(), 5), 12),
          setHours(setMinutes(new Date(), 59), 23),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    );
  };
};

export default AddForm;
