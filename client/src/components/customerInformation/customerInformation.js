import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "../header/Topbar";
import Footer from "../footer/Footer";
import { Container, Row, Col, Form } from "react-bootstrap";
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
        <section className="">
          <Steps />
          <Container className="mt-2 mb-2 pl-3" style={{ backgroundColor: '#f6f6f6', borderRadius: '10px' }}>
            <Row>
              <Col className="mt-3 pr-0" xs={5}>
                <button className="BButton" type="button" style={{ fontFamily: 'JTMarnie Light' }}> Best Seller </button>
                <h6 className="mt-2 m-0" style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '16px' }}>Harvey Islamabad</h6>
                <img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidr" alt="" />
                <p className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}>
                  <b>House 83, Street 5, E11/2, Golra, Islamabad</b>
                </p>
              </Col>
              <Col className="mt-3" xs={7}>
                <img className="" style={{ borderRadius: '15px' }} src="images/room.png" alt="Room" width={"200px"} height={"110px"} />
              </Col>
              <Col className="" xs={12}>
                <p className="m-0 p-0" style={{ fontFamily: 'Gotham Rounded Light', fontSize: '11px' }}>
                  <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Check-in: </span> <b>15th Feb 2022, Thursday</b><br />
                  <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Check-out: </span> <b> 20th Feb 2022, Tuesday</b><br />
                  <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}> Stay: </span>  <b> 5 Nights, 1 Room, 2 Adults</b>
                </p>
              </Col>
            </Row>
            <hr style={{ color: '#000000', backgroundColor: '#000000', borderColor: '#000000' }} />
            <Row>
              <Col xs={6}>
                <p style={{ fontFamily: 'Gotham Rounded Light', fontSize: '11px', whiteSpace: 'nowrap' }}>
                  <span style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>1 Room (5 Nights): </span><b>Rs. 50,500</b> <br />
                  <span style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Tax (16% G.S.T.): </span><b> Rs. 8,800</b>
                </p>
              </Col>
              <Col xs={6} className="my-auto">
                <p className="" style={{ fontSize: '8px', fontFamily: 'JTMarnie Light', color: '#fff' }}><span style={{ borderRadius: "45px", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", backgroundColor: '#7ed34f', padding: '5px' }}>Free Breakfast</span> <span style={{ borderRadius: "45px", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", backgroundColor: '#7ed34f', padding: '5px', whiteSpace: 'nowrap' }}>Book Now Pay Later</span> </p>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <p className=" p-2 para" style={{ width: '100%', backgroundColor: '#FF5D47', color: '#fff', borderRadius: '10px', fontFamily: 'Montserrat Regular' }}><u>Sign up</u> and get 20% off on your first booking.</p>
              </Col>
            </Row>
            <div style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)" }}>
              <Row className="mx-auto">
                <Col xs={12} className="regFrom">
                  <h6 className="mt-3" style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '16px' }}>Let us know who you are</h6>
                  <Form>
                    <Form.Group className="mt-3 mb-2" controlId="formBasicEmail">
                      <Form.Control className="mb-3" type="text" placeholder="Full name *" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px", color: 'black' }} />
                      <Form.Control className="mb-3" type="email" placeholder="Email *" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px" }} />
                      <Form.Control className="mb-3" type="email" placeholder="Retype email *" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px" }} />
                      <Form.Control className="float-right mb-3" type="text" placeholder="City *" style={{ width: '50%', height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px" }} /><Form.Control className="mb-3" type="text" placeholder="Phone number *" style={{ width: '46%', height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                      <Form.Control className="mb-3" type="text" placeholder="Promo Code (Optional)" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px" }} />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row className="mx-auto">
                <Col className="mt-1">
                  <p style={{ fontSize: "10px", fontFamily: "Gotham Medium" }}>We’ll send your confirmation to this email address. <br />By processing with this booking, I am agreeing to Roomph’s <span style={{ color: "#EF4E22" }}>Terms & Conditions</span>
                    {' '}and {' '}<span style={{ color: "#EF4E22" }}>Privacy Policy</span></p>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

export default CustomerInformation;
