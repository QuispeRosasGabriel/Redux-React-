import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Fruits from "./components/fruits";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Info /> */}
        {/* <Counter /> */}
        <Fruits />
      </div>
    </Provider>
  );
};

export default App;
