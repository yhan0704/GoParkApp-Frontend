import React from 'react';
import { Link } from "react-router-dom";

function formatState(states){
    let stateArray = states.split(',')
    return stateArray.filter(state => state === 'MD' || state === 'VA' || state === 'DC').join(", ")
}

const ParkCard = props =>{
    return(
        <div>
        <div className="ui card">
            <div className="image">
                <img id="parkImage" src={props.park.image_url} alt={props.park.fullName} />
            </div>
            <div className="content">
                <Link to={`/parklist/${props.park.fullName}`} className="header">{props.park.fullName}</Link>
                <div className="meta">
                State: <span className="date"> {formatState(props.park.states)}</span>
                </div>
            </div>
            <div className="extra content">
                22 like
            </div>
        </div>
        </div>
    )
}

export default ParkCard