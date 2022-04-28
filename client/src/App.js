import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from './components/history';
import Home from './components/home/home';
import PropertyDetails from './components/propertyDetails/HotelDescription';
import PropertyListing from './components/propertyListing/searchresults';
import CustomerInformation from './components/customerInformation/customerInformation';
import Thankyou from "./components/thankyou/thankyou";
import Download from './components/header/download';
import './App.css';

class App extends Component {
  
render() {
    return (
      <div className="App">
        <Router history={history}>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/propertydetails" component={PropertyDetails} />
                      <Route path="/propertylisting" component={PropertyListing} />
                      <Route path="/customerinformation" component={CustomerInformation} />
                      <Route path="/thankyou" component={Thankyou} />
                      <Route path="/download" exact component={() => <Download />} />
                  </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
