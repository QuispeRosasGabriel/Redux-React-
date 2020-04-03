import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/counter";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
      ;
    </Provider>
  );
};

export default App;
