import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import Slider from "react-slick";


export class Reviews extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <section className="mb-3 ml-3 mr-3">
              <Container style={{ borderRadius: "15px 15px 15px 15px", boxShadow:"2px 2px 2px 2px"}}>
                  <Row className="mt-3">
                  <Col xs={3} sm={3} className="mt-3">
                    <img src="images/room.avif" alt="Room" width={"80px"} height={"50px"} style={{borderRadius: "50%"}}  />
                  </Col>
                  <Col xs={8} sm={8} className="mt-4">
                      <h4>King Plaza Hotel</h4>
                  </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={12}>
                      <p>“Looks exactly what is posted here in Roomph. Great service and awesome stay!”</p>
                    </Col>
                </Row>
                <Row  className="mt-2">
                    <Col xs={12}>
                      <p>- Bilal from Karachi on Feb 18th, 2022</p>
                    </Col>
                </Row>

              </Container>
            </section>
          </div>
          <div>
            <section className="mb-3 ml-3 mr-3">
              <Container style={{ borderRadius: "15px 15px 15px 15px", boxShadow:"2px 2px 2px 2px"}}>
                  <Row className="mt-3">
                  <Col xs={3} sm={3} className="mt-3">
                    <img src="images/room.avif" alt="Room" width={"80px"} height={"50px"} style={{borderRadius: "50%"}}  />
                  </Col>
                  <Col xs={8} sm={8} className="mt-4">
                      <h4>King Plaza Hotel</h4>
                  </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={12}>
                      <p>“Looks exactly what is posted here in Roomph. Great service and awesome stay!”</p>
                    </Col>
                </Row>
                <Row  className="mt-2">
                    <Col xs={12}>
                      <p>- Bilal from Karachi on Feb 18th, 2022</p>
                    </Col>
                </Row>

              </Container>
            </section>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <Container>
          <Row>
              <Col xs={12} className="text-center mb-3">
                  <a href="/"><u>View All</u></a>
              </Col>
          </Row>
        </Container>
      </div>
      
    );
  }
}

export default Reviews;
