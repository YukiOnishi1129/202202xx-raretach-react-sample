/**
 * AddTodo
 *
 * @package components
 */
import React from "react";
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
      <input
        className={styles.input}
        type="text"
        placeholder="New Todo"
        value={addInputValue}
        onChange={onChangeTodo}
        onKeyDown={handleAddTodo}
      />
    </>
  );
};
