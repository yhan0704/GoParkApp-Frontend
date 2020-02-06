import React, { Component } from 'react';
import {connect} from 'react-redux'



function removeDuplicadtePark(array){
    // debugger
    return array.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.fullName === thing.fullName
    ))
  )
}
class Main extends Component{
    render() {
        // debugger
        return (
            <div id="mainBackGround">
                <div className="goparkWord">
                <p>Go Park</p>
                <p style={{fontSize:"60px"}}>DMV Aears</p>
                </div>
                <div className="parkMenubar">
                        <p style={{color:"white", fontSize:"60px"}}>Find your park :)</p> 
                    <select>
                        {removeDuplicadtePark(this.props.parks).map(park => 
                        <option value={park.fullName}>{park.fullName}</option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (store) => ({
    parks: store.parks
})


export default connect(mapStateToProps)(Main)