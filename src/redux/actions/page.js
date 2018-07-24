import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  SET_POKEMONS,
  FILTER_POKEMONS,
  ADD_FEVORITE_SUCCESS,REMOVE_FEVORITE_SUCCESS,
  GET_FEVORITE_LIST_SUCCESS,
  CLEAR_MESSAGE_SUCCESS
} from '../constants/page'

function setPokemons(data) {
  const pokemons = data.results.map(pokemon => {
    let { url } = pokemon
    pokemon.id = url.substring(34, url.length - 1)

    return pokemon
  })

  return {
    type: SET_POKEMONS,
    payload: pokemons
  }
}

export function getPokemons(url) {
  return dispatch => {
    dispatch({
      type: GET_POKEMONS_REQUEST
    })
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`${response.status}: ${response.statusText}`)
      })
      .then(data => {
        dispatch({
          type: GET_POKEMONS_SUCCESS
        })
        dispatch(setPokemons(data))
        dispatch(filterPokemons())
        return data
      })
      .catch(error => {
        dispatch({
          type: GET_POKEMONS_FAIL,
          payload: error.message
        })
        return error

      })
  }
}

export function filterPokemons(searchString = '') {
  return (dispatch, getState) => {
    const displayedPokemons = getState().page.pokemons.filter(pokemon => {
      return pokemon.name.includes(searchString.toLowerCase())
    })

    dispatch({
      type: FILTER_POKEMONS,
      payload: displayedPokemons
    })
  }
}

// Remove Add 
function clearMessageSuccess () {
  return {
    type: CLEAR_MESSAGE_SUCCESS,
 }
}

//fevorite Action

function addToFevoriteSuccess (pokemon) {
  return {
     type: ADD_FEVORITE_SUCCESS,
     pokemon
  }
}
function removeToFevoriteSuccess (pokemon) {
   return {
     type: REMOVE_FEVORITE_SUCCESS,
     pokemon
  }
}
function getFeaturedListSuccess () {
  return {
     type: GET_FEVORITE_LIST_SUCCESS,
  }
}

export function addToFevorite(pokemon){
  return function(dispatch){
    dispatch(addToFevoriteSuccess(pokemon))
  }
}
export function removeToFevorite(pokemon){
  return function(dispatch){
    dispatch(removeToFevoriteSuccess(pokemon))
  }
}
export function getFeaturedList(){
  return function(dispatch){
    dispatch(getFeaturedListSuccess())
  }
}

export function clearMessage(){
  return function(dispatch){
    dispatch(clearMessageSuccess())
  }
}