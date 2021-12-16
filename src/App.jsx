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
import styles from "./App.module.css";

export const App = () => {
  /* hooks */
  const [state, actions] = useApp();

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={state.addInputValue}
          onChangeTodo={actions.onChangeAddInputValue}
          handleAddTodo={actions.handleAddTodo}
        />
      </section>
      {/* Todo検索フォームエリア */}
      <section className={styles.common}>
        <input type="text" placeholder="Search Keyword" />
      </section>
      {/* Todoリスト一覧表示 */}
      <section className={styles.common}>
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
