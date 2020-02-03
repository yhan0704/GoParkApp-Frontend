import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'

function randomPic(images){
    // console.log(images)
    // debugger
    let randomNum = Math.floor(Math.random() * images.length) + 1;
    return images.find(image => image.id === randomNum)["image_url"]
}
class ParkDetails extends Component {
    render() {
        // debugger
        return !this.props.parks ? null : (
        <div className="parkDetailContainer">
            <div className="detailParkName">
            {this.props.parks.fullName}
            </div>
            <br/>
            <div class="media">
            <img id="parkDetailImage" src={randomPic(this.props.images)} alt={this.props.parks.fullName} />
                <div class="media-body">
                    <h5 class="mt-0">Description of the Park</h5>
                    <p>{this.props.parks.description}</p>
                </div>
            </div>
            
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">Weather Information</h5>
                    <p>{this.props.parks.weatherInfo}</p>
                </div>
                <img class="d-flex ml-3" src={randomPic(this.props.images)} alt={this.props.parks.fullName} />
            </div>
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
