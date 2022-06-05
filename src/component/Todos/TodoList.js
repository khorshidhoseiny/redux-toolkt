import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAsyncTodos } from "../features/Todos/TodosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
