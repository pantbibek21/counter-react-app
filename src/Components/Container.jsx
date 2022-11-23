import React from "react";
import styles from "./Container.module.css";
import NumberDisplay from "./NumberDisplay";
import ButtonWrapper from "./ButtonWrapper";

function Container() {
  return (
    <div className={styles.container}>
      <NumberDisplay />
      <ButtonWrapper></ButtonWrapper>
    </div>
  );
}

export default Container;
