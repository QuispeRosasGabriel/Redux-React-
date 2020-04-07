import React from "react";
import TodoMain from "./todoMain";

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <ul>
    {todos.map((todo) => (
      <TodoMain
        key={todo.id}
        todo={todo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </ul>
);

export default TodoList;
