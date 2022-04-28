import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Top.css";

export class Topbar2 extends Component {
  render() {
    return (
        <section className="about mb-3" >
        <Container>
          <Row style={{ backgroundColor: "white", border:"1px solid black", borderRadius:"0px 0px 10px 10px" }}>
            <Col xs={12}>
                <p>Search Box and Map</p>
            </Col>
          </Row>
        </Container>
      </section>
      
    );
  }
}

export default Topbar2;
