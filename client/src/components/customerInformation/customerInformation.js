import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "../header/Topbar";
import Footer from "../footer/Footer";
import { Container, Row, Col, Form} from "react-bootstrap";
import Steps from '../steps/steps';
import './customerInformation.css';
import History from "../history";

class CustomerInformation extends Component {
  componentDidMount() {
    AOS.init({
      duration: 900,
    });
  }
  render() {
    return (
        <div className="CustomerInformation">
             <Topbar />
              <section className="mb-3 mt-3 ml-3 mr-3">
              <Container>
                <Row>
                  <Col xs={12} className="">
                      <Steps />
                  </Col>
                  <Col xs={12}>
                     <button className="BButton" type="button"> Best Seller </button>
                  </Col>
                  <Col xs={6}>
                     <h4>Harvey Islamabad</h4>
                     <p><b>House 83, Street 5, E11/2, Golra, Islamabad</b><br />
                       <b>Check-in:</b> 15th Feb 2022, Thursday<br />
                       <b>Check-out: </b> 20th Feb 2022, Tuesday<br />
                       <b> Stay: </b> 5 Nights, 1 Room, 2 Adults
                    </p>
                  </Col>
                  <Col xs={6}>
                    <img src="images/City04.png" alt="Room" width={"100%"} />
                  </Col>
                </Row>
                <hr style={{ color: '#000000', backgroundColor: '#000000',  borderColor : '#000000'}} />
                <Row>
                  <Col xs={6}>
                      <p><b>1 Room (5 Nights):</b> Rs. 50,500 <br />
                          <b> Tax (16% G.S.T.):</b> Rs. 8,800 </p>
                  </Col>
                  <Col xs={6} className="text-center">
                      <p style={{ backgroundColor:"red", borderRadius:"10px 10px 10px 10px" }}>Free Breakfast</p>
                      <p style={{ backgroundColor:"red", borderRadius:"10px 10px 10px 10px" }}>Book Now Pay Later</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className="text-center">
                      <p style={{ backgroundColor:"red", borderRadius:"10px 10px 10px 10px" }}>Sign up and get 20% o on your first booking.</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                      <p><b>Let us know who you are</b></p>
                      <Form>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                          <Form.Control className="mb-2" type="text" placeholder="Full Name" />
                          <Form.Control className="mb-2" type="email" placeholder="Email" />
                          <Form.Control className="mb-2" type="email" placeholder="Retype Email" />
                          <Form.Control className="mb-2" type="text" placeholder="Phone Number" />
                          <Form.Control className="mb-2" type="text" placeholder="City" />
                          <Form.Control className="mb-2" type="text" placeholder="Promo Code" />
                          
                          <Form.Text className="text-muted">
                          We’ll send your confirmation to this email address.
                          By processing with this booking, I am agreeing to Roomph’s
                          Terms & Conditions and Privacy Policy.</Form.Text>
                        </Form.Group>
                        <button className="BButton" type="button" onClick={() => History.push('/thankyou')}> Confirm </button>
                      </Form>
                  </Col>
                </Row>
              </Container>
            </section>
             <Footer />
        </div>
    );
  }
}

export default CustomerInformation;
