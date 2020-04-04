import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions/counter";

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      {/* <h1>{props.state}</h1> */}
      <h2>{props.user.name}</h2>
      <h2>{props.counter}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterConnected;
