import { ref } from "firebase/storage";
import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./add_form.module.css";

const AddForm = (props) => {
  const navigate = useNavigate();
  const dateRef = useRef();
  const onClick = () => {
    navigate({ pathname: "/activity" }, { state: dateRef.current.value });
  };
  return (
    <form>
      <input ref={dateRef} type="date" />
      <button onClick={onClick}>전송</button>
    </form>
  );
};

export default AddForm;