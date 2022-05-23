import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Topbar2.css';
import { BiMap } from "react-icons/bi";

export class Topbar2 extends Component {
  render() {
    return (
      <section className="about mb-3" >
        <Container fluid>
          <Row className="p-2" style={{ backgroundColor: "white", borderRadius: "0px 0px 10px 10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)" }}>
            <Col xs={10} style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
              <Row className="p-2">
                <Col>
                  <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none' }}>Islamabad</button>
                  <div >
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>10th - 12th Mar </button>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . 2 guests</button>
                  </div>
                </Col>
                <Col xs={2} className="my-auto mx-auto">
                  <img className="searchLogo float-right" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
                </Col>
              </Row>
            </Col>
            <Col className='my-auto mx-auto'>
              <div className="iitem float-right">
                <BiMap className="mapPic" />
                <span className="ccaption">Map</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    );
  }
}

export default Topbar2;
