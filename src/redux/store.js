import { createStore } from "redux";
import rootReducer from "./reducers/index";

//Store
// almacenamiento de nuestro estado
const store = createStore(rootReducer);

export default store;

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(increment());

// store.getState();
// store.dispatch();
// store.subscribe(fun());
