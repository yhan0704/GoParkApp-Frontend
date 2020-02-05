import React, { Component } from 'react';

class Navbar extends Component{
    render() {
        return (
            <div className="navContainer">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light alert-info bg-lightblue" id="sizeNavBar">
                <a className="navbar-brand" href="/main">Go Park</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/main">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/parklist">Park</a>
                    </li>
                    </ul>
                    <div className="d-flex justify-content-end">
                        <a className="nav-link" href="/parklist" style={{color:"black"}}>Profile</a>
                        <a className="nav-link" href="/" style={{color:"black"}}>Sign Out</a>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default Navbar