import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/counter";
import Info from "./components/info";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Info />
        <Counter />
      </div>
      ;
    </Provider>
  );
};

export default App;
