/**
 * InputForm
 *
 * @package components
 */
import React from "react";
/* styles */
import styles from "./style.module.css";

/**
 * InputForm
 * @param {*} props
 * @returns
 */
export const InputForm = (props) => {
  /* props */
  const { inputValue, placeholder, handleChangeValue, handleKeyDown } = props;

  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChangeValue}
      onKeyDown={handleKeyDown}
    />
  );
};
