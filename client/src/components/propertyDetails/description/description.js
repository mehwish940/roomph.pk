import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import './description.css';
import Reviews from './reviews/reviews';
import Slider from './slider/slider';
import History from '../../history';

export class Description extends Component {
  render() {


    return (
      <section className="mb-3">
        <Container>
          <Row>
            <Col xs={12} className="">
                <button className="Button" type="button"> Best Seller </button>
            </Col>
          </Row>
          <Row>
              <Col className="mt-3 ml-3" xs={12}>
                  <h6>Hotel Plaza Islamabad Rs. 12,000 avg Per </h6>
                  <p>Very Good <br />849 reviews</p>
                </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <h4>Location</h4>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>

              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <p>House 83, Street 5, E11/2, Golra, Islamabad</p>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <h6>Reviews For Harvey Islamabad</h6>
              </Col>
              <Col xs={12}>
                <Reviews />
              </Col>
          </Row>
          <Row style={{border: "1px solid black", borderRadius:"10px 10px 10px 10px"}}>
            <Col className="mt-3" xs={6}>
              <Slider />
            </Col>
            <Col className="mt-3" xs={6}>
              <p><b>Deluxe Double Room</b><br />
                Free Wi-Fi<br />
                1 double bed<br />
                80m2/861 ft2<br />
                Garden view<br />
                Shower
             </p>
            </Col>
            <Col xs={12}>
              <p> Roomph Special Rate - Pay Now Non-Refundable max 2 </p>
            </Col>
            <Col xs={12}>
              <p> Rs. 12,000 </p>
            </Col>
            <Col xs={10} className="mx-auto">
              <button className="DSearchButton mb-3" onClick={() => History.push('/customerinformation')}>Book Now</button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
               <h5>Know More About Harvey Islamabad</h5>
            </Col>
            <Col xs={12}>
               <p className="mt-1" style={{ textAlign: "justify"}}>Our lavishly decorated rooms with warm undertones and earthy colours emanate the most soothing and relaxing vibes, ensuring the most comfortable accommodation for your holiday. Our expert chefs wi.. </p>
            </Col>
            <Col xs={12} className="text-right mb-3">
                  <a href="/"><u>See More</u></a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p><b>Popular Landmarks</b><br />
                PAF Golf Course 4.65km <br />
                West End Plaza 4.93 km <br />
                Libra Jewellers 5.29 km
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>
                <b>Some Helpful Information <br />
                  Check-in from 10:30 am until 01:30 pm <br />
                  Check-out from 11:00 am until 12:30 pm
                </b>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Description;
