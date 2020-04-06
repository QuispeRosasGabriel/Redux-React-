import { ADD_TODO } from "../actions/todo";

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

    default:
      return state;
    // break;
  }
};

export default todo;
