import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Controller from "./components/controller";
// import Fruits from "./components/fruits";
// import Todo from "./components/tareas/todo";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Info /> */}
        {/* <Counter /> */}
        {/* <Fruits /> */}
        {/* <Todo /> */}
        <Controller />
      </div>
    </Provider>
  );
};

export default App;
