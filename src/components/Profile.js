import React from 'react';
import {connect} from 'react-redux'

const Profile = props =>{
    console.log(props)
    return(
        <div>
          <form>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">User Name</label>
              <div className="col-sm-10">
                <input type="text" id="inputEmail3" value={props.user.name} />
              </div>
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">User Email</label>
              <div className="col-sm-10">
                <input type="text" id="inputEmail3" value={props.user.email} />
              </div>
            </div>
          </form>
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