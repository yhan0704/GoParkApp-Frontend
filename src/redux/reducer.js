import {combineReducers} from 'redux'
import {PARK_NAME, FETCHED_PARKS, LOADING_PARKS, FETCHED_IMAGES,CHANGING_SEARCH_TEXT, FILTER_STATE, SIGN_OUT, LOGGED_IN} from './actionType'

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
  switch(action.type){
    case LOGGED_IN:
      return action.payload
    case SIGN_OUT:
      return action.payload
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
    // user: usersReducer,
    loggedInUser: loggedInUserReducer,
    parkName: parkNameReducer
  })

export default rootReducer