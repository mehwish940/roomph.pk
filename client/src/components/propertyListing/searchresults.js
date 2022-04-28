import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "../header/Topbar";
import Topbar2 from './Topbar2/Topbar2';
import Footer from "../footer/Footer";
import Results from './results/results';

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
          <Topbar2 />
          <Results />
          <Footer />
        </div>
    );
  }
}

export default SearchResultsPage;
