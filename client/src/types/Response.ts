import { Capsule, CartItem, Machine } from './Item';
import { UserState } from "./User"

export type BasicResponse = {
  message: string,
  httpStatus: number,
}

export type LoginResponse = {
  message: string,
  httpStatus: number,
  token: string
  user: UserState
}

export type MeResponse = {
  httpStatus: number,
  message: string,
  userInfo: UserState
}

export type ErrorResponse = {
  response: {
    data: {
        message: string,
        timestampe: string
    }
  }
}

export type GetCapsuleResponse = BasicResponse & {
  capsules: Array<Capsule>
}

export type GetMachineResponse = BasicResponse & {
  machines: Array<Machine>
}

export type GetCartItemResponse = BasicResponse & {
  cartItems: Array<CartItem>
}