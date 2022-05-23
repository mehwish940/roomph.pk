import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "../header/Topbar";
import Footer from "../footer/Footer";
import Description from "./description/description";

class PropertDetails extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 900,
    });
  }
  render() {
    return (
        <div className="SearchResultsPage">
          <Topbar />
          <Description />
          <Footer />
        </div>
    );
  }
}

export default PropertDetails;
