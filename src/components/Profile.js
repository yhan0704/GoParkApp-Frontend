import React, { Component } from 'react';
import {connect} from 'react-redux'
import swal from 'sweetalert';
import { withRouter} from 'react-router-dom';
import {addComment} from '../redux/actionCreators'


function formatState(states){
  let stateArray = states.split(',')
  return stateArray.filter(state => state === 'MD' || state === 'VA' || state === 'DC').join(", ")
}


class Profile extends Component{
  render() {
    let i = 1;
    let index=1;
      
  const onHandleSubmit = (e) =>{
    // debugger
    e.preventDefault()
    let favoriteID = this.props.user.favorites.find(favorite => favorite.park_id === favorite.park.id).id
    fetch(`http://localhost:3000/favorites/${favoriteID}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          park_id : this.props.parks.find(park=>(park.fullName==="Assateague Island National Seashore")).id,
          user_id : this.props.user.id,
          comment : e.target.parentElement.firstElementChild.value
      })
      }).then(res => {
        if(res.ok){
            swal("Congratulations!!!!! Your health improved!!", "Check your profile");
            return res.json();
        }
    }).then(comment => {
              // debugger
             this.props.addComment(comment)
        })
  }
  debugger
    return (
      <div>
      <div className="profileContainer">
        <div className="userProfile">
        <form>
          <div id="userProfileTable" className="form-group row">
            <label htmlFor="inputEmail3"  className="col-form-label">User Name</label>
            <div className="col-sm-10">
              <input type="text" id="username" style={{marginBottom:"1em"}} disabled value={this.props.user.name} />
            </div>
            <label htmlFor="inputEmail3"  className=" col-form-label">User Email</label>
            <div className="col-sm-10">
              <input type="text" id="useremail" disabled value={this.props.user.email} />
            </div>
          </div>
        </form>
        </div>
        <div className="profileImageCenter">
          <table style={{textAlign:"initial"}} className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Park Name</th>
              <th>Park State</th>
              <th>Visited Date</th>
              <th>Comments</th>
            </tr>
          </thead>
        {!this.props.user.parks ? null :this.props.user.parks.map(park=> 
          <tbody key={i++}>
            <tr>
              <th scope="row">{index++}</th>
              <td><a href={`/parklist/${park.park.fullName}`}>{park.park.fullName}</a></td>
              <td>{formatState(park.park.states)}</td>
              <td><input className="profileDate" placeholder="date...."></input></td>
              <td><input className="profileComment" placeholder="please leave your comments...."></input>
                <button onClick={onHandleSubmit}>Submit</button>
              </td>
            </tr>
          </tbody>
        )}
        </table>
        <img style={{ marginTop:"2em", marginBottom:"2em", width:"900px", height:"400px"}}src="https://images.unsplash.com/photo-1510521212584-6d33ce4408d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1658&q=80" alt="park"/>
        {/* {this.props.user.parks.length === 0 ? <div className="profileNoVisit">
          <p>There is no visit currently</p>
          <img src="https://media.giphy.com/media/3ohhwJLZ2P9KOt3Z6w/source.gif" alt="park"/>
          </div> : null} */}
        </div>
      </div>
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

  const mapDispatchToProps = dispatch => {
    return {
      addComment: (comment) => {
            dispatch(addComment(comment))
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))