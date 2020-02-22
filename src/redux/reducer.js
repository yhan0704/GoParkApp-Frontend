import {combineReducers} from 'redux'
import {CALENDAR, ADD_COMMENTS, FAVORITE, PARK_NAME, FETCHED_PARKS, LOADING_PARKS, FETCHED_IMAGES,CHANGING_SEARCH_TEXT, FILTER_STATE, SIGN_OUT, LOGGED_IN} from './actionType'

const loadingReducer = (oldState=false, action) => {
  switch (action.type) {
    case LOADING_PARKS:
      return true
    case FETCHED_PARKS:
      return false
    case FETCHED_IMAGES:
      return false
    default:
      return oldState
  }
}

const parkNameReducer = (oldState="", action) => {
  switch (action.type) {
    case PARK_NAME:
      return action.payload
    default:
      return oldState
  }
}

const loggedInUserReducer = (oldState=null, action) => {
  // debugger
  switch(action.type){
    case LOGGED_IN:
      return action.payload
    case SIGN_OUT:
        // localStorage.clear(action.payload)
      return action.payload
    case FAVORITE:
      const add_favorite = {
        ...oldState, favorites:[
          ...oldState.favorites, action.payload
        ]
      }
      return add_favorite
    
  case CALENDAR:
    // debugger
    const newCalendarState = {...oldState}
    newCalendarState.favorites = oldState.favorites.map(favorite => {
      if(favorite.id === action.payload.id){
          return {
            ...favorite,
            date : action.payload.date,
          }
        }else{
          return favorite
        }
      })
  return newCalendarState

  case ADD_COMMENTS:
    // debugger
    const newState = {...oldState}
    newState.favorites = oldState.favorites.map(favorite => {
      if(favorite.id === action.payload.id){
          return {
            ...favorite,
            comment : action.payload.comment,
          }
        }else{
          return favorite
        }
      })
      return newState
  default:
    return oldState
  }
}

const searchTextReducer = (oldState="", action) => {
  switch(action.type){
    case CHANGING_SEARCH_TEXT:
      return action.payload
    default:
      return oldState
  }
}

const filterStateReducer = (oldState="dc", action) => {
  switch(action.type){
    case FILTER_STATE:
      return action.payload
    default:
      return oldState
  }
}

const parksReducer = (oldState=[], action) => {
  switch(action.type){
    case FETCHED_PARKS:
      return action.payload
    default:
      return oldState
  }
}

const imageReducer = (oldState=[], action) => {
  switch(action.type){
    case FETCHED_IMAGES:
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
    parks: parksReducer,
    loading: loadingReducer,
    images: imageReducer,
    search: searchTextReducer,
    filter: filterStateReducer,
    loggedInUser: loggedInUserReducer,
    parkName: parkNameReducer,
  })

export default rootReducer