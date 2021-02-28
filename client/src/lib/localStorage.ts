import { CURRENT_USER } from './../constants/index';
import { UserState } from "../types/User";

// set user
export const setUserLS = (user: UserState) => {
  const stringifiedUser = JSON.stringify(user)
  localStorage.setItem(CURRENT_USER, stringifiedUser)
}

// get user
export const getUserLS = () => {
  const stringifiedUser = localStorage.getItem(CURRENT_USER) 
  
  return JSON.parse(stringifiedUser!!) as UserState
}

// clear user

export const clearUserLS = () => {
  localStorage.removeItem(CURRENT_USER)
}
