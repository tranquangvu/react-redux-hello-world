import * as types from '../constants/actionTypes'
import sessionApi from '../apis/session'

export const loginSuccess = (user) => {
  return {type: types.LOGIN_SUCCESS, user}
}

export const loginFailure = (errorMessage) => {
  return {type: types.LOGIN_FAILURE, errorMessage}
}

export const loginUser = (credentials) => {
  return (dispatch) => {
    sessionApi
      .login(credentials)
      .then(response => {
        const {success, data} = response
        if (success) {
          const {token, user} = response.data
          const {username} = user
          localStorage.setItem('token', token)
          localStorage.setItem('username', username)
          dispatch(loginSuccess(user))
        } else {
          const {errors} = data
          dispatch(loginFailure(errors[0]))
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const logOutSuccess = () => {
  return {type: types.LOG_OUT_SUCCESS}
}

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    dispatch(logOutSuccess())
  }
}
