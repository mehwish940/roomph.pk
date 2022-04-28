import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './download.css';

export class DownloadApp extends Component {
  render() {
    return (
      <section className="mb-3 mt-3 ml-3 mr-3" style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)" }}>
        <Container>
          <Row>
            <Col xs={12} className="text-center mt-3">
              <h6 className="upperText">Download the app to unlock member deals</h6>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={5} md={4} lg={3}>
              <Link to="/download" target="_blank">
                <img src="images/Asset11.svg" s alt="Android" />
              </Link>
            </Col>
            <Col xs={5} md={4} lg={3}>
              <Link to="/download" target="_blank">
                <img className="" src="images/Asset10.svg" alt="IOS" />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center mt-1">
              <h6 className="lowerText">Free night awarded after 10th stay.</h6>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default DownloadApp;
