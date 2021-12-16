/**
 * App
 */
import React from "react";
/* components */
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
/* hooks */
import { useApp } from "./hooks/useApp";
/* styles */
import "./App.css";

export const App = () => {
  /* hooks */
  const [state, actions] = useApp();

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      {/* Todo追加エリア */}
      <section className="common-area">
        <AddTodo
          addInputValue={state.addInputValue}
          onChangeTodo={actions.onChangeAddInputValue}
          handleAddTodo={actions.handleAddTodo}
        />
      </section>
      {/* Todoリスト一覧表示 */}
      <section className="common-area">
        {state.todoList.length > 0 && (
          <TodoList
            todoList={state.todoList}
            handleDeleteTodo={actions.handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
