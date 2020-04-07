import React from "react";

const TodoMain = ({ todo, updateTodo, deleteTodo }) => (
  <li
    onClick={() => {
      updateTodo(todo);
    }}
  >
    <input
      type="checkbox"
      checked={todo.completado}
      onChange={() => {
        updateTodo(todo);
      }}
    />
    <button
      onClick={() => {
        deleteTodo(todo);
      }}
    >
      X
    </button>
    {todo.text}
  </li>
);

export default TodoMain;
