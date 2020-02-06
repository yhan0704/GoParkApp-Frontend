import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
         <div>   
<footer className="page-footer font-small bg-secondary">

  
  <div className="container">
  
    <hr className="rgba-white-light" style={{margin: "0 15%"}} />

    
    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">

      
      <div className="col-md-8 col-12 mt-5">
        <p style={{lineHeight: "1.7rem"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
      </div>
      

    </div>
    
    <hr className="clearfix d-md-none rgba-white-light" style={{margin: "10% 15% 5%"}} />

    
    <div className="row pb-3">

      
      <div className="col-md-12">

        <div className="mb-5 flex-center">

          
          <a className="fb-ic" href="/">
            <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="tw-ic" href="/">
            <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="gplus-ic" href="/">
            <i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="li-ic" href="/">
            <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="ins-ic" href="/">
            <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
          </a>
          
          <a className="pin-ic" href="/">
            <i className="fab fa-pinterest fa-lg white-text"> </i>
          </a>

        </div>

      </div>
      

    </div>
    

  </div>
  


  

</footer>
</div>

        );
    }
}

export default Footer