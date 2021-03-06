import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../actions/todo";

const initialState = {
  todos: [
    { text: "Crear Component", id: "asda32", completado: false },
    { text: "Aprender Redux", id: "afdf52", completado: true },
    { text: "Aprender Sockets", id: "ash4y2", completado: true },
    { text: "Aprender Vuejs", id: "gfeh56", completado: true },
    { text: "Dominar Java", id: "kfkg26", completado: false },
  ],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    //     break;
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              completado: !todo.completado,
            };
          }
          return todo;
        }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    default:
      return state;
    // break;
  }
};

export default todo;
