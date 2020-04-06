import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Fruits from "./components/fruits";
import Todo from "./components/tareas/todo";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Info /> */}
        {/* <Counter /> */}
        {/* <Fruits /> */}
        <Todo />
      </div>
    </Provider>
  );
};

export default App;
