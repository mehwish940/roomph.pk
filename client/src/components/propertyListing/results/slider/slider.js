import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#EF4E22", borderRadius:"10px 10px 10px 10px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#EF4E22", borderRadius:"10px 10px 10px 10px" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
    //   dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
       <div>
                <Slider {...settings}>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/City01.png"} alt="Discount" height={"260px"} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/City02.png"} alt="Discount" height={"260px"}/>
                </div>
                
                </Slider>
            </div>
    
      
    );
  }
}