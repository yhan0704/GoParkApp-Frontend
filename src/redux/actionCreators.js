import {FETCHED_PARKS, LOADING_PARKS, FETCHED_IMAGES, CHANGING_SEARCH_TEXT, FILTER_STATE} from './actionType'
const URL = 'http://localhost:3000/parks'
const IMAGE_URL = 'http://localhost:3000/park_images'
const USERS = 'http://localhost:3000/users'

function fetchedParks(parkssArray){
  return {type: FETCHED_PARKS, payload: parkssArray}
}

function filterState(filterState){
  return {type: FILTER_STATE, payload: filterState}
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
    dispatch(loadingParks())
    fetch(IMAGE_URL)
    .then(res => res.json())
    .then(imageArray => {
      dispatch(fetchedImages(imageArray))
    })
  }
}

export {fetchingParks, fetchingImages, onSearch, filterState}
