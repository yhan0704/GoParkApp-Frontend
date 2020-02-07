import React, {Component} from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Profile from "./Profile"
import Footer from "./Footer";
import About from "./About";
import Main from "./Main";
import ParkCard from "./ParkCard"
import {connect} from 'react-redux'
import {fetchingParks} from "../redux/actionCreators"
import {fetchingImages} from "../redux/actionCreators"
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import ParkList from './ParkList';
import ParkDetails from './ParkDetails';

class App extends Component {

  componentDidMount(){
    this.props.fetchingParks()
    this.props.fetchingImages()
    // this.props.fetchingUsers()
  }
  render() {
    // console.log(this.props)
    return (
    <div className="App">
      
      
         {this.props.user ? <Navbar /> : null}
        <Switch>
          <Route exact path="/" render={() => this.props.user ? <Redirect to='/main' /> : <Redirect to='/login' />}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/parklist" component={ParkList}/>
          <Route exact path="/parklist/:fullName" component={ParkDetails}/>
          <Route exact path="/parkcard" component={ParkCard}/>
          <Route exact path="/login" render={ ()=>  this.props.user ? <Main /> : <Welcome />} />
        </Switch>

      <Footer />
      
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

const mapDispatchToProps = (dispatch) => ({
  fetchingParks: () => {dispatch(fetchingParks())},
  fetchingImages: () => {dispatch(fetchingImages())},
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
