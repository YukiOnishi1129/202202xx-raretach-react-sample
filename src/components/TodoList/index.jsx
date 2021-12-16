/**
 * TodoList
 *
 * @package components
 */
import React from "react";
/* styles */
import "./style.css";

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const TodoList = (props) => {
  /* props */
  const { todoList, handleDeleteTodo } = props;

  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <li key={todo.id} className="todo">
          <span className="todo-task">{todo.title}</span>
          <i
            className="far fa-trash-alt delete fa-lg"
            onClick={() => handleDeleteTodo(todo.id, todo.title)}
          ></i>
        </li>
      ))}
    </ul>
  );
};
