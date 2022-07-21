import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './explore.css';

export class Explore extends Component {
  render() {
    return (
      <section className="exploreSection mb-3">
        <Container>
          <Row className="mb-2" style={{ paddingRight: "10px" }}>
            <Col className="expCont" xs={3} lg={2}>
              <p className="exploreContainer" style={{ color: "white", fontSize: "14px", lineHeight: "18px" }}>Explore</p>
              <p className="exploreContainer roomph" >Roomph</p>
              <p className="exploreContainer" style={{ color: "white", fontSize: "16px", lineHeight: "18px" }}>Rooms</p>
            </Col>
            <Col xs={3} lg={2} className="mt-3 explore">
              <img className="exploreCityImage" src="images/Asset33.svg" alt="Room" style={{ width: "120%" }} />
              <h6 className=""><a style={{ color: 'white' }} href={`/propertylisting/Hunza/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>Hunza</a></h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="strpc2" src="images/Asset18.svg" alt="Star" />
                </div>
                <div className="ecolumn">
                  <img className="strpc" src="images/Asset18.svg" alt="Star" /> </div>
              </div>
            </Col>
            <Col xs={3} lg={2} className="mt-3 explore">
              <img className="exploreCityImage" src="images/Asset35.svg" alt="Room" style={{ width: "120%" }} />
              <h6 className=""><a style={{ color: 'white' }} href={`/propertylisting/Chitral/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>Chitral</a></h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="strpc2" src="images/Asset18.svg" alt="Star" />
                </div>
                <div className="ecolumn">
                  <img className="strpc" src="images/Asset18.svg" alt="Star" /> </div>
                <div className="ecolumn">
                  <img className="strpc1" src="images/Asset18.svg" alt="Star" /> </div>
              </div>
            </Col>
            <Col xs={3} lg={2} className="mt-3 explore">

              <img className="exploreCityImage" src="images/Asset33.svg" alt="Room" style={{ width: "120%" }} />
              <h6 className=""><a style={{ color: 'white' }} href={`/propertylisting/Hunza/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>Skardu</a></h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="strpc2" src="images/Asset18.svg" alt="Star" />
                </div>
                <div className="ecolumn">
                  <img className="strpc" src="images/Asset18.svg" alt="Star" /> </div>
              </div>
            </Col>
            <Col lg={2} className="d-none d-lg-block mt-3 explore">
              <img className="exploreCityImage" src="images/Asset35.svg" alt="Room" style={{ width: "120%" }} />
              <h6 className=""><a style={{ color: 'white' }} href={`/propertylisting/swat/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>Swat</a></h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="strpc2" src="images/Asset18.svg" alt="Star" />
                </div>
                <div className="ecolumn">
                  <img className="strpc" src="images/Asset18.svg" alt="Star" /> </div>
                <div className="ecolumn">
                  <img className="strpc1" src="images/Asset18.svg" alt="Star" /> </div>
              </div>
            </Col>
            <Col lg={2} className="d-none d-lg-block mt-3 explore">
              <img className="exploreCityImage" src="images/Asset33.svg" alt="Room" style={{ width: "120%" }} />
              <h6 className=""><a style={{ color: 'white' }} href={`/propertylisting/Hunza/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>Murree</a></h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="strpc2" src="images/Asset18.svg" alt="Star" />
                </div>
                <div className="ecolumn">
                  <img className="strpc" src="images/Asset18.svg" alt="Star" /> </div>
                <div className="ecolumn">
                  <img className="strpc1" src="images/Asset18.svg" alt="Star" /> </div>
              </div>
            </Col>

          </Row>
          {/* <Row>
            <Col className="ml-4 mr-4 explore mt-2 mt-lg-3">
              <p style={{ textAlign: "center" }}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1300.
              </p>
            </Col>
          </Row> */}
        </Container>
      </section>



    );
  }
}

export default Explore;
