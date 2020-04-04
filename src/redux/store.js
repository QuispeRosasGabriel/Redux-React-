import { createStore } from "redux";
import rootReducer from "./../reducers";
//Action creators
export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

//Store
// almacenamiento de nuestro estado
const store = createStore(rootReducer);

export default store;

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
