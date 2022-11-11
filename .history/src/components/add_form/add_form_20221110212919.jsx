import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./add_form.module.css";

const AddForm = (props) => {
    const navigate = useNavigate();
    const onClick = () =>{
        navigate({pathname:"/activity"}}
    }
  return (
    <form>
      <input type="date" />
      <button onClick={onClick}>전송</button>
    </form>
  );
};

export default AddForm;
