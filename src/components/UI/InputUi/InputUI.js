import React,{forwardRef} from "react";
import styles from "./InputUI.module.css";

const InputUI = forwardRef((props,ref) =>{
  const classes = `${styles.inputStyles} ${props.className}`;

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={classes}
      required={props.isRequired}
      onChange={props.onChange}
      onBlur={props.onBlur}
      ref={ref}
    />
  );
})

export default InputUI;
