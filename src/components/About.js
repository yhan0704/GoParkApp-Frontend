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
                <div className="aboutMainText">
                    Thank you for visiting our website. We are encourage that you go to park since health is important these days. 
                    There are a lot of park in DMV area. Go all of the park and click visied button on park tag. 
                    After you visit all of parks, you will satisfied yourself!
                </div>
                <div className="imageInAbout">	
                <img src="https://picsum.photos/400/500?random=1" alt="tree" />	
                <img src="https://picsum.photos/400/500?random=2" alt="tree" />	
                <img src="https://picsum.photos/400/500?random=3" alt="tree" />	
                <img src="https://picsum.photos/400/500?random=4" alt="tree" />	
                </div>	
                <div className="svgImageAbout">	
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB7l0h9gYAAUKXTApfgb8X1iZSvEWtqmMZjv76AsYVee6O-2a4" alt="tree" />	
                <img src="data:image/png;base64,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"  alt="tree" />	
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5DRUkE3TcIbbEO_BsB0p46wVdIDYco7SH_JXO1iRm-8M4PGds" alt="tree" />	
                </div>	
            </div>
        );
    }
}

export default About