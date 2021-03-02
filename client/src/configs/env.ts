import dotenv from "dotenv"

dotenv.config()

const env =  {
  ENDPOINT: process.env.REACT_APP_ENDPOINT,
  CLIENT: process.env.REACT_APP_CLIENT
}

export default env