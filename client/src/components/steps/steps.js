import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiNike } from "react-icons/si";
import './steps.css';
export default class Steps extends Component {
  render() {
    return (
      <section className="stepCont" style={{ backgroundColor: "white", borderRadius: "0px 0px 10px 10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)" }}>
        <Container>
          <Row className="justify-content-center">
            <Col className="mx-5">
              <button className="step1">1<p className="CI">{' '}Customer Information</p></button>
              <hr class="mb-1 p-0" style={{ display: 'inline-block', width: '87%', borderTop: '1px solid #ff3d00' }} />
              <button className="step2"><SiNike /><p className="CI">{' '}Booking Confirmed</p></button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
