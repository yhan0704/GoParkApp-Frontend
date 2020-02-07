import React, { Component } from 'react';

class About extends Component{
    render() {
        return (
            <div>
                <div className="aboutContainer">
                    <img src="https://images.unsplash.com/photo-1464823763813-332c9aa25020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="tree" />
                    <div className="aboutTextCenter">About Us</div>
                    <p className="aboutPtagTextCenter">Welcome to Go Park - build up where you went to the park. There are planty of park near DMV area.</p>
                </div>
                <p>
                    Thank you for visiting our website. We are encourage that you go to park since health is important these days. 
                    There are a lot of park in DMV area. Go all of the park and click visied button on park tag. 
                    After you visit all of parks, you will satisfied yourself!
                </p>
            </div>
        );
    }
}

export default About