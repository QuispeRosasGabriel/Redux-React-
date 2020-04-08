import React from "react";
import { connect } from "react-redux";

const Controller = (props) => {
  console.log(props);
  const handler = () => {
    props.dispatch({
      type: "INCREMENT",
    });
  };
  return (
    <div>
      <button onClick={handler}>Dispatch</button>
      <h1>{props.counter}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Controller);
