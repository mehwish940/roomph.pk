import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import './reviews.css';

export class Reviews extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1.1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="Ful">
            <section className="mb-3 ml-3 mr-3">
              <Container style={{ border:"1px solid rgb(205, 206, 206)", borderRadius: "15px 15px 15px 15px", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row className="">
                  <Col xs={3} sm={3} className="mt-3">
                    <img className="revHotelPic" src={process.env.PUBLIC_URL +"/images/blog/thumb/blog.jpg"} alt="Room" style={{ borderRadius: "40%"}} />
                  </Col>
                  <Col xs={8} sm={8} className="hotel mt-3">
                    <h5 className="hotelName" style={{ color: "#414042" }}>King Plaza Hotel</h5>
                  </Col>
                </Row>
                <Row className="mt-2 reviewText">
                  <Col xs={12}>
                    <p style={{margin:"0",padding:"0", fontFamily: "Montserrat Thin"}}>“Looks exactly what is posted here in Roomph. Great service and awesome stay!”</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p style={{ fontFamily: "Montserrat Thin", fontStyle: "italic", fontSize: "12px"}}>- Bilal from Karachi on Feb 18th, 2022</p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
          <div className="Ful">
            <section className=" ml-3 mr-3">
            <Container style={{ border:"1px solid rgb(205, 206, 206)", borderRadius: "15px 15px 15px 15px", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row className="">
                  <Col xs={3} sm={3} className="mt-3">
                    <img className="revHotelPic" src={process.env.PUBLIC_URL +"/images/blog/thumb/blog.jpg"} alt="Room" style={{ borderRadius: "40%"}} />
                  </Col>
                  <Col xs={8} sm={8} className="hotel mt-3">
                    <h5 className="hotelName" style={{ color: "#414042" }}>King Plaza Hotel</h5>
                  </Col>
                </Row>
                <Row className="mt-2 reviewText">
                  <Col xs={12}>
                    <p style={{margin:"0",padding:"0", fontFamily: "Montserrat Thin"}}>“Looks exactly what is posted here in Roomph. Great service and awesome stay!”</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p style={{ fontFamily: "Montserrat Thin", fontStyle: "italic", fontSize: "12px"}}>- Bilal from Karachi on Feb 18th, 2022</p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </Slider>
        <p className="text-center" style={{fontSize:'12px'}}><u>View All</u></p>
      </div>

    );
  }
}

export default Reviews;