import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "./Topbar/Topbar";
import Search from "./search/search";
import SimpleSlider from './slider/slider';
import Destination from './destinations/destinations';
import Explore from './explore/explore';
import Reviews from './reviews/reviews';
import Blogs from './blogs/blogs';
import Facilities from './facilities/facilities';
import DownloadApp from './downloadapp/downloadapp';
import Footer from "../footer/Footer";
import './home.css';

class HomePage extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 900,
    });
  }
  render() {
    return (
      <div className="HomePage">
        <div class="icon-bar">
          <a href="https://wa.me/+923016441046" target="_blank" rel="noopener noreferrer" className="whatsapp m-0 p-0"><img src="images/Asset3.svg" width={40} alt="" /></a>
        </div>
        <Topbar />
        <Search />
        <SimpleSlider />
        <Destination />
        <Explore />
        <Facilities />
        <Reviews />
        <Blogs />
        <DownloadApp />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
