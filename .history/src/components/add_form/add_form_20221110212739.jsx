import React from "react";
import styles from "./add_form.module.css";

const AddForm = (props) => (
  <form>
    <input type="date" />
    <button onClick={onClick}>전송</button>
  </form>
);

export default AddForm;
