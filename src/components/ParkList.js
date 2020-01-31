import React from "react";
import {connect} from 'react-redux'
import ParkCard from "./ParkCard"


function removeDuplicadtePark(array){
    // debugger
    return array.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.fullName === thing.fullName
    ))
  )
}
const ParkList = props => {
    // console.log(props.parks)
    return(
        <div className ="backgroundImg">
            <form className="searchContainer">
                <i className="fas fa-search" aria-hidden="true"></i>
                <input id="searchbar" type="text" placeholder="Search"
                    aria-label="Search" />
            </form>
            <form className="radioContainer">
                <select>
                  <option value="dc">Washington D.C</option>
                  <option value="md">Maryland</option>
                  <option value="va">Virginia</option>
                </select>
                <input type="radio" name="gender" value="male"/> <strong className="radioText">By Alphabetically</strong>
                <input type="radio" name="gender" value="female"/> <strong className="radioText">By Likes</strong>
            </form>
            <div className="cardContainer">
                {removeDuplicadtePark(props.parks).map(park => <ParkCard 
                key={park.id}
                park={park}
                />)}
            </div>
        </div>
    )
}

const mapStateToProps = (store) => ({
    parks: store.parks,
    loading: store.loading
  })

export default connect(mapStateToProps)(ParkList);