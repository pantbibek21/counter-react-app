import React from "react";
import styles from "./ButtonWrapper.module.css";
import Button from "./Button";
const ButtonWrapper = () => {
  return (
    <div className={styles.buttonWrapper}>
      <Button btnName="increase" />
      <Button btnName="decrease" />
      <Button btnName="reset" />
    </div>
  );
};

export default ButtonWrapper;
