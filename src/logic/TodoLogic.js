/**
 * TodoLogic
 * @package logic
 */

/**
 * 検索処理
 * @param {*} todoList
 * @param {*} keyword
 * @returns
 */
export const searchTodo = (todoList, keyword) => {
  const newTodoList = todoList.filter((todo) => {
    const regexp = new RegExp("^" + keyword, "i");
    return todo.title.match(regexp);
  });
  return newTodoList;
};
