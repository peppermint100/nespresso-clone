import { UserState } from './../redux/actions/UserAction';

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