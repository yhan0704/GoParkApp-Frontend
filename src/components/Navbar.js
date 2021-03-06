import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signOut} from '../redux/actionCreators'

class Navbar extends Component{
    render() {
        return (
            <div className="navContainer">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light alert-info bg-lightblue" id="sizeNavBar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a id="navOption" className="nav-link" href="/main">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a id="navOption" className="nav-link" href="/about">About Us</a>
                    </li>
                    <li className="nav-item active">
                        <a id="navOption" className="nav-link" href="/parklist">Park</a>
                    </li>
                    </ul>
                    <div id="profileSignoutTag"className="justify-content-end">
                        <a id="navOption" className="nav-link" href="/profile" style={{color:"black"}}>{this.props.user ? `${this.props.user.name}'Profile` : ""} </a>
                        <a id="navOption" className="nav-link" href="/login" onClick={() => {this.props.signOut(this.props.user)}} style={{color:"black"}} >{ this.props.user ?"Sign Out" : "" } </a>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
      parks:state.parks,
      user :state.loggedInUser
    }
  }

const mapDispatchToProps = dispath => ({
        signOut: (user) => {
            dispath(signOut(user))
    }
}) 


export default  connect(mapStateToProps, mapDispatchToProps)(Navbar)