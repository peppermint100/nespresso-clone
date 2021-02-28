import { UserState } from "../../types/User"

interface SetUserAction extends UserState {
  type: typeof SET_USER,
}

export const SET_USER = "SET_USER"

export const setUser = ({ userId, email, firstName, lastName, address }: UserState): UserActionTypes => {
  return {
    type: SET_USER,
    userId,
    email,
    firstName,
    lastName,
    address
  }
}

export type UserActionTypes = SetUserAction