import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import './reviews.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: '2%', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: '2%', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

export class Reviews extends Component {
  state = {
    AccommodationName: '', review: '', fullName: '', CityName: '', thumbnail: '', propertyCount3: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {

    this.callApi()
      .then(res => {
        console.log(res.express);
        this.setState({
          AccommodationName: res.express.Collection.Rows[0].AccommodationName,
          review: res.express.Collection.Rows[0].review,
          fullName: res.express.Collection.Rows[0].fullname,
          cityName: res.express.Collection.Rows[0].CityName,
          reviewDate: res.express.Collection.Rows[0].created_date,
          thumbnail: res.express.Collection.Rows[0].Thumbnail
        })
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/reviews');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    return body;
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      nextArrow: window.innerWidth > 480 ? <SampleNextArrow /> : '',
      prevArrow: window.innerWidth > 480 ? <SamplePrevArrow /> : '',
      slidesToShow: window.innerWidth < 480 ? 1.1 : 3,
      slidesToScroll: window.innerWidth < 480 ? 1 : 3,
      // autoplay: true,
      pauseOnHover: true,
      speed: 4000,
      // autoplaySpeed: 4000,
      cssEase: "linear"
    };

    return (
      <div>
        <Row>
          <Col xs={12} className="Fc text-center">
            <h5 className="reviewsHeading">Traveler Reviews</h5>
          </Col>
        </Row>
        <Slider {...settings} className="revSliderContainerNew">
          <div className="Ful1" >
            <section className="mb-3 ml-4 ml-lg-0 revContNeww">
              <Container className="fulContReviews" style={{ border: "1px solid rgb(205, 206, 206)", borderRadius: "15px 15px 15px 15px", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row className="">
                  <Col xs={3} sm={3} lg={3} className="mt-3">
                    <img className="revHotelPic" src={this.state.thumbnail} alt="Room" style={{ borderRadius: "40%" }} />
                  </Col>
                  <Col xs={8} sm={8} className="hotel mt-3">
                    <h5 className="hotelName" style={{ color: "#414042" }}>{this.state.AccommodationName}</h5>
                  </Col>
                </Row>
                <Row className="mt-2 reviewText">
                  <Col xs={12}>
                    <p style={{ margin: "0", padding: "0", fontFamily: "Montserrat Thin", textAlign: 'left' }}>“{this.state.review}”</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p style={{ fontFamily: "Montserrat Thin", fontStyle: "italic", fontSize: "10px" }}>- {this.state.fullName} from {this.state.cityName} on {this.state.reviewDate}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
          <div className="Ful2 Ful1">
            <section className="mb-3 ml-4 ml-lg-0 revContNeww">
              <Container className="fulContReviews" style={{ border: "1px solid rgb(205, 206, 206)", borderRadius: "15px 15px 15px 15px", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row className="">
                  <Col xs={3} sm={3} lg={3} className="mt-3">
                    <img className="revHotelPic" src={this.state.thumbnail} alt="Room" style={{ borderRadius: "40%" }} />
                  </Col>
                  <Col xs={8} sm={8} className="hotel mt-3">
                    <h5 className="hotelName" style={{ color: "#414042" }}>{this.state.AccommodationName}</h5>
                  </Col>
                </Row>
                <Row className="mt-2 reviewText">
                  <Col xs={12}>
                    <p style={{ margin: "0", padding: "0", fontFamily: "Montserrat Thin", textAlign: 'justify' }}>“{this.state.review}”</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p style={{ fontFamily: "Montserrat Thin", fontStyle: "italic", fontSize: "10px" }}>- {this.state.fullName} from {this.state.cityName} on {this.state.reviewDate}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
          <div className="Ful3 Ful1">
            <section className="mb-3 ml-4 ml-lg-0 revContNeww">
              <Container className="fulContReviews" style={{ border: "1px solid rgb(205, 206, 206)", borderRadius: "15px 15px 15px 15px", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row className="">
                  <Col xs={3} sm={3} lg={3} className="mt-3">
                    <img className="revHotelPic" src={this.state.thumbnail} alt="Room" style={{ borderRadius: "40%" }} />
                  </Col>
                  <Col xs={8} sm={8} className="hotel mt-3">
                    <h5 className="hotelName" style={{ color: "#414042" }}>{this.state.AccommodationName}</h5>
                  </Col>
                </Row>
                <Row className="mt-2 reviewText">
                  <Col xs={12}>
                    <p style={{ margin: "0", padding: "0", fontFamily: "Montserrat Thin", textAlign: 'justify' }}>“{this.state.review}”</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p style={{ fontFamily: "Montserrat Thin", fontStyle: "italic", fontSize: "10px" }}>- {this.state.fullName} from {this.state.cityName} on {this.state.reviewDate}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
          <div className="Ful1">
            <section className="mb-3 ml-4 ml-lg-0 revContNeww">
              <Container className="fulContReviews" style={{ border: "1px solid rgb(205, 206, 206)", borderRadius: "15px 15px 15px 15px", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row className="">
                  <Col xs={3} sm={3} lg={3} className="mt-3">
                    <img className="revHotelPic" src={this.state.thumbnail} alt="Room" style={{ borderRadius: "40%" }} />
                  </Col>
                  <Col xs={8} sm={8} className="hotel mt-3">
                    <h5 className="hotelName" style={{ color: "#414042" }}>{this.state.AccommodationName}</h5>
                  </Col>
                </Row>
                <Row className="mt-2 reviewText">
                  <Col xs={12}>
                    <p style={{ margin: "0", padding: "0", fontFamily: "Montserrat Thin", textAlign: 'justify' }}>“{this.state.review}”</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p style={{ fontFamily: "Montserrat Thin", fontStyle: "italic", fontSize: "10px" }}>- {this.state.fullName} from {this.state.cityName} on {this.state.reviewDate}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
          <div className="Ful2 Ful1">
            <section className="mb-3 ml-4 ml-lg-0 revContNeww">
              <Container className="fulContReviews" style={{ border: "1px solid rgb(205, 206, 206)", borderRadius: "15px 15px 15px 15px", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row className="">
                  <Col xs={3} sm={3} lg={3} className="mt-3">
                    <img className="revHotelPic" src={this.state.thumbnail} alt="Room" style={{ borderRadius: "40%" }} />
                  </Col>
                  <Col xs={8} sm={8} className="hotel mt-3">
                    <h5 className="hotelName" style={{ color: "#414042" }}>{this.state.AccommodationName}</h5>
                  </Col>
                </Row>
                <Row className="mt-2 reviewText">
                  <Col xs={12}>
                    <p style={{ margin: "0", padding: "0", fontFamily: "Montserrat Thin", textAlign: 'justify' }}>“{this.state.review}”</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p style={{ fontFamily: "Montserrat Thin", fontStyle: "italic", fontSize: "10px" }}>- {this.state.fullName} from {this.state.cityName} on {this.state.reviewDate}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
          <div className="Ful3 Ful1">
            <section className="mb-3 ml-4 ml-lg-0 revContNeww">
              <Container className="fulContReviews" style={{ border: "1px solid rgb(205, 206, 206)", borderRadius: "15px 15px 15px 15px", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row className="">
                  <Col xs={3} sm={3} lg={3} className="mt-3">
                    <img className="revHotelPic" src={this.state.thumbnail} alt="Room" style={{ borderRadius: "40%" }} />
                  </Col>
                  <Col xs={8} sm={8} className="hotel mt-3">
                    <h5 className="hotelName" style={{ color: "#414042" }}>{this.state.AccommodationName}</h5>
                  </Col>
                </Row>
                <Row className="mt-2 reviewText">
                  <Col xs={12}>
                    <p style={{ margin: "0", padding: "0", fontFamily: "Montserrat Thin", textAlign: 'justify' }}>“{this.state.review}”</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p style={{ fontFamily: "Montserrat Thin", fontStyle: "italic", fontSize: "10px" }}>- {this.state.fullName} from {this.state.cityName} on {this.state.reviewDate}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </Slider>
        {/* <p className="text-center viewAllBtn" style={{ fontSize: '14px' }}><u>View All</u></p> */}
      </div>

    );
  }
}

export default Reviews;