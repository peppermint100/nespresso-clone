import { combineReducers } from "redux";
import message from "./MessageReducer"

const RootReducer = combineReducers({
  message
});

export type RootReducerType = ReturnType<typeof RootReducer>;

export default RootReducer;