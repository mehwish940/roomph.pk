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
                      <Route path="/propertylisting/:city/:checkin/:checkout/:adults/:rooms/:nights" component={PropertyListing} />
                      <Route path="/propertydetails/:city/:checkin/:checkout/:adults/:rooms/:nights/:id" component={PropertyDetails} />
                      <Route path="/customerinformation/:city/:checkin/:checkout/:adults/:rooms/:nights/:id" component={CustomerInformation} />
                      <Route path="/thankyou/:city/:checkin/:checkout/:adults/:rooms/:nights/:id/:name/:email/:phone/:ucity/:promo" component={Thankyou} />
                      <Route path="/download" exact component={() => <Download />} />
                  </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
