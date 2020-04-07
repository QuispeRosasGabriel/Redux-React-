import React from "react";
import { connect } from "react-redux";
import {} from "../../redux/store";
import { addTodo, updateTodo, deleteTodo } from "../../redux/actions/todo";
import { getId } from "../utils/utils";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
// import { updateName } from "../redux/actions/user";

const Todo = ({ todo, addTodo, updateTodo, deleteTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    addTodo({
      text,
      id: getId(),
      completado: false,
    });

    e.target[0].value = "";
  };

  return (
    <div>
      <h1>Tareas</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={todo.todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  };
};

const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default CounterConnected;
