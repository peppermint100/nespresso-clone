import { combineReducers } from "redux";
import message from "./MessageReducer"
import user from "./UserReducer"

const RootReducer = combineReducers({
  message,
  user
});

export type RootReducerType = ReturnType<typeof RootReducer>;

export default RootReducer;