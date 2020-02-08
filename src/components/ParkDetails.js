import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import mapboxgl from 'mapbox-gl';

const API_KEY = process.env.REACT_APP_MAP_API_KEY
mapboxgl.accessToken = API_KEY;
// import {withRouter} from 'react-router-dom'

function randomPic(images){
    // console.log(images)
    // debugger
    let randomNum = Math.floor(Math.random() * 10) + 1
    return images.find(image => image.id === randomNum).image_url
}

class ParkDetails extends Component {
    state={
        lat:this.props.parks.latLong.split(" ")[0].slice(4,-1),
        lng:this.props.parks.latLong.split(" ")[1].slice(5),
        zoom:12
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
        map.on( () => {
            this.setState({
            lng: map.getCenter().lng.toFixed(4),
            lat: map.getCenter().lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
            });
        });
    }



    render() {
        // debugger
        return !this.props.parks ? null : (
            <div>
        <div className="parkDetailContainer">
            <div className="detailParkName">
            {this.props.parks.fullName}
            </div>
            <br/>
            <div className="media">
            <img id="parkDetailImage" src={randomPic(this.props.images)} alt={this.props.parks.fullName} />
                    <div className="media-body">
                        <div className="pTagBackground">
                        <h5 className="mt-0">Description of the Park</h5>
                        <p>{this.props.parks.description}</p>
                    </div>
                </div>
            </div>
            
            {/* {this.props.parks.latLong} */}
            {/* Event modal */}
            <div className="eventContainer">
                
                <button id="eventButton" style={{margin:"2%", padding:"1%"}} type="button" className="btn btn-primary bg-success btn-lg" data-toggle="modal" data-target="#exampleModal3">
                { this.props.parks.events.length !== 0 ? "Show Event" : "No Upcoming Events" }
                </button> 
            </div>

                <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModal3Label" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModal3Label">This Month of Event</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    {this.props.parks.events.length === 0 ? <p>Sorry, but there are no events for this month.</p> : this.props.parks.events.map(event =>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th>Contact Name</th>
                            <th>Contact E-mail</th>
                            <th>Date</th>
                            <th>Time Start</th>
                            <th>Times End</th>
                            <th>Fee</th>
                            </tr>
                        </thead>    
                        <tbody>
                        <tr>
                          <td>{event.contactname}</td>
                          <td>{event.contactemailaddress}</td>
                          <td>{event.date}</td>
                          <td>{event.timestart}</td>
                          <td>{event.timesend}</td>
                          <td>{event.free ? "Free" : "Not Free"}</td>
                        </tr>
                        </tbody>
                    </table>
                    )}
                    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>

            {/* weather Info */}
            <div className="media">
                <div className="media-body" id="cardDetailSecondPandh5tag">
                    <div className="pTagBackground">
                        <h5 className="mt-0 mb-1">Weather Information</h5>
                        <p>{this.props.parks.weatherInfo}</p>
                    </div>
                </div>
                <img className="d-flex ml-3" id="seconImgDetail"src={randomPic(this.props.images)} alt={this.props.parks.fullName} />
            </div>
           
            
            <div className="directionText"> Location on Map  <a target="blank" href={`https://www.google.com/maps/place/${this.props.parks.fullName.replace(' ', '+')}`} >Direction</a> </div>
        </div>
            <div ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
        );
    }
}

const mapStateToProps = (store, ownProps) => ({
    parks: store.parks.find(
        park => {return park.fullName === ownProps.match.params.fullName}
    ),
    images: store.images
})

export default connect(mapStateToProps)(ParkDetails);
