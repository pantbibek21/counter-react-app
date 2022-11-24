import React from "react";
import styles from "./ButtonWrapper.module.css";
import Button from "./Button";
const ButtonWrapper = (props) => {
  return (
    <div className={styles.buttonWrapper}>
      <Button btnName="increase" stateData={props.numberStateData} />
      <Button btnName="decrease" stateData={props.numberStateData} />
      <Button btnName="reset" stateData={props.numberStateData} />
    </div>
  );
};

export default ButtonWrapper;
