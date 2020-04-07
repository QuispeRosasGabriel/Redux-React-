import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { ADD_TODO } from "./actions/todo";

//middleware
const logger = (state) => (next) => (action) => {
  console.log("Ha ocurrido una nueva accion", action);

  //   setTimeout(() => {
  //     next(action);
  //   }, 1000);

  //   if (action.type !== ADD_TODO) {
  //     setTimeout(() => {
  //       store.dispatch({
  //         type: ADD_TODO,
  //         payload: {
  //           text: "Holaaa",
  //           id: "35452425",
  //           completado: true,
  //         },
  //       });
  //     }, 1000);
  //   }
};

//Store
// almacenamiento de nuestro estado
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(increment());

// store.getState();
// store.dispatch();
// store.subscribe(fun());
