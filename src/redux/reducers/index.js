import { combineReducers } from "redux";
import counter from "./counter";
import user from "./user";
import fruits from "./fruits";
import todo from "./todo";

export default combineReducers({
  counter,
  user,
  fruits,
  todo,
});
