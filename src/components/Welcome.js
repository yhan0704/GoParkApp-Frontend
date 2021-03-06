import React, { Component } from "react";
import { loggedIn } from "../redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Welcome extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch("https://parkback.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Log In successful");
          return res.json();
        } else {
          alert("Username or Password is incorrect");
          this.props.history.push(window.location.reload());
        }
      })
      .then((loggedInUser) => {
        this.props.loggedIn(loggedInUser);
      });
  };

  handleSignUpSubmit = (e) => {
    e.preventDefault();
    fetch("https://parkback.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Created your account, Please log in.");
        this.props.history.push(window.location.reload());
      } else {
        alert("User or Email is already exist");
      }
    });
  };

  render() {
    return (
      <div className="welcomeBackground" style={{ height: "100%" }}>
        <div className="welcomContainer">
          <div
            className="row"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-login">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-6">
                      <a href="/" className="active" id="login-form-link">
                        Login
                      </a>
                    </div>
                    <div className="col-xs-6">
                      <a href="/" id="register-form-link">
                        Register
                      </a>
                    </div>
                  </div>
                  <hr />
                </div>

                {/* Log In form */}

                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form
                        id="login-form"
                        onSubmit={this.handleLoginSubmit}
                        style={{ display: "block" }}
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            tabIndex="1"
                            className="form-control"
                            placeholder="Username"
                            onChange={this.handleChange}
                            value={this.state.username}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            tabIndex="2"
                            className="form-control"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <input
                                type="submit"
                                name="login-submit"
                                id="login-submit"
                                tabIndex="4"
                                className="form-control btn btn-login"
                                value="Log In"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </form>

                      {/* sign up form */}

                      <form
                        id="register-form"
                        style={{ display: "none" }}
                        onSubmit={this.handleSignUpSubmit}
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            tabIndex="1"
                            className="form-control"
                            placeholder="Username"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            tabIndex="1"
                            className="form-control"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            tabIndex="2"
                            className="form-control"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <input
                                type="submit"
                                name="register-submit"
                                id="register-submit"
                                tabIndex="4"
                                className="form-control btn btn-register"
                                value="Register Now"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    loggedIn: (user) => {
      dispath(loggedIn(user));
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Welcome));
