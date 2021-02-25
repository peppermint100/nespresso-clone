type Severity = "success" | "error" | "warning" | "info" | undefined

export type MessageState = {
  open: boolean,
  severity: Severity,
  message: string 
}

interface ShowMessageAction {
  type: typeof SHOW_MESSAGE,
  message: string,
  severity: Severity,
}

interface HideMessageAction {
  type: typeof HIDE_MESSAGE,
}

export const SHOW_MESSAGE = "SHOW_MESSAGE"
export const HIDE_MESSAGE = "HIDE_MESSAGE"

export const showMessage = (message: string, severity: Severity): MessageActionTypes => {
  return {
    type: SHOW_MESSAGE,
    message,
    severity,
  }
}

export const hideMessage = (): MessageActionTypes => {
  return {
    type: HIDE_MESSAGE,
  }
}

export type MessageActionTypes = ShowMessageAction | HideMessageAction