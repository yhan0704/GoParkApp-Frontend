import React from 'react';
import {connect} from 'react-redux'

function formatState(states){
  let stateArray = states.split(',')
  return stateArray.filter(state => state === 'MD' || state === 'VA' || state === 'DC').join(", ")
}

const Profile = props =>{
    let i = 1;
    let index=1;
    return(
      <div>
        <div className="profileContainer">
          <div className="userProfile">
          <form>
            <div id="userProfileTable" className="form-group row">
              <label htmlFor="inputEmail3"  className="col-form-label">User Name</label>
              <div className="col-sm-10">
                <input type="text" id="username" style={{marginBottom:"1em"}} disabled value={props.user.name} />
              </div>
              <label htmlFor="inputEmail3"  className=" col-form-label">User Email</label>
              <div className="col-sm-10">
                <input type="text" id="useremail" disabled value={props.user.email} />
              </div>
            </div>
          </form>
          </div>
          <div>
            <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Park Name</th>
                <th>Park State</th>
                <th>Visited Date</th>
                <th>Comments</th>
              </tr>
            </thead>
          {props.user.parks.map(park=> 
            <tbody key={i++}>
              <tr>
                <th scope="row">{index++}</th>
                <td><a href={`/parklist/${park.park.fullName}`}>{park.park.fullName}</a></td>
                <td>{formatState(park.park.states)}</td>
                <td><input className="profileDate" placeholder="date...."></input></td>
                <td><input className="profileComment" placeholder="please leave your comments...."></input>
                  <button>submit</button>
                </td>
              </tr>
            </tbody>
          )}
          </table>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = state =>{
    return {
      parks:state.parks,
      user :state.loggedInUser
    }
  }


export default connect(mapStateToProps)(Profile)