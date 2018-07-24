import {
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGOUT_SUCCESS
} from '../constants/auth'
function setUser(data) {
  return {
    type: GET_LOGIN_SUCCESS,
    payload: data
  }
}
export function loginUser(data) {
  return dispatch => {
    dispatch({
      type: GET_LOGIN_REQUEST
    })
    return new Promise((resolve, reject) => {
      if (data) {
        dispatch(setUser(data))
        resolve(data)
      }

    })
  }
}

export function logOutUser() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: GET_LOGOUT_SUCCESS
      })
      resolve('success')
    })
  }
  
}