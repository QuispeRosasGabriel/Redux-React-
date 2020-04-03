import { createStore } from "redux";

//Store => almacenamiento del estado
const initialState = 100;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
//Action creators
export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(increment());

// setTimeout(() => {
//   store.dispatch(decrement());
// }, 1000);

// store.getState();
// store.dispatch();
// store.subscribe(fun());

//Store
// almacenamiento de nuestro estado
const store = createStore(counter);
export default store;
