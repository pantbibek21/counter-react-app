import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const [currentNumber, setCurrentNumber] = props.stateData;
  const handleClick = (event) => {
    if (event.target.value === "increase") {
      setCurrentNumber(currentNumber + 1);
    }
    if (event.target.value === "decrease") {
      setCurrentNumber(currentNumber - 1);
    }
    if (event.target.value === "reset") {
      setCurrentNumber(0);
    }
  };
  return (
    <button
      className={`${styles.button} ${styles[props.btnName]}`}
      onClick={handleClick}
      value={props.btnName}
    >
      {props.btnName}
    </button>
  );
};

export default Button;
