import React from "react";
import {connect} from 'react-redux'
import ParkCard from "./ParkCard"
import SearchBar from "./SearchBar"


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
    // debugger
    return(
        <div className ="backgroundImg">
            <SearchBar />
            <div className="cardContainer">
                {removeDuplicadtePark(props.parks).filter(park => park.latLong.length !==0).map(park => <ParkCard 
                key={park.id}
                park={park}
                />)}
            </div>
        </div>
    )
}

const mapStateToProps = (store) => ({
    parks: store.parks.filter(park => park.fullName.toLowerCase().includes(store.search.toLowerCase())).filter(park => park.states.toLowerCase().includes(store.filter.toLowerCase())),
    loading: store.loading
  })

export default connect(mapStateToProps)(ParkList);