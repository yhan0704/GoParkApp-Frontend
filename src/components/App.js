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
import { Route, Switch, withRouter } from "react-router-dom";
import ParkList from './ParkList';

class App extends Component {
  componentDidMount(){
    this.props.fetchingParks()
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
          <Route exact path="/parkcard" component={ParkCard}/>
        </Switch>
      <Footer />
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingParks: () => {dispatch(fetchingParks())}
})

export default withRouter(connect(null, mapDispatchToProps)(App));
