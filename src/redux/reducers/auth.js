import {
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_FAIL,
    GET_LOGOUT_SUCCESS
  } from '../constants/auth'
import { REHYDRATE } from 'redux-persist/constants';
  
  const initialState = {
    isFetched: false,
    error: null,
    user: null,
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_LOGIN_REQUEST:
        return {
          ...state,
          isFetched: true
        }
  
      case GET_LOGIN_SUCCESS:
        return {
          ...state,
          isFetched: false,
          user:action.payload
        }
        case GET_LOGOUT_SUCCESS:
        return initialState
        
      case GET_LOGIN_FAIL:
        return {
          ...state,
          isFetched: false,
          error: action.payload
        }
        case REHYDRATE:
        return {
          ...state,
          ...action.payload.auth
        }
      default:
        return state
    }
  }
  