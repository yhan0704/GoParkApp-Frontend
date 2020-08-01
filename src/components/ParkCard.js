import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { favorite } from "../redux/actionCreators";

function formatState(states) {
  let stateArray = states.split(",");
  return stateArray
    .filter((state) => state === "MD" || state === "VA" || state === "DC")
    .join(", ");
}

class ParkCard extends Component {
  visitToggle = () => {
    fetch("https://parkback.herokuapp.com/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        park_id: this.props.park.id,
        user_id: this.props.user.id,
        visit: true,
      }),
    })
      .then((res) => {
        if (res.ok) {
          swal(
            "Congratulations!!!!! Your health improved!!",
            "Check your profile"
          );
          return res.json();
        }
      })
      .then((favoriteData) => {
        this.props.favorite(favoriteData);
      });
  };

  render() {
    return (
      <div>
        <div className="ui card">
          <div className="image">
            <a href={`/parklist/${this.props.park.fullName}`}>
              {this.props.park.fullName ===
              "Assateague Island National Seashore" ? (
                <img
                  id="parkImage"
                  src="https://www.nps.gov/common/uploads/structured_data/3C809F06-1DD8-B71B-0B39C9B927D2C688.jpg"
                  alt={this.props.park.fullName}
                />
              ) : (
                <img
                  id="parkImage"
                  src={this.props.park.image_url}
                  alt={this.props.park.fullName}
                />
              )}
            </a>
          </div>
          <div
            style={{ padding: "0.15em", textAlign: "center" }}
            className="content"
          >
            <Link
              to={`/parklist/${this.props.park.fullName}`}
              className="header"
            >
              {this.props.park.fullName}
            </Link>
            <div className="meta">
              State:{" "}
              <span className="date">
                {" "}
                {formatState(this.props.park.states)}
              </span>
            </div>
          </div>
          <div className="extra content">
            {this.props.user.favorites
              .map((favorite) => favorite.park_id)
              .includes(this.props.park.id) ? (
              <button
                type="button"
                style={{ padding: "5px 20px" }}
                className="btn btn-success"
              >
                Visited
              </button>
            ) : (
              <button
                type="button"
                style={{ padding: "5px 20px" }}
                onClick={this.visitToggle}
                className="btn btn-danger"
              >
                Visit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.loggedInUser,
  visit: store.favorite,
});

const mapDispatchToProps = (dispatch) => {
  return {
    favorite: (favoriteObj) => {
      dispatch(favorite(favoriteObj));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ParkCard)
);
