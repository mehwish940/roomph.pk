import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './facilities.css';

export class Facilities extends Component {
  render() {


    return (
      <section className="mb-3 mt-3 ml-3 mr-3">
        <hr className="mt-3" style={{ color: "rgb(179, 179, 179)", borderColor: "rgb(179, 179, 179)" }} />
        <Container>
          <Row>
            <Col xs={12} className="Fc text-center">
              <h5>All Roomph Rooms Offer</h5>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4} lg={2} md={2} >
              <img className="w-50 img-responsive center-block d-block mx-auto mt-3" src="images/Asset6.svg" alt="Room" />
              <p style={{whiteSpace:"nowrap"}} className="FT text-center">Free WiFi</p>
            </Col>

            <Col xs={4} lg={2} md={2} >
              <img className="w-50 img-responsive center-block d-block mx-auto mt-3" src="images/Asset7.svg" alt="Room" />
              <p style={{whiteSpace:"nowrap"}} className="FT text-center">AC/Heater</p>
            </Col>

            <Col xs={4} lg={2} md={2} >
              <img className="w-50 img-responsive center-block d-block mx-auto mt-3" src="images/Asset8.svg" alt="Room" />
              <p style={{whiteSpace:"nowrap"}} className="FT text-center">Clean Bath</p>
            </Col>
            <Col lg={2} md={2} className="d-none d-md-block d-lg-block">
              <img className="w-50 img-responsive center-block d-block mx-auto mt-3" src="images/Asset26.svg" alt="Room" />
              <p style={{whiteSpace:"nowrap"}} className="FT text-center mt-2">Spring Mattress</p>
            </Col>
            <Col lg={2} md={2} className="d-none d-lg-block">
              <img className="w-50 img-responsive center-block d-block mx-auto mt-3" src="images/Asset25.svg" alt="Room" />
              <p style={{whiteSpace:"nowrap"}} className="FT text-center">Secure Locations</p>
            </Col>

          </Row>
          <Row className="text-center" >
            <Col xs={12} className="text-center mt-3 mb-3">
              <h6 className="Constit">Consistency and a Good Night Sleep</h6>
            </Col>

            <Col className="All mb-3" xs={12}>
              <div className="row">
                <div className="column">
                  <img className="pr-2" src="images/Asset99.svg" alt="Star" />
                </div>
                <div className="column">
                  <img className="pr-2" src="images/Asset99.svg" alt="Star" /> </div>
                <div className="column mr-2" style={{ border: "1px solid rgb(201, 201, 201)", borderLeft: "none", borderTop: "none", borderBottom: "none" }}>
                  <img className="pr-2" src="images/Asset99.svg" alt="Star" /> </div>
                <div className="column">
                  <p>Hotel ensures a comfortable guest experience. <b>Plus.</b></p>
                </div>
              </div>

              <div className="row">
                <div className="column">
                </div>
                <div className="column">
                  <img className="pr-2" src="images/Asset99.svg" alt="Star" /> </div>
                <div className="column  mr-2" style={{ border: "1px solid rgb(201, 201, 201)", borderLeft: "none", borderTop: "none", borderBottom: "none" }}>
                  <img className="pr-2" src="images/Asset99.svg" alt="Star" /> </div>
                <div className="column">
                  <p>Improvement on 1R experience. <b> Standard.</b> </p>
                </div>
              </div>

              <div className="row">
                <div className="column">
                </div>
                <div className="column">
                </div>
                <div className="column mr-2" id="borderM">
                  <img className="pr-2" src="images/Asset99.svg" alt="Star" />
                </div>
                <div className="column">
                  <p>Lowest prices, minimum standards. <b>Basic.</b></p>
                </div>
              </div>

              {/* <div style={{ marginTop: "40px" }} className="row">
                <div className="column">
                  <img className="" src="images/Asset99.svg" alt="Star" />
                </div>
                <div className="column">
                  <img className="" src="images/Asset99.svg" alt="Star" /> </div>
              </div>
              <div style={{ marginTop: "40px" }} className="row">
                <div className="column">
                  <img className="" src="images/Asset99.svg" alt="Star" />
                </div>
              </div> */}
            </Col>
            {/* <Col className="All mb-3 d-none d-lg-block" xs={4} style={{ borderRight: "1px solid rgb(179, 179, 179)" }}>
              <div className="row">
                <div className="column">
                  <img className="w-75" src="images/Asset99.svg" alt="Star" />
                </div>
                <div className="column">
                  <img className="w-75" src="images/Asset99.svg" alt="Star" /> </div>
                <div className="column">
                  <img className="w-75" src="images/Asset99.svg" alt="Star" /> </div>
              </div>
              <div className="row">
                <div className="column">
                  <img className="w-75" src="images/Asset99.svg" alt="Star" />
                </div>
                <div className="column">
                  <img className="w-75" src="images/Asset99.svg" alt="Star" /> </div>
              </div>
              <div className="row">
                <div className="column">
                  <img className="w-75" src="images/Asset99.svg" alt="Star" />
                </div>
              </div>
            </Col> */}
            {/* <Col xs={8} className="text-left">
              <p>Hotel ensures a comfortable guest experience. Plus. <br /><br />
                Improvement on 1R experience. Standard.<br /><br />
                Lowest prices, minimum standards. Basic. </p>
            </Col> */}
          </Row>
        </Container>
      </section>
    );
  }
}

export default Facilities;
