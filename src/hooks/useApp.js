/**
 * useApp
 *
 * @package hooks
 */
import React from "react";
/* logic */
import { searchTodo } from "../logic/TodoLogic";
/* data */
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

/**
 * useApp
 * @returns
 */
export const useApp = () => {
  /* state */
  /* todo list */
  const [originTodoList, setOriginTodoList] = React.useState(INIT_TODO_LIST);
  /* add input title */
  const [addInputValue, setAddInputValue] = React.useState("");
  /* todo 採番ID */
  const [uniqueId, setUniqueId] = React.useState(INIT_UNIQUE_ID);
  /* 検索キーワード */
  const [searchKeyword, setSearchKeyword] = React.useState("");
  /* 表示用TodoList */
  const [showTodoList, setShowTodoList] = React.useState(INIT_TODO_LIST);

  /* actions */
  /**
   * addInputValueの変更処理
   * @param {*} e
   */
  const onChangeAddInputValue = (e) => {
    setAddInputValue(e.target.value);
  };

  /**
   * Todo新規登録処理
   * @param {*} e
   */
  const handleAddTodo = (e) => {
    //  エンターキーが押された時にTodoを追加する
    if (e.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      // Todo追加処理
      // 元の配列を破壊しないように配列のコピーを作成して、その値でstateを更新する
      // pushでの配列追加は元の配列の値を変更するのでエラーになる

      // concatの処理
      // setOriginTodoList(
      //   // concatとpushの違い
      //   // https://kskpblog.com/javascript-array-add/
      //   todoList.concat({
      //     id: nextUniqueId,
      //     title: addInputValue,
      //   })
      // );

      // スプレッド構文の処理
      const newTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setOriginTodoList(newTodoList);

      if (searchKeyword !== "") {
        setShowTodoList(searchTodo(newTodoList, searchKeyword));
      } else {
        setShowTodoList(newTodoList);
      }
      // 採番IDを更新
      setUniqueId(nextUniqueId);
      // todo追加後、入力値をリセット
      setAddInputValue("");
    }
  };

  /**
   * Todo削除処理
   * @param {*} targetId
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      // 削除するid以外のtodoリストを再編集
      // filterを用いた方法
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);

      // 削除するTodoの配列番号を取り出してspliceで削除する方法もある
      // const newTodoList = [...todoList];
      // const deleteIndex = newTodoList.findIndex((todo) => todo.id === targetId);
      // newTodoList.splice(deleteIndex, 1);

      // todoを削除したtodo listで更新
      setOriginTodoList(newTodoList);

      if (searchKeyword !== "") {
        setShowTodoList(searchTodo(newTodoList, searchKeyword));
      } else {
        setShowTodoList(newTodoList);
      }
    }
  };

  /**
   * Todo検索処理
   * @param {*} e
   */
  const handleSearchTodo = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    if (keyword !== "") {
      setShowTodoList(searchTodo(originTodoList, keyword));
    } else {
      setShowTodoList(originTodoList);
    }
  };

  return [
    {
      originTodoList,
      showTodoList,
      addInputValue,
      searchKeyword,
    },
    {
      onChangeAddInputValue,
      handleAddTodo,
      handleDeleteTodo,
      handleSearchTodo,
    },
  ];
};
