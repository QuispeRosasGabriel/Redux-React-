import { UPDATE_NAME } from "../actions/user";

const initialState = {
  name: "Gerardo",
  pais: "Peru",
  edad: 20,
  casado: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default user;
