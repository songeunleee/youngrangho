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
    navigate({ pathname: "/activity" }, { state: Date(startDate).toString() });
  };

  const onChange = () => {
    return selectRef.current.value === "한번만" ? true : false;
  };

  return (
    <div>
      <select ref={selectRef} onChange={onChange} name="everyOronce">
        <option>한번만</option>
        <option>매주</option>
      </select>
      <div>
        {onChange() ? (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
            wrapperClassName="datePicker"
            className={styles.DatePicker}
          />
        ) : (
          <input type="checkbox" />
        )}
      </div>
      <button onClick={onClick}>올리기</button>
    </div>
  );
};

export default AddForm;
