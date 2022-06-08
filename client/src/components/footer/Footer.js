import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <footer
        className="site-footer"
        id="contact"
        style={{ backgroundColor: "#575757", color: "white" }}
      >
        <Container fluid>
          <Row>
            <Col></Col>
          </Row>
          <Row></Row>
          <Row></Row>
          <Row className="mt-3" style={{margin: "5px", padding: "5px", border: "1px solid #b8babb", borderBottom:'none' }}>
            <Col xs={6} md={4}
              // data-aos="fade-up"
              className="d-flex mb-1 mt-3 justify-content-center  flex-column flex-wrap as"
            >
              <h5 style={{fontFamily:"Gotham Rounded Bold", fontSize:"22px"}}><u>About Us</u></h5>
              <Link to='/aboutus'>About Us</Link>
              <Link className="mt-1" style={{whiteSpace:"nowrap"}} to='/terms'>Terms and Conditions</Link>
              <Link className="mt-1" to='/'>Loyalty</Link>
              <Link className="mt-1" to='/'>Blog</Link>
              <Link className="mt-1" to='/'>Careers</Link>
            </Col>

            <Col  xs={6} md={4}
              // data-aos="fade-up"
              className="text-center social-icons"
            >
              <img className="mt-3 im" src={process.env.PUBLIC_URL + "/images/logo2.svg"} alt="logo" />
              <Row>
                <Col>
                <img className="ftPic" src={process.env.PUBLIC_URL + "/images/Asset12.svg"} alt="Star"/><img className="ftPic" src={process.env.PUBLIC_URL + "/images/Asset13.svg"} alt="Star"/><img className="ftPic" src={process.env.PUBLIC_URL + "/images/Asset14.svg"} alt="Star"/><img className="ftPic" src={process.env.PUBLIC_URL + "/images/Asset15.svg"} alt="Star"/>
                </Col> 
              </Row>
              {/* <div className="zrow mr-5">
                <div className="zcolumn">
                  <a href="/"><img className="mr-5" src={process.env.PUBLIC_URL + "/images/Asset12.svg"} alt="Star" style={{ width: "150%" }} /></a>
                </div>
                <div className="zcolumn">
                  <a href="/"><img className="" src={process.env.PUBLIC_URL + "/images/Asset13.svg"} alt="Star" style={{ width: "150%" }} /></a>
                </div>
                <div className="zcolumn">
                  <a href="/"><img className="" src={process.env.PUBLIC_URL + "/images/Asset14.svg"} alt="Star" style={{ width: "150%" }} /></a> </div>
                <div className="zcolumn">
                  <a href="/"><img className="" src={process.env.PUBLIC_URL + "/images/Asset15.svg"} alt="Star" style={{ width: "150%" }} /></a></div>
              </div> */}
              {/* <ul className="social-icons">
                <li>
                  <a className="facebook" href="#fb">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#dribble">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul> */}
            </Col>
            <Col  xs={12} md={4}
              // data-aos="fade-up"
              className="mt-3"
            >
              <p className="mt-1 m-0 p-0" style={{fontSize:"13px", textAlign: "center" }}>
                Roomph! Is now Pakistan’s largest and fastest growing hotel company focused on the budget hotel sector. We value what is most important to our customers and select only the best rooms and properties on location, value, and cleanliness. With Roomph can count on quality, consistency, and bargain prices… with strong Wi-Fi and AC every time!
              </p>
              <p className="footerC mt-3 d-lg-none d-md-none m-0 p-0" style={{ fontFamily: "Montserrat Thin" }}>2022 - All rights reserved</p>
            </Col>
          </Row>
          {/* <Row className="mb-2">
            <Col className="mb-2"></Col>
          </Row> */}
        </Container>
        <Container className="d-none d-md-block d-lg-block">
          <Row>
            <Col xs={12}>
              <p style={{borderTop:"1px solid white"}} className="copyright-text text-center">
                2022 - All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
