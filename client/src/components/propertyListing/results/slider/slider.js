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
       <Container className="mb-3">
          <Row>
            
            <Col xs={10} className="">
                <div>
                <Slider {...settings}>
                <div>
                    <img src="images/City01.png" alt="Discount" width={"100%"} height={"100%"} style={{borderRadius: "15px 15px 15px 15px"}} />
                </div>
                <div>
                    <img src="images/City02.png" alt="Discount" width={"100%"} height={"100%"} style={{borderRadius: "15px 15px 15px 15px"}}/>
                </div>
                
                </Slider>
            </div>
            </Col>
           
          </Row>
        </Container>
      
    );
  }
}