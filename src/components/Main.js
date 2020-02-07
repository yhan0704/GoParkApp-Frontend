import React, { Component } from 'react';
import {connect} from 'react-redux'
import {  Link } from 'react-router-dom';
import {parkName} from '../redux/actionCreators'

function removeDuplicadtePark(array){
    // debugger
    return array.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.fullName === thing.fullName
    ))
  )
}
function alphabetOrder(array){
    return array.sort((a,b) => a.fullName < b.fullName ? -1 : 1)
}
class Main extends Component{
    render() {
        console.log(this.props.parkName)
        return (
            <div id="mainBackGround">
                <div className="goparkWord">
                <p>Go Park</p>
                <p style={{fontSize:"60px"}}>DMV Aears</p>
                </div>
                <div className="parkMenubar">
                        <p style={{color:"white", fontSize:"60px"}}>Find your park :)</p> 
                    <select onChange={(e) => this.props.parkName(e.target.value)}>
                        {alphabetOrder(removeDuplicadtePark(this.props.parks)).map(park => 
                        <option key={park.id}>{park.fullName}</option>
                        )}
                    </select>
                    <Link to={`/parklist/${this.props.name}`}><button type="submit" style={{marginLeft:"3%"}}>Search</button></Link>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (store) => ({
    parks: store.parks,
    name: store.parkName
})

const mapDispatchToProps = (dispatch) => ({
    parkName: (name)=>{dispatch(   parkName(name)  )}
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)