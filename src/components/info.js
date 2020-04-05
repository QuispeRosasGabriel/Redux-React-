import React from "react";
import { connect } from "react-redux";
import {} from "../redux/store";
import { updateName } from "../redux/actions/user";

const Info = (props) => {
  const handlerChange = (e) => {
    const name = e.target.value;
    // console.log(e.target.value);
    props.updateName(name);
  };

  return (
    <div>
      <h1>
        {props.user.name}-{props.user.pais}
      </h1>{" "}
      <h2>{props.user.edad}</h2>
      <input type="text" onChange={handlerChange} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => dispatch(updateName(name)),
  };
};

const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Info);

export default CounterConnected;
