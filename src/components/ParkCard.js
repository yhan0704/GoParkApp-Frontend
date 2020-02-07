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
                { props.park.fullName === "Assateague Island National Seashore" ? <img id="parkImage" 
                    src="https://www.nps.gov/common/uploads/structured_data/3C809F06-1DD8-B71B-0B39C9B927D2C688.jpg" alt={props.park.fullName} /> : 
                    <img id="parkImage" src={props.park.image_url} alt={props.park.fullName} /> }
                
            </div>
            <div className="content">
                <Link to={`/parklist/${props.park.fullName}`} className="header">{props.park.fullName}</Link>
                <div className="meta">
                State: <span className="date"> {formatState(props.park.states)}</span>
                </div>
            </div>
            <div className="extra content">
            <button type="button" className="btn btn-secondary">Visited</button>
            </div>
        </div>
        </div>
    )
}

export default ParkCard