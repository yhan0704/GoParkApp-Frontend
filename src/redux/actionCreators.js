import {PARK_NAME,FETCHED_PARKS, LOADING_PARKS, FETCHED_IMAGES, CHANGING_SEARCH_TEXT, FILTER_STATE, SIGN_OUT, LOGGED_IN} from './actionType'
const URL = 'http://localhost:3000/parks'
const IMAGE_URL = 'http://localhost:3000/park_images'

function fetchedParks(parkssArray){
  return {type: FETCHED_PARKS, payload: parkssArray}
}

function filterState(filterState){
  return {type: FILTER_STATE, payload: filterState}
}

function loggedIn(userObj){
  return {type: LOGGED_IN, payload: userObj}
}

function signOut(){
  // debugger
  return {type: SIGN_OUT, payload:null}
}

function parkName(parkName){
  return {type: PARK_NAME, payload:parkName}
}

// function fetchedUser(userArray){
//   return {type: FETCHED_USERS, payload: userArray}
// }


function onSearch(searchText){
  return {type: CHANGING_SEARCH_TEXT, payload: searchText}
}


function fetchedImages(imagesArray){
  return {type: FETCHED_IMAGES, payload: imagesArray}
}
  
function loadingParks(){
return {type: LOADING_PARKS}
}

function fetchingParks(){
  return (dispatch) => {
    dispatch(loadingParks())
    fetch(URL)
    .then(res => res.json())
    .then(parksArray => {
      dispatch(fetchedParks(parksArray))
    })
  }
}

function fetchingImages(){
  return (dispatch) => {
    fetch(IMAGE_URL)
    .then(res => res.json())
    .then(imageArray => {
      dispatch(fetchedImages(imageArray))
    })
  }
}

// function fetchingUsers(){
//   return (dispatch) => {
//     fetch(USERS_URL)
//     .then(res => res.json())
//     .then(userArray => {
//       dispatch(fetchedUser(userArray))
//     })
//   }
// }

export {parkName, fetchingParks, fetchingImages, onSearch, filterState, loggedIn, signOut}
