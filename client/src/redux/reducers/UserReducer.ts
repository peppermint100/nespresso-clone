import { SET_USER, UserActionTypes, UserState } from "../actions/UserAction"

const initialState: UserState = {
  isAuthenticated: false,
  userId: 0,
  firstName: "",
  lastName: "",
  email: "",
  address: ""
}

function userReducer(state = initialState, action: UserActionTypes): UserState{
  switch(action.type){
    case SET_USER:
      return {
        isAuthenticated: true,
        userId: action.userId,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        address: action.address
      }
    default:
      return state
  }
}

export default userReducer