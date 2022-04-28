import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "../header/Topbar";
import LightboxExample from './lightbox/lightbox';
import Footer from "../footer/Footer";
import Description from "./description/description";
import Topbar2 from "./Topbar2/Topbar2";

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
          <Topbar2 />
          <LightboxExample />
          <Description />
          <Footer />
        </div>
    );
  }
}

export default PropertDetails;
