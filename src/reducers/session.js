import * as types from '../constants/actionTypes'

const initState = {
  username: localStorage.username,
  isAuthenticated: !!localStorage.token,
  errorMessage: null
}

const session = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!localStorage.token,
        username: action.user.username
      }
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: !!localStorage.token,
        errorMessage: action.errorMessage
      }
    case types.LOG_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!localStorage.token
      }
    default:
      return state
  }
}

export default session
