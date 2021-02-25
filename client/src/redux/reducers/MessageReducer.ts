import { HIDE_MESSAGE, MessageState, SHOW_MESSAGE } from './../actions/MessageAction';
import { MessageActionTypes } from "../actions/MessageAction";

const initialState: MessageState = {
  open: false,
  message: "",
  severity: undefined 
}

function messageReducer(state = initialState, action: MessageActionTypes): MessageState{
  switch(action.type){
    case SHOW_MESSAGE:
      return {
        open: true,
        message: action.message,
        severity: action.severity
      }
    case HIDE_MESSAGE:
      return {
        open: false,
        message: "",
        severity: undefined 
      }
    default:
      return state
  }
}

export default messageReducer