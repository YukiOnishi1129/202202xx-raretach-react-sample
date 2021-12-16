/**
 * App
 */
import React from "react";
/* components */
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { InputForm } from "./components/Common/InputForm";
/* hooks */
import { useApp } from "./hooks/useApp";
/* styles */
import styles from "./App.module.css";

export const App = () => {
  /* hooks */
  const [states, actions] = useApp();

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={states.addInputValue}
          onChangeTodo={actions.onChangeAddInputValue}
          handleAddTodo={actions.handleAddTodo}
        />
      </section>
      {/* Todo検索フォームエリア */}
      <section className={styles.common}>
        <InputForm
          inputValue={states.searchKeyword}
          placeholder={"Search Keyword"}
          handleChangeValue={actions.handleSearchTodo}
        />
      </section>
      {/* Todoリスト一覧表示 */}
      <section className={styles.common}>
        {states.showTodoList.length > 0 && (
          <TodoList
            todoList={states.showTodoList}
            handleDeleteTodo={actions.handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
