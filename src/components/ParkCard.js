import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {conncect} from "react-redux";

function formatState(states){
    let stateArray = states.split(',')
    return stateArray.filter(state => state === 'MD' || state === 'VA' || state === 'DC').join(", ")
}

class ParkCard extends Component{
    
    state={
        visit : false
    }

    visitToggle = () =>{
        this.setState({
            visit : true
        })
    }

    render() {
        return (
            <div>
            <div className="ui card">
                <div className="image">
                    { this.props.park.fullName === "Assateague Island National Seashore" ? <img id="parkImage" 
                        src="https://www.nps.gov/common/uploads/structured_data/3C809F06-1DD8-B71B-0B39C9B927D2C688.jpg" alt={this.props.park.fullName} /> : 
                        <img id="parkImage" src={this.props.park.image_url} alt={this.props.park.fullName} /> }
                    
                </div>
                <div className="content">
                    <Link to={`/parklist/${this.props.park.fullName}`} className="header">{this.props.park.fullName}</Link>
                    <div className="meta">
                    State: <span className="date"> {formatState(this.props.park.states)}</span>
                    </div>
                </div>
                <div className="extra content">
                <button type="button" style={{padding:"5px 20px"}} onClick={this.visitToggle} className="btn btn-secondary">Visit</button>
                </div>
            </div>
            </div>
        );
    }
}


// const mapDispatchToProps = dispath => {
//     return {
//         loggedIn: (user) => {
//             dispath(loggedIn(user))
//         }
//     }
// }

export default (ParkCard)