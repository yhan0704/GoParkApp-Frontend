import React from 'react';
import {connect} from 'react-redux'

const Profile = props =>{
    // console.log(props)
    return(
        <div>{props.user.name}</div>
    )
}

const mapStateToProps = state =>{
    return {
      parks:state.parks,
      user :state.loggedInUser
    }
  }


export default connect(mapStateToProps)(Profile)