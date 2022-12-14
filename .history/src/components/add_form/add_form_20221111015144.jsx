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
  const [showInput, setShowInput] = useState(false);

  const onClick = () => {
    navigate({ pathname: "/activity" }, { state: Date(startDate).toString() });
  };

  console.log(showInput);
  return (
    <div className={styles.container}>
      <div>
        {" "}
        <p>๐</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, yyyy h:mm aa"
          wrapperClassName="datePicker"
          className={styles.DatePicker}
        />
      </div>

      <select ref={selectRef} name="departure">
        <option>์๊ตฌ</option>
        <option>์๋ํธ ์ํ๊ณต์(๋ฐ๋ ค๊ฒฌ ๋์ดํฐ)</option>
        <option>๋ค๋ฆฌ</option>
      </select>

      <select name="goal" id="">
        <option>์์ฃผ</option>
        <option>์์ฃผ Across ํธ์์๊ธธ</option>
        <option>์๋ํธ ์ํ๊ณต์(๋ฐ๋ ค๊ฒฌ ๋์ดํฐ)</option>
        <option>์นดํ</option>
      </select>
      <select name="mean" id="">
        <option>๊ฑท๊ธฐ</option>
        <option>๋ฐ๊ธฐ๐โโ๏ธ</option>
        <option>์์ ๊ฑฐ๐ดโโ๏ธ</option>
        <option>๋ฐ๋ ค๊ฒฌ ์ฐ์ฑ๐ฆฎ</option>
      </select>
      <select name="course" id="">
        <option>์ ๋ฐฉํฅ</option>
        <option>์ญ๋ฐฉํฅ</option>
        <option>์๊ด์์</option>
      </select>
      <input name="mode" placeholder="์ด์ ์ ์ผ๋ก๐ฅ" />
      <input name="etc" placeholder="์ถ๊ฐ์ฌํญ" />

      <button onClick={onClick}>์ฌ๋ฆฌ๊ธฐ</button>
    </div>
  );
};

export default AddForm;
