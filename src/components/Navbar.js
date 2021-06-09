import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../redux/actionCreators";
import img from "../../src/images/close.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    open: true,
  };

  onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    return (
      <div className="navContainer">
        <nav
          className="navbar fixed-top navbar-expand-md navbar-light alert-info bg-lightblue"
          id="sizeNavBar"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.onClick}
          >
            {this.state.open ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <span className="navbar-light navbar-toggler-icon1">
                <img
                  src={img}
                  style={{ width: "50px", height: "40px" }}
                  alt=""
                />
              </span>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link id="navOption" className="nav-link" to="/main">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link id="navOption" className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item active">
                <Link id="navOption" className="nav-link" to="/parklist">
                  Park
                </Link>
              </li>
            </ul>
            <div id="profileSignoutTag" className="justify-content-end">
              <Link
                id="navOption"
                className="nav-link"
                to="/profile"
                style={{ color: "black" }}
              >
                Profile
              </Link>
              <Link
                id="navOption"
                className="nav-link"
                to="/login"
                onClick={() => {
                  this.props.signOut(this.props.user);
                }}
                style={{ color: "black" }}
              >
                {this.props.user ? "Sign Out" : ""}{" "}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.parks,
    user: state.loggedInUser,
  };
};

const mapDispatchToProps = (dispath) => ({
  signOut: (user) => {
    dispath(signOut(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
