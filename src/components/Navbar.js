import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../redux/actionCreators";
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
                <i class="far fa-window-close"></i>
              </span>
            )}
          </button>
          <div
            className={
              this.state.open
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse in"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  id="navOption"
                  onClick={this.onClick}
                  className="nav-link"
                  to="/main"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  id="navOption"
                  onClick={this.onClick}
                  className="nav-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  id="navOption"
                  onClick={this.onClick}
                  className="nav-link"
                  to="/parklist"
                >
                  Park
                </Link>
              </li>
            </ul>
            <div id="profileSignoutTag" className="justify-content-end">
              <Link
                onClick={this.onClick}
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
