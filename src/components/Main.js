import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { parkName } from "../redux/actionCreators";

function removeDuplicadtePark(array) {
  return array.filter(
    (thing, index, self) =>
      index === self.findIndex((t) => t.fullName === thing.fullName)
  );
}
function alphabetOrder(array) {
  return array.sort((a, b) => (a.fullName < b.fullName ? -1 : 1));
}
class Main extends Component {
  render() {
    return (
      <div id="mainContainer">
        <div className="goparkWord">
          <p>Go Park</p>
          <p style={{ fontSize: "40px" }}>DMV Aears</p>
        </div>
        <div className="parkMenubar">
          <p style={{ color: "white", fontSize: "40px" }}>Find Parks</p>
          <select
            className="selectInMain"
            onChange={(e) => this.props.parkName(e.target.value)}
            style={{ borderRadius: "10px" }}
          >
            <option value="Choose here" defaultValue hidden>
              Please feel free to search your favorite Park
            </option>
            {alphabetOrder(removeDuplicadtePark(this.props.parks))
              .filter((park) => park.latLong.length !== 0)
              .map((park) => (
                <option key={park.id} value={park.fullName}>
                  {park.fullName}
                </option>
              ))}
          </select>
          <Link to={`/parklist/${this.props.name}`}>
            <button
              type="submit"
              style={{
                marginLeft: "1%",
                height: "35px",
                color: "black",
                borderRadius: "9px",
              }}
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  parks: store.parks,
  name: store.parkName,
});

const mapDispatchToProps = (dispatch) => ({
  parkName: (name) => {
    dispatch(parkName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
