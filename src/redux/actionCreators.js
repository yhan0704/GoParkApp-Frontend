import {FETCHED_PARKS, LOADING_PARKS} from './actionType'
const URL = 'http://localhost:3000/parks'

function fetchedParks(parkssArray){
    return {type: FETCHED_PARKS, payload: parkssArray}
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

export {fetchingParks}
