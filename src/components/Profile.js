import React, { Component } from 'react';
import {connect} from 'react-redux'
import swal from 'sweetalert';
import { withRouter} from 'react-router-dom';
import {addComment} from '../redux/actionCreators'
import moment from 'moment'
import {filterCalendar} from '../redux/actionCreators'

import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

function formatState(states){
  let stateArray = states.split(',')
  return stateArray.filter(state => state === 'MD' || state === 'VA' || state === 'DC').join(", ")
}

class Profile extends Component{

  handleDateChange = (e, park) => {
    fetch(`http://localhost:3000/favorites/${park.id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          date : e
      })
      }).then(res => {
        if(res.ok){
            swal("Visted date saved successfully");
            return res.json();
        }
    }).then(calendar => {
       this.props.filterCalendar(calendar)
    }
    )
  }
  
  render() {
    let i = 1;
    let index=1;
    const onHandleSubmit = (e, park) =>{
      debugger
    fetch(`http://localhost:3000/favorites/${park.id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          park_id : this.props.parks.find(park=>(park.fullName===e.target.parentElement.parentElement.children[1].innerText)).id,
          user_id : this.props.user.id,
          comment : e.target.parentElement.parentElement.children[4].firstChild.value
      })
      }).then(res => {
        if(res.ok){
            swal("Your comment saved successfully");
            return res.json();
        }
    }).then(comment => {
             this.props.addComment(comment)
        })
  }
  
  // debugger
  // console.log(this.props.user.favorites)
  return (
    
      <div className="profileBackground">
      <div className="profileContainer">
        <div className="userProfile">
        <form>
          <div id="userProfileTable" className="form-group row">
            <label htmlFor="inputEmail3" className="col-form-label">User Name</label>
            <div className="col-sm-10">
              <input type="text" id="username" style={{width:"250px", marginBottom:"1em"}} disabled value={this.props.user.name} />
            </div>
            <label htmlFor="inputEmail3"   className=" col-form-label">User Email</label>
            <div className="col-sm-10">
              <input type="text" id="useremail" style={{width:"350px"}} disabled value={this.props.user.email} />
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
        
        {!this.props.user.favorites ? null :  this.props.user.favorites.map(park=> 
          <tbody key={i++}>
            <tr>
              <th scope="row">{index++}</th>
              <td><a href={`/parklist/${park.park.fullName}`}>{park.park.fullName}</a></td>
              <td>{formatState(park.park.states)}</td>
              <td><MuiPickersUtilsProvider utils={DateFnsUtils}>
                  {park.date === null ?
                    <DatePicker value={moment(new Date()).format("YYYY-MM-DD")} onChange={(e) => this.handleDateChange(e, park)} />  : 
                    <DatePicker value={park.date} onChange={(e) => this.handleDateChange(e, park)} />}
                  </MuiPickersUtilsProvider></td>
              <td><textarea className="profileComment" placeholder="please leave your comments...." defaultValue={park.comment} /></td>
              <td><button style={{marginTop:"0.3em"}} onClick={(e)=>onHandleSubmit(e, park)}>Submit</button></td>
            </tr>
          </tbody>
        )}
        </table>
        {
          this.props.user.favorites.length !== 0 ? 
          <div className="profileVisit">
          <img style={{ marginTop:"2em", marginBottom:"2em", width:"900px", height:"400px"}}src="https://images.unsplash.com/photo-1510521212584-6d33ce4408d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1658&q=80" alt="park"/>
          </div> 
          : 
          <div className="profileNoVisit">
          <p style={{fontSize:"30px"}}>There is no visit any Park currently</p>
          <img src="https://media.giphy.com/media/3ohhwJLZ2P9KOt3Z6w/source.gif" alt="park"/>
          </div>
        }
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
        },
        filterCalendar: (calendar) => {
          dispatch(filterCalendar(calendar))
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))