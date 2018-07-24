import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  SET_POKEMONS,
  CLEAR_MESSAGE_SUCCESS,
  FILTER_POKEMONS,
  ADD_FEVORITE_SUCCESS,REMOVE_FEVORITE_SUCCESS
} from '../constants/page'
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  isFetched: false,
  error: null,
  featuredList:[],
  pokemons: [],
  displayedPokemons: [],
  success:null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        isFetched: true
      }

    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetched: false
      }

    case GET_POKEMONS_FAIL:
      return {
        ...state,
        isFetched: false,
        error: action.payload
      }

    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }

    case FILTER_POKEMONS:
      return {
        ...state,
        displayedPokemons: action.payload
      }
    case ADD_FEVORITE_SUCCESS:
      return {...state, success:'Successfully Addedd',
        featuredList: 
        [...state.featuredList, action.pokemon]
      }

     case REMOVE_FEVORITE_SUCCESS:
      let newFeaturedList = state.featuredList.filter((pokedex,index) => {
        return pokedex.id !== action.pokemon
      })
      return {...state,success:'Remove Successfully', featuredList: newFeaturedList}

      case CLEAR_MESSAGE_SUCCESS :
      return {...state,error :null,success:null }
      
    case REHYDRATE:
      return {
        ...state,
        ...action.payload.page
      }
    default:
      return state
  }
}
