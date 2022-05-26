import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './explore.css';

export class Explore extends Component {
  render() {
    return (
      <section className="section mb-3">
        <Container>
          <Row style={{paddingRight:"10px"}}>
            <Col xs={3} lg={2} style={{ paddingLeft: "13px",paddingTop:"40px" }}>
              <p style={{ color: "white", fontSize: "14px", margin: "0", padding: "0", lineHeight: "18px" }}>Explore</p>
              <p className="roomph" >Roomph</p>
              <p style={{ color: "white", fontSize: "16px", margin: "0", padding: "0", lineHeight: "18px" }}>Rooms</p>
            </Col>
            <Col xs={3} lg={2} className="mt-3 explore">
              <img className="mt-3" src="images/Asset33.svg" alt="Room" style={{ width: "120%" }} />
              <h6 className="text-center ml-1 ml-md-2 ml-lg-2" style={{ marginLeft: "4px", marginTop: "3px",margin:"0",padding:"0"  }}>Hunza</h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} />
                </div>
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} /> </div>
              </div>
            </Col>
            <Col xs={3} lg={2} className="mt-3 explore">
              <img className="mt-3" src="images/Asset35.svg" alt="Room" style={{ width: "120%" }} />
              <h6 className="text-center ml-1 ml-md-2 ml-lg-2" style={{ marginLeft: "4px", marginTop: "3px",margin:"0",padding:"0"}}>Chitral</h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} />
                </div>
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} /> </div>
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} /> </div>
              </div>
            </Col>
            <Col xs={3} lg={2} className="mt-3 explore">

              <img className="mt-3" src="images/Asset33.svg" alt="Room" style={{ width: "120%" }} />
              <h6 className="text-center ml-1 ml-md-2 ml-lg-2" style={{ marginLeft: "4px", marginTop: "3px",margin:"0",padding:"0"  }}>Skardu</h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} />
                </div>
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} /> </div>
              </div>
            </Col>
            <Col lg={2} className="d-none d-lg-block mt-3 explore">
              <img className="mt-3" src="images/Asset35.svg" alt="Room" style={{ width: "120%" }} />
              <h6 className="text-center ml-1 ml-md-2 ml-lg-2" style={{ marginLeft: "4px", marginTop: "3px",margin:"0",padding:"0"  }}>Swat</h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} />
                </div>
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} /> </div>
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} /> </div>
              </div>
            </Col>
            <Col lg={2} className="mt-3 d-none d-lg-block explore">
              <img className="mt-3" src="images/Asset33.svg" alt="Room" style={{ width: "120%", paddingRight: "10px" }} />
              <h6 className="text-center ml-1 ml-md-2 ml-lg-2" style={{ marginLeft: "4px", marginTop: "3px",margin:"0",padding:"0"  }}>Murree</h6>
              <div className="erow">
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} />
                </div>
                <div className="ecolumn">
                  <img className="" src="images/Asset18.svg" alt="Star" style={{ width: "130%" }} /> </div>
              </div>
            </Col>

          </Row>
          <Row>
            <Col className="ml-4 mr-4 mt-3 explore mt-3">
              <p style={{ textAlign: "center" }}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1300.
              </p>
            </Col>
          </Row>
        </Container>
      </section>



    );
  }
}

export default Explore;
