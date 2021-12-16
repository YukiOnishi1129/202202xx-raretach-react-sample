/**
 * TodoLogic.spec
 * @package logic
 */
import { searchTodo } from "./TodoLogic";
/* data */
import { INIT_TODO_LIST } from "../constants/data";

describe("【Logicテスト】TodoLogic", () => {
  describe("【関数テスト】searchTodo", () => {
    test("【正常系】検索処理が正常に処理されること", () => {
      const addTodo = { id: 3, title: "Todo111111" };
      // 予測値
      const expectValue = [INIT_TODO_LIST[0], addTodo];
      // 引数
      const argTodoList = [...INIT_TODO_LIST, addTodo];
      const argSearchKeyword = "Todo1";
      // テスト実行
      expect(searchTodo(argTodoList, argSearchKeyword)).toEqual(expectValue);
    });
    test("【正常系】検索ワードに紐づくTodoがない場合、元の配列が返却されること", () => {
      // 予測値
      const expectValue = [];
      // 引数
      const argTodoList = INIT_TODO_LIST;
      const argSearchKeyword = "Todo3";
      // テスト実行
      expect(searchTodo(argTodoList, argSearchKeyword)).toEqual(expectValue);
    });
  });
});
