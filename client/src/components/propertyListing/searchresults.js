import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "../header/Topbar";
import Footer from "../footer/Footer";
import Results from './results/results';
import { withRouter } from "react-router-dom";

class SearchResultsPage extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 900,
    });
  }
  render() {
    return (
        <div className="SearchResultsPage">
          <Topbar />
          <Results />
          <Footer />
        </div>
    );
  }
}

export default withRouter(SearchResultsPage);
