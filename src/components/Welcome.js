import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className="welcomContainer">
                <div className="row" style={{width:"100%"}}>
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="/" className="active" id="login-form-link">Login</a>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="/" id="register-form-link">Register</a>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form id="login-form" style={{display: "block"}}>
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" value="Log In" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <form id="register-form" style={{display: "none"}}>
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" value="Register Now" />
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
            
        );
    }
}



export default Welcome