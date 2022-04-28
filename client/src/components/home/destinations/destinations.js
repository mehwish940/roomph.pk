import React, { Component, useContext } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './destination.css';
import { Accordion, Card, Button, AccordionContext, useAccordionButton } from 'react-bootstrap';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ border: 'none', fontSize: '15px' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export class Destination extends Component {
  state = {
    city_name1: '', city_name2: '', city_name3: '', propertyCount1: '', propertyCount2: '', propertyCount3: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        city_name1: res.express.Collection.Rows[0].city_name,
        city_name2: res.express.Collection.Rows[1].city_name,
        city_name3: res.express.Collection.Rows[2].city_name,
        propertyCount1: res.express.Collection.Rows[0].propertyCount,
        propertyCount2: res.express.Collection.Rows[1].propertyCount,
        propertyCount3: res.express.Collection.Rows[2].propertyCount,
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello2');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <section className="mb-3" >
        <Container>
          <Row>
            <Col xs={12} className="">
              <h5 className="mpD text-center">Most Popular Destinations</h5>
            </Col>
            {/* <Col xs={2}>
                <Image src="images/Asset 3.svg" />
               </Col> */}
          </Row>
          {/* For Large Screens */}
          <div className="d-none d-md-block">
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="" >
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a className="" href="/">{this.state.city_name1}</a>
                <p className="RP">{this.state.propertyCount1} Rooms Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="" >
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name2}</a>
                <p className="RP">{this.state.propertyCount2} Rooms Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name3}</a>
                <p className="RP">{this.state.propertyCount3} Rooms Available</p>
              </Col>
            </Row>
          </div>
          {/* For Small Screens */}
          <div className="d-md-none">
            <Row className="mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset30.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name1}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount1} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
            <Row className="mt-1 mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset32.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name2}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount2} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
            <Row className="mt-1 mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset30.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name3}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount3} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs={12} className="mt-3 text-center viewAllBtn">
              <Example />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
class Example extends Component {
  state = {
    city_name4: '',propertyCount4: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        city_name4: res.express.Collection.Rows[3].city_name,
        propertyCount4: res.express.Collection.Rows[3].propertyCount,
        city_name5: res.express.Collection.Rows[4].city_name,
        propertyCount5: res.express.Collection.Rows[4].propertyCount,
        city_name6: res.express.Collection.Rows[5].city_name,
        propertyCount6: res.express.Collection.Rows[5].propertyCount,
        city_name7: res.express.Collection.Rows[6].city_name,
        propertyCount7: res.express.Collection.Rows[6].propertyCount,
        city_name8: res.express.Collection.Rows[7].city_name,
        propertyCount8: res.express.Collection.Rows[7].propertyCount,
        city_name9: res.express.Collection.Rows[8].city_name,
        propertyCount9: res.express.Collection.Rows[8].propertyCount,
        city_name10: res.express.Collection.Rows[9].city_name,
        propertyCount10: res.express.Collection.Rows[9].propertyCount
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello2');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
  return (
    <Accordion defaultActiveKey="0">
      <ContextAwareToggle eventKey="1"><u>View All</u></ContextAwareToggle>
      <Accordion.Collapse eventKey="1">
       <Container>
       {/* For Larger Screens */}
       <div className="">
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="" >
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a className="" href="/">{this.state.city_name4}</a>
                <p className="RP">{this.state.propertyCount4} Rooms Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="" >
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name5}</a>
                <p className="RP">{this.state.propertyCount5} Rooms Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name6}</a>
                <p className="RP">{this.state.propertyCount6} Rooms Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name7}</a>
                <p className="RP">{this.state.propertyCount7} Rooms Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name8}</a>
                <p className="RP">{this.state.propertyCount8} Rooms Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name9}</a>
                <p className="RP">{this.state.propertyCount9} Rooms Available</p>
              </Col>
            </Row>   
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset30.svg" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name10}</a>
                <p className="RP">{this.state.propertyCount10} Rooms Available</p>
              </Col>
            </Row>   
          </div>
          {/* For Small Screens */}
          {/* <div className="d-md-none">
            <Row className="mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset30.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name4}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount4} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
            <Row className="mt-1 mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset32.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name5}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount5} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
            <Row className="mt-1 mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset30.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name6}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount6} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
            <Row className="mt-1 mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset30.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name7}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount7} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
            <Row className="mt-1 mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset30.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name8}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount8} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
            <Row className="mt-1 mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset30.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name9}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount9} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
            <Row className="mt-1 mx-auto">
              <Col xs={12}>
                <div className="aligned" >
                  <img style={{ borderRadius: "15px 0px 0px 15px", borderStyle: "outset", borderRight: "none", borderTop: "none" }} className="cityPic" src="images/Asset30.svg" alt="" />
                  <span className="mt-1" style={{ borderRadius: "0px 15px 15px 0px", borderStyle: "outset", borderLeft: "none" }}>
                    <a href="/">{this.state.city_name10}</a><br /><span style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount10} Rooms Available</span></span>
                </div>
              </Col>
            </Row>
          </div> */}
       </Container>
      </Accordion.Collapse>

    </Accordion>
  );
}
}

export default Destination;
