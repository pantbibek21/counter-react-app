import React, { useState } from "react";
import styles from "./Container.module.css";
// import NumberDisplay from "./NumberDisplay";
import ButtonWrapper from "./ButtonWrapper";

function Container() {
  const [number, setNumber] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.number}>{number}</div>
      {/* <NumberDisplay getNumberState={numberStateHandler} /> */}
      <ButtonWrapper numberStateData={[number, setNumber]}></ButtonWrapper>
    </div>
  );
}

export default Container;
