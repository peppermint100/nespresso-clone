import Cookies, { Cookie } from "universal-cookie"

export let cookie: Cookie;

if(!cookie){
  cookie = new Cookies()
}
