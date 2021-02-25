import axios from "axios"
import env from "../configs/env"
import Cookies, { Cookie } from "universal-cookie"

export let cookie: Cookie;

if(!cookie){
  cookie = new Cookies()
}

export const api = axios.create({
  baseURL: env.ENDPOINT,
  headers: { 'Content-Type': 'application/json' },
})

export const x_api = axios.create({
  baseURL: env.ENDPOINT,
  headers: { 'Content-Type': 'application/json', 'Authorization': cookie.get('X-TOKEN') }
})