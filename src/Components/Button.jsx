import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const buttonClass = props.btnName;
  return (
    <button className={`${styles.button} ${styles[props.btnName]}`}>
      {props.btnName}
    </button>
  );
};

export default Button;
