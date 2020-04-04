import React from "react";
import { connect } from "react-redux";
import {} from "../redux/store";

const Info = (props) => {
  return (
    <div>
      <h1>
        {props.user.name}-{props.counter}
      </h1>{" "}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Info);

export default CounterConnected;
