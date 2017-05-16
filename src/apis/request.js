import {API_URL, API_VERSION} from '../constants/configureApi'

const BASE_URL = `${API_URL}/${API_VERSION}`
const DATA_TYPE_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const parseResponse = response => {
  return response.json()
}

const request = {
  get: (url) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    }).then(parseResponse)
  },
  post: (url, body, withAuthorization = true) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: Object.assign(DATA_TYPE_HEADERS, withAuthorization
        ? {'Authorization': `Bearer ${localStorage.token}`}
        : {}),
      body: JSON.stringify(body)
    }).then(parseResponse)
  },
  put: (url, body, withAuthorization = true) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: Object.assign(DATA_TYPE_HEADERS, withAuthorization
        ? {'Authorization': `Bearer ${localStorage.token}`}
        : {}),
      body: JSON.stringify(body)
    }).then(parseResponse)
  },
  delete: (url) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    }).then(parseResponse)
  }
}

export default request
