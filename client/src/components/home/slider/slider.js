import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: '15px', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: '15px', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  state = {
    textt: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        textt: res.express.Collection.Rows[0].banner_text
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello1');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
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
      <Container className="sliderContainer" fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={12} className="">
            <div>
              <Slider {...settings}>
                <div>
                  <div className="Slcontainer">
                    <img className="disPic" src="images/discount.png" alt="discounts" style={{ borderRadius: "15px 15px 15px 15px" }} />
                    <p className="Slcentered" style={{ fontFamily: "Gotham Rounded Medium" }}>{this.state.textt}</p>
                  </div>
                </div>
                <div>
                  <img className="disPic" src="images/discount.png" alt="Discount" style={{ borderRadius: "15px 15px 15px 15px" }} />
                </div>

              </Slider>
            </div>
          </Col>
        </Row>
      </Container>

    );
  }
}