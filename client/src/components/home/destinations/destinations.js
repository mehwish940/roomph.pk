import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './destination.css';
import { Accordion, useAccordionButton } from 'react-bootstrap';

function CTB() {
  const [buttonText, setButtonText] = useState("View All"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
  const changeText = (text) => {
    if (buttonText === 'View All') {
      setButtonText(text);
    }
    else if (buttonText === 'View Less') {
      setButtonText('View All');
    }

  }
  return (
    <button className="d-lg-none" style={{ border: 'none', background: 'none' }} onClick={() => changeText("View Less")}><u>{buttonText}</u></button>
  )
}
function ContextAwareToggle({ children, eventKey, callback }) {

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );



  return (
    <button
      type="button"
      style={{ border: 'none', fontSize: '15px', background: 'none' }}
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
      <section className="mb-3 destContFullD" >
        <Container fluid>
          <Row>
            <Col xs={12} className="">
              <h5 className="mpD text-center">Most Popular Destinations</h5>
            </Col>
          </Row>
          {/* For Large Screens */}
          {/* <div className="d-none d-md-block">
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="" >
                <img className="" src="images/Asset32.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a className="" href="/">{this.state.city_name1}</a>
                <p className="RP">{this.state.propertyCount1} Properties Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="" >
                <img className="" src="images/Asset30.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name2}</a>
                <p className="RP">{this.state.propertyCount2} Properties Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset31.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name3}</a>
                <p className="RP">{this.state.propertyCount3} Properties Available</p>
              </Col>
            </Row>
          </div> */}
          {/* For Small Screens d-md-none */}
          <div className="">
            <Row className="fulContDest">
              <Col xs={12} lg={4}>
                <div className="aligned" >
                  <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                  <span className="cityNameCount">
                    <a className="ml-3" href={`/propertylisting/${this.state.city_name1}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name1}</a>
                    <p className="ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount1} Properties Available</p></span>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <div className="aligned alCont" >
                  <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset30.png" alt="" />
                  <span className="cityNameCount">
                    <a className="ml-3" href={`/propertylisting/${this.state.city_name2}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name2}</a>
                    <p className="ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount2} Properties Available</p></span>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <div className="aligned alCont2" >
                  <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset31.png" alt="" />
                  <span className="cityNameCount">
                    <a className="ml-3" href={`/propertylisting/${this.state.city_name3}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name3}</a>
                    <p className="ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount3} Properties Available</p></span>
                </div>
              </Col>
              <Col className="d-none d-lg-block" lg={4}>
                <div className="aligned" >
                  <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                  <span className="cityNameCount">
                    <a className="ml-3" href={`/propertylisting/${this.state.city_name4}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name4}</a>
                    <p className="ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount4} Properties Available</p></span>
                </div>
              </Col>
              <Col className="d-none d-lg-block" lg={4}>
                <div className="aligned alCont" >
                  <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset30.png" alt="" />
                  <span className="cityNameCount">
                    <a className="ml-3" href={`/propertylisting/${this.state.city_name5}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name5}</a>
                    <p className="ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount5} Properties Available</p></span>
                </div>
              </Col>
              <Col className="d-none d-lg-block" lg={4}>
                <div className="aligned alCont2" >
                  <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset31.png" alt="" />
                  <span className="cityNameCount">
                    <a className="ml-3" href={`/propertylisting/${this.state.city_name6}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name6}</a>
                    <p className="ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount6} Properties Available</p></span>
                </div>
              </Col>
              <Col className="d-none d-lg-block" lg={4}>
                <div className="aligned" >
                  <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                  <span className="cityNameCount">
                    <a className="ml-3" href={`/propertylisting/${this.state.city_name7}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name7}</a>
                    <p className="ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount7} Properties Available</p></span>
                </div>
              </Col>
              <Col className="d-none d-lg-block" lg={4}>
                <div className="aligned alCont" >
                  <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset30.png" alt="" />
                  <span className="cityNameCount">
                    <a className="ml-3" href={`/propertylisting/${this.state.city_name8}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name8}</a>
                    <p className="ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount8} Properties Available</p></span>
                </div>
              </Col>
              <Col className="d-none d-lg-block" lg={4}>
                <div className="aligned alCont2" >
                  <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset31.png" alt="" />
                  <span className="cityNameCount">
                    <a className="ml-3" href={`/propertylisting/${this.state.city_name9}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name9}</a>
                    <p className="ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount9} Properties Available</p></span>
                </div>
              </Col>

            </Row>
          </div>

          <Row>
            <Col xs={12} className="text-center viewAllBtn">
              <Example />
            </Col>
          </Row>
          {/* <hr className="hrLineOrangeExplore" /> */}
        </Container>
      </section>
    );
  }
}
class Example extends Component {
  state = {
    city_name4: '', propertyCount4: '',
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
        <Accordion.Collapse eventKey="1">
          <Container>
            {/* For Larger Screens */}
            {/* <div className="d-none d-md-block">
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="" >
                <img className="" src="images/Asset32.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a className="" href="/">{this.state.city_name4}</a>
                <p className="RP">{this.state.propertyCount4} Properties Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="" >
                <img className="" src="images/Asset32.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name5}</a>
                <p className="RP">{this.state.propertyCount5} Properties Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset32.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name6}</a>
                <p className="RP">{this.state.propertyCount6} Properties Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset32.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name7}</a>
                <p className="RP">{this.state.propertyCount7} Properties Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset32.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name8}</a>
                <p className="RP">{this.state.propertyCount8} Properties Available</p>
              </Col>
            </Row>
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset32.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name9}</a>
                <p className="RP">{this.state.propertyCount9} Properties Available</p>
              </Col>
            </Row>   
            <Row className="mt-3" style={{ borderRadius: "15px 15px 15px 15px", borderStyle: "outset" }}>
              <Col xs={4} lg={3} className="">
                <img className="" src="images/Asset32.png" alt="City" />
              </Col>
              <Col xs={8} className="mt-4 cities">
                <a href="/">{this.state.city_name10}</a>
                <p className="RP">{this.state.propertyCount10} Properties Available</p>
              </Col>
            </Row>   
          </div> */}
            {/* For Small Screens d-md-none */}

            <div className="">
              <Row className="">
                <Col className="m-0 p-0" xs={12}>
                  <div className="aligned" >
                    <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                    <span className="cityNameCount">
                      <a className="cityA" href={`/propertylisting/${this.state.city_name4}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name4}</a>
                      <p className="cityC ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount4} Properties Available</p></span>
                  </div>
                </Col>

                <Col className="m-0 p-0" xs={12}>
                  <div className="aligned" >
                    <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                    <span className="cityNameCount">
                      <a className="cityA" href={`/propertylisting/${this.state.city_name5}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name5}</a>
                      <p className="cityC ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount5} Properties Available</p></span>
                  </div>
                </Col>

                <Col className="m-0 p-0" xs={12}>
                  <div className="aligned" >
                    <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                    <span className="cityNameCount">
                      <a className="cityA" href={`/propertylisting/${this.state.city_name6}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name6}</a>
                      <p className="cityC ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount6} Properties Available</p></span>
                  </div>
                </Col>

                <Col className="m-0 p-0" xs={12}>
                  <div className="aligned" >
                    <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                    <span className="cityNameCount">
                      <a className="cityA" href={`/propertylisting/${this.state.city_name7}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name7}</a>
                      <p className="cityC ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount7} Properties Available</p></span>
                  </div>
                </Col>

                <Col className="m-0 p-0" xs={12}>
                  <div className="aligned" >
                    <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                    <span className="cityNameCount">
                      <a className="cityA" href={`/propertylisting/${this.state.city_name8}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name8}</a>
                      <p className="cityC ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount8} Properties Available</p></span>
                  </div>
                </Col>

                <Col className="m-0 p-0" xs={12}>
                  <div className="aligned" >
                    <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                    <span className="cityNameCount">
                      <a className="cityA" href={`/propertylisting/${this.state.city_name9}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name9}</a>
                      <p className="cityC ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount9} Properties Available</p></span>
                  </div>
                </Col>

                <Col className="m-0 p-0" xs={12}>
                  <div className="aligned" >
                    <img className="cityPic" style={{ zIndex: 100 }} src="images/Asset32.png" alt="" />
                    <span className="cityNameCount">
                      <a className="cityA" href={`/propertylisting/${this.state.city_name10}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}/${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate() + 2}/2/1/3/ / / / /8`}>{this.state.city_name10}</a>
                      <p className="cityC ml-3" style={{ fontSize: "14px", fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>{this.state.propertyCount10} Properties Available</p></span>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Accordion.Collapse>
        <ContextAwareToggle eventKey="1"><CTB /></ContextAwareToggle>
      </Accordion>
    );
  }
}

export default Destination;
