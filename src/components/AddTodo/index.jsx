/**
 * AddTodo
 *
 * @package components
 */
import React from "react";
/* components */
import { InputForm } from "../Common/InputForm";
/* styles */
import styles from "./style.module.css";

/**
 * AddTodo
 * @param {*} props
 * @returns
 */
export const AddTodo = (props) => {
  /* props */
  const { addInputValue, onChangeTodo, handleAddTodo } = props;

  return (
    <>
      <h2 className={styles.subTitle}>ADD TODO</h2>
      <InputForm
        inputValue={addInputValue}
        placeholder={"New Todo"}
        handleChangeValue={onChangeTodo}
        handleKeyDown={handleAddTodo}
      />
    </>
  );
};
