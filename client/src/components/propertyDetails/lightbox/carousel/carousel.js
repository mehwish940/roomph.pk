import React, { Component } from "react";
import Slider from "react-slick";
import "react-bootstrap";

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a href="/">
            <img src={`images/City0${i + 1}.png`} alt="carousel"/>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
       <Slider {...settings}>
          <div>
            <img src="images/City01.png" alt="carousel" width={"100%"} />
          </div>
          <div>
            <img src="images/City02.png" alt="carousel" width={"100%"} />
          </div>
          <div>
            <img src="images/City03.png" alt="carousel" width={"100%"} />
          </div>
          <div>
            <img src="images/City04.png" alt="carousel" width={"100%"} />
          </div>
        </Slider>
      </div>
    );
  }
}