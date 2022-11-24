import React, { useState } from "react";
import styles from "./NumberDisplay.module.css";

function NumberDisplay({ getNumberState }) {
  const [number, setNumber] = useState(0);
  const returnData = {
    currentNumber: number,
    setNumber: setNumber,
  };

  getNumberState(returnData);
  return <div className={styles.number}>{number}</div>;
}
export default NumberDisplay;
