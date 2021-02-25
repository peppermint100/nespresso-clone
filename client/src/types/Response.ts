export type BasicResponse = {
  message: string,
  httpStatus: number,
}

export type LoginResponse = {
  message: string,
  httpStatus: number,
  token: string
}

export type ErrorResponse = {
  response: {
    data: {
        message: string,
        timestampe: string
    }
  }
}