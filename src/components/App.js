import React, {Component} from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";
import About from "./About";
import Main from "./Main";
import ParkCard from "./ParkCard"
import {connect} from 'react-redux'
import {fetchingParks} from "../redux/actionCreators"
import {fetchingImages} from "../redux/actionCreators"
import { Route, Switch, withRouter } from "react-router-dom";
import ParkList from './ParkList';
import ParkDetails from './ParkDetails';

class App extends Component {
  componentDidMount(){
    this.props.fetchingParks()
    this.props.fetchingImages()
  }
  render() {
    return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/parklist" component={ParkList}/>
          <Route exact path="/parklist/:fullName" component={ParkDetails}/>
          <Route exact path="/parkcard" component={ParkCard}/>
        </Switch>
      <Footer />
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingParks: () => {dispatch(fetchingParks())},
  fetchingImages: () => {dispatch(fetchingImages())}
})

export default withRouter(connect(null, mapDispatchToProps)(App));
