import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";
import DatePicker from "react-datepicker";
import { useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { set } from "firebase/database";
const AddForm = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);

  const ExampleCustomInput = ({ value, onClick }) => (
    <button className={styles.DatePicker} onClick={onClick}>
      {value}
    </button>
  );

  return (
    <form>
      <select name="everyOronce">
        <option value="">한번만</option>
        <option value="">매주</option>
      </select>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MMMM d, yyyy h:mm aa"
        customInput={<ExampleCustomInput />}
      />
    </form>
  );
};

export default AddForm;
