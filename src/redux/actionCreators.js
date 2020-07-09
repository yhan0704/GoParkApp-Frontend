import {CALENDAR, ADD_COMMENTS, FAVORITE, PARK_NAME,FETCHED_PARKS, LOADING_PARKS, FETCHED_IMAGES, CHANGING_SEARCH_TEXT, FILTER_STATE, SIGN_OUT, LOGGED_IN} from './actionType'
const URL = 'https://parkback.herokuapp.com/parks'
const IMAGE_URL = 'https://parkback.herokuapp.com/park_images'

function fetchedParks(parkssArray){
  return {type: FETCHED_PARKS, payload: parkssArray}
}

function filterState(filterState){
  return {type: FILTER_STATE, payload: filterState}
}

function filterCalendar(filterCalendar){
  return {type: CALENDAR, payload: filterCalendar}
}

function addComment(comments){
  return {type: ADD_COMMENTS, payload: comments}
}

function favorite(favoriteObj){
  // debugger
  return {type: FAVORITE, payload: favoriteObj}
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

export {filterCalendar, addComment, favorite, parkName, fetchingParks, fetchingImages, onSearch, filterState, loggedIn, signOut}
