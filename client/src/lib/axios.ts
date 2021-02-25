import axios from "axios"
import env from "../configs/env"

export const api = axios.create({
  baseURL: env.ENDPOINT,
  headers: { 'Content-Type': 'application/json' },
})