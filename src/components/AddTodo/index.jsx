/**
 * AddTodo
 *
 * @package components
 */
import React from "react";
/* styles */
import "./style.css";

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
      <h2 className="add-title">ADD TODO</h2>
      <input
        type="text"
        placeholder="New Todo"
        value={addInputValue}
        onChange={onChangeTodo}
        onKeyDown={handleAddTodo}
      />
    </>
  );
};
