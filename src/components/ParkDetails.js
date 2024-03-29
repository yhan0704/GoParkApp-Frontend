import React, { useState } from "react";
import { connect } from "react-redux";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import maker from "../images/mapbox-icon.png";

let i = 1;
const ParkDetails = (props) => {
  const [viewport] = useState({
    width: "100%",
    height: 400,
    latitude: parseFloat(props.parks.latLong.split(" ")[0].slice(4, -1)),
    longitude: parseFloat(props.parks.latLong.split(" ")[1].slice(5)),
    zoom: 12,
  });

  return !props.parks ? null : (
    <div>
      <div className="parkDetailContainer">
        <div className="detailParkName">{props.parks.fullName}</div>
        <br />
        <div className="media">
          <img
            id="parkDetailImage"
            src={`https://source.unsplash.com/300x300/?park${props.parks.fullName}`}
            alt={props.parks.fullName}
          />
          <div className="media-body">
            <div className="pTagBackground">
              <h5 className="mt-0">Description of the Park</h5>
              <p>{props.parks.description}</p>
            </div>
          </div>
        </div>

        {/* {props.parks.latLong} */}
        {/* Event modal */}
        <div className="eventContainer">
          <button
            id="eventButton"
            style={{ margin: "2%", padding: "1%" }}
            type="button"
            className="btn btn-primary bg-success btn-lg"
            data-toggle="modal"
            data-target="#exampleModal3"
          >
            {props.parks.events.length !== 0
              ? "Show Event"
              : "No Upcoming Events"}
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModal3Label"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModal3Label">
                  This Month of Event
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {props.parks.events.length === 0 ? (
                  <p>Sorry, but there are no events for this month.</p>
                ) : (
                  props.parks.events.map((event) => (
                    <table key={i++} className="table">
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
                  ))
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* weather Info */}
        <div className="media">
          <img
            id="parkDetailImage"
            src={`https://source.unsplash.com/300x300/?landscape${props.parks.fullName}`}
            alt={props.parks.fullName}
          />

          <div className="media-body" id="cardDetailSecondPandh5tag">
            <div className="pTagBackground">
              <h5 className="mt-0 mb-1">Weather Information</h5>
              <p>{props.parks.weatherInfo}</p>
            </div>
          </div>
        </div>

        <div className="directionText">
          {" "}
          Location on Map{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.google.com/maps/place/${props.parks.fullName.replace(
              " ",
              "+"
            )}`}
          >
            Direction
          </a>{" "}
        </div>
      </div>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_API_KEY}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker
          latitude={parseFloat(props.parks.latLong.split(" ")[0].slice(4, -1))}
          longitude={parseFloat(props.parks.latLong.split(" ")[1].slice(5))}
        >
          <button>
            <img
              style={{ width: "20px", height: "20px" }}
              src={maker}
              alt="Icon"
            />
          </button>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

const mapStateToProps = (store, ownProps) => ({
  parks: store.parks.find((park) => {
    return park.fullName === ownProps.match.params.fullName;
  }),
  images: store.images,
});

export default connect(mapStateToProps)(ParkDetails);
