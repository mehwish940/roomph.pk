import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer
        className="site-footer mb-0 pb-0"
        id="contact"
        style={{ backgroundColor: "#575757", color: "white" }}
      >
        <Container fluid>
          <Row>
            <Col></Col>
          </Row>
          <Row></Row>
          <Row></Row>
          <Row className="footerContainer">
            <Col xs={6} md={4} lg={3}
              // data-aos="fade-up"
              className="aboutUsContainer d-flex justify-content-center  flex-column flex-wrap as"
            >
              <h5 style={{ fontFamily: "Gotham Rounded Medium", fontSize: "22px" }}><u>Useful Links</u></h5>
              <a href='/aboutus'>About Us</a>
              <a className="mt-1" style={{ whiteSpace: "nowrap" }} href='/terms'>Terms and Conditions</a>
              <a className="mt-1" href='/'>Loyalty</a>
              <a className="mt-1" href='/blogs'>Blog</a>
              <a className="mt-1" href='/'>Careers</a>
              <a className="mt-1" style={{ whiteSpace: 'nowrap' }} href='/'>Ambassador Program</a>
              <a className="dealsBtn addPropertBtn" href='https://www.roomph.pk/en/add-property.html'>Add Property</a>
            </Col>

            <Col xs={6} md={4}
              // data-aos="fade-up"
              className="text-center social-icons "
            >
              <img className="mt-3 im d-lg-none" src={process.env.PUBLIC_URL + "/images/logo2.svg"} alt="logo" />
              <Row>
                <Col className="d-lg-none">
                  <img className="ftPic" src={process.env.PUBLIC_URL + "/images/Asset12.svg"} alt="Star" /><img className="ftPic ftpic1" src={process.env.PUBLIC_URL + "/images/Asset13.svg"} alt="Star" /><img className="ftPic ftpic1" src={process.env.PUBLIC_URL + "/images/Asset14.svg"} alt="Star" /><img className="ftPic ftpic1" src={process.env.PUBLIC_URL + "/images/Asset15.svg"} alt="Star" />
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
            <Col xs={12} md={4}
              // data-aos="fade-up"
              className="mt-3 mt-lg-0 roomphTextFooter"
            >
              <div className="text-center social-icons d-none d-lg-block">
                <img className="im" src={process.env.PUBLIC_URL + "/images/logo2.svg"} alt="logo" />
                <Row>
                  <Col className="d-none d-lg-block">
                    <img className="ftPic" src={process.env.PUBLIC_URL + "/images/Asset12.svg"} alt="Star" /><img className="ftPic ftpic1" src={process.env.PUBLIC_URL + "/images/Asset13.svg"} alt="Star" /><img className="ftPic ftpic1" src={process.env.PUBLIC_URL + "/images/Asset14.svg"} alt="Star" /><img className="ftPic ftpic1" src={process.env.PUBLIC_URL + "/images/Asset15.svg"} alt="Star" />
                  </Col>
                </Row>
              </div>
              <p className="mt-1 m-0 p-0" style={{ fontSize: "13px", textAlign: "justify" }}>
                Roomph! Is now Pakistan’s largest and fastest growing hotel company focused on the budget hotel sector. We value what is most important to our customers and select only the best rooms and properties on location, value, and cleanliness. With Roomph can count on quality, consistency, and bargain prices… with strong Wi-Fi and AC every time!
              </p>
              <p className="footerC mt-3 d-lg-none d-md-none m-0 p-0" style={{ fontFamily: "Montserrat Thin" }}>2022 - All rights reserved</p>
              {/* <div className="fbg">Hi</div> */}
            </Col>
          </Row>
          {/* <Row className="mb-2">
            <Col className="mb-2"></Col>
          </Row> */}
        </Container>
        <Container className="d-none d-md-block d-lg-block" fluid>
          <Row>
            <Col className="copyright-text" xs={12} lg={10}>
              <p className="m-0 p-0 mt-2 mb-2 text-center">
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
