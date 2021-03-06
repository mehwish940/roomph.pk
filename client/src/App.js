import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from './components/history';
import Home from './components/home/home';
import PropertyDetails from './components/propertyDetails/HotelDescription';
import PropertyListing from './components/propertyListing/searchresults';
import CustomerInformation from './components/customerInformation/customerInformation';
import Thankyou from "./components/thankyou/thankyou";
import Download from './components/header/download';
import Terms from './components/termsConditions/terms';
import AboutUs from './components/aboutus/aboutus';
import Blogs from './components/blogs/blogs';
import Bookings from './components/bookings/bookings';
import Profile from './components/registeration/profile/profile';
import SingleBlog from './components/blogs/singleBlog';
import Maps from './components/Maps/Maps';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/propertylisting/:city/:checkin/:checkout/:adults/:rooms/:nights/:priceStart/:priceEnd/:premium/:rating/:category" component={PropertyListing} />
            <Route path="/propertydetails/:city/:checkin/:checkout/:adults/:rooms/:nights/:price/:id/:lat/:long" component={PropertyDetails} />
            <Route path="/customerinformation/:city/:checkin/:checkout/:adults/:rooms/:nights/:id/:roomId/:planId/:roomq/:rate" component={CustomerInformation} />
            <Route path="/thankyou/:city/:checkin/:checkout/:adults/:rooms/:nights/:id/:name/:email/:phone/:ucity/:roomId/:planId/:roomq/:rate" component={Thankyou} />
            <Route path="/terms" component={Terms} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/singleblog" component={SingleBlog} />
            <Route path="/profile" component={Profile} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/map/:city/:checkin/:checkout/:adults/:rooms" component={Maps} />
            <Route path="/download" exact component={() => <Download />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
