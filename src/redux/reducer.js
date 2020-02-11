import {combineReducers} from 'redux'
import {FETCHED_FAVORITE, FAVORITE, PARK_NAME, FETCHED_PARKS, LOADING_PARKS, FETCHED_IMAGES,CHANGING_SEARCH_TEXT, FILTER_STATE, SIGN_OUT, LOGGED_IN} from './actionType'

const loadingReducer = (oldState=false, action) => {
  switch (action.type) {
    case LOADING_PARKS:
      return true
    case FETCHED_PARKS:
      return false
    case FETCHED_IMAGES:
      return false
    case FETCHED_FAVORITE:
      return false
    default:
      return oldState
  }
}



// const favoriteReducer = (oldState=[], action) =>{
//   switch (action.type) {
//     case FAVORITE:  
//     // debugger
//     // console.log(oldState, action)
//       return [...oldState,  action.payload]
//     default:
//       return oldState
//   }
// }

const parkNameReducer = (oldState="", action) => {
  switch (action.type) {
    case PARK_NAME:
      return action.payload
    default:
      return oldState
  }
}

const loggedInUserReducer = (oldState=null, action) => {
  // console.log(action.payload)
  switch(action.type){
    case LOGGED_IN:
      return action.payload
    case SIGN_OUT:
      return action.payload
    case FAVORITE:
      const add_favorite = {
        ...oldState, favorites:[
          ...oldState.favorites, action.payload
        ], parks:[
          ...oldState.parks, action.payload
        ]
      }
      return add_favorite
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

// const fetchedFavoriteReducer = (oldState={}, action) => {
//   // debugger
//   switch(action.type){
//     case FETCHED_FAVORITE:
//       // debugger
//       return action.payload
//     default:
//       return oldState
//   }
// }

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
    // favorite : favoriteReducer,
    // fetchedFavorite: fetchedFavoriteReducer
  })

export default rootReducer