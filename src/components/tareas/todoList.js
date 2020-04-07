import React from "react";

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
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
    ))}
  </ul>
);

export default TodoList;
