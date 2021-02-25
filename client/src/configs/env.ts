import dotenv from "dotenv"

dotenv.config()

export default {
  ENDPOINT: process.env.REACT_APP_ENDPOINT,
  CLIENT: process.env.REACT_APP_CLIENT
}