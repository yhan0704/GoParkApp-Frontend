import {combineReducers} from 'redux'
import {FETCHED_PARKS, LOADING_PARKS} from './actionType'

const loadingReducer = (oldState=false, action) => {
    switch (action.type) {
      case LOADING_PARKS:
        return true
      case FETCHED_PARKS:
        return false
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

const rootReducer = combineReducers({
    parks: parksReducer,
    loading: loadingReducer
  })

export default rootReducer