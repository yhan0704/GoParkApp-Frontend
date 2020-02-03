import {combineReducers} from 'redux'
import {FETCHED_PARKS, LOADING_PARKS, FETCHED_IMAGES,CHANGING_SEARCH_TEXT, FILTER_STATE} from './actionType'

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
    filter: filterStateReducer
  })

export default rootReducer