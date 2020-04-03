import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/store";

const Counter = props => {
  console.log(props);

  return (
    <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
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
    inc: () => {
      dispatch(increment());
    },

    dec: () => {
      dispatch(decrement());
    }
  };
};

const CounterConnected = connect(mapStateToProps)(Counter);

export default CounterConnected;
