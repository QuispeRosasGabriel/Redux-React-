import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/store";

const Counter = props => {
  console.log(props);

  // const inc = () => {
  //   props.increment();
  // };

  // const dec = () => {
  //   props.decrement();
  // };

  return (
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <h1>{props.state}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterConnected;
