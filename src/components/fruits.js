import React from "react";
import { connect } from "react-redux";
import {} from "../redux/store";
import { addFruit } from "../redux/actions/fruits";

const Fruits = ({ fruits, addFruit }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const nuevaFruta = e.target[0].value;
    addFruit(nuevaFruta);
  };

  return (
    <div>
      <h1>Fruits</h1>
      <form onSubmit={handlerSubmit}>
        <input type="text" placeholder="Agrega tu fruta" />
        <button type="submit">asd</button>
      </form>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={fruit + index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fruits: state.fruits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFruit: (fruit) => dispatch(addFruit(fruit)),
  };
};

const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Fruits);

export default CounterConnected;
