import { ADD_FRUIT } from "../actions/fruits";

const initialState = ["manzana", "fresa"];

const fruits = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRUIT:
      return [...state, action.payload.fruit];
    // state.concat(action.payload.fruit);
    // break;

    default:
      return state;
    //   break;
  }
};

export default fruits;
