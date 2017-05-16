import request from './request'

const session = {
  login: (credentials) => {
    return request.post('/users/sign_in', credentials, false)
  }
}

export default session
