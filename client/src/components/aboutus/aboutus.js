import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../header/Topbar";
import { BiMap } from "react-icons/bi";
import Footer from "../footer/Footer";
import './aboutus.css';

var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export class AboutUs extends Component {
    render() {
        return (
            <section className="">
                <Topbar />
                <Container fluid>
                    <Row className="p-2" style={{ backgroundColor: "white", borderRadius: "0px 0px 0px 0px", border: "1px solid rgb(205, 206, 206)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)" }}>
                        {/* For larger Screens */}
                        <Col className="d-none d-md-block" xs={10} style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                            <Row className="p-2">
                                <Col>
                                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', textTransform: 'capitalize' }}>Islamabad</button>
                                    <div >
                                        <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>12-13 </button>
                                        {/* <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {(new Date()).toLocaleString('default', { month: 'short' })} - {this.props.match.params.checkout.substring(7)}th {(new Date()).toLocaleString('default', { month: 'short' })} </button> */}
                                        <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . 2 guests</button>
                                    </div>
                                </Col>
                                <Col xs={2} className="my-auto mx-auto">
                                    <img className="searchLogo float-right" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
                                </Col>
                            </Row>
                        </Col>
                        {/* For Smaller Screens */}
                        <Col xs={8} className="d-md-none" style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                            <Row className="">
                                <Col>
                                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', textTransform: 'capitalize' }}>Islamabad</button>
                                    <div style={{ height: '15px' }}>

                                    </div>
                                    <div style={{ position: 'absolute', top: '15px' }}>
                                        <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>10th - 12th Jun </button>
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
                <Container fluid>
                    <Row>
                        <Col className="m-0 p-0">
                            <h4 className="aboutUsHeading"><span className="abUsText"><span className="aboutUsText"> Quality</span> <br /> <span className="aboutUsText"> Consistency</span> <br /> <span className="aboutUsText">& Bargain</span><br /> <span className="aboutUsText">Pricess</span></span></h4>
                            <p className="AboutUsT mb-1 pb-1">
                                Roomph was founded in 2019 and aims to become Pakistan’s first and largest hotel company that provides budget accommodation. Roomph has revolutionized the fragmented and legacy-driven budget hospitality space in Pakistan by enabling standardization of services to make your travel experience better, consistent and memorable every time. Our aim is to provide predictable, affordable and available budget-room accommodation to millions of travellers in Pakistan.<br /><br />
                                All Roomph accommodations include:<br />
                                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset6.svg"} width={25} alt="" />Free Wifi</p>
                                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset7.svg"} width={25} alt="" />Air-Conditioning</p>
                                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset19.svg"} width={25} alt="" />Option to Book Now and Pay later</p>
                                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset23.svg"} width={25} alt="" />Well-maintained washrooms</p>
                            </p>
                        </Col>
                    </Row>
                    <Row className="p-2">
                        <Col className="m-0 p-0">
                            <div className="about-property position-relative text-center text-md-right">
                                <img src="images/aboutus-imgs/circle-1.png" className="rounded-circle img-fluid img-width" alt="" />
                                <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow">Lahore</p>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="about-property position-relative text-center text-md-right">
                                <img src="images/aboutus-imgs/circle-2.png" className="rounded-circle img-fluid img-width" alt="" />
                                <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow">Karachi</p>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="about-property position-relative text-center text-md-right">
                                <img src="images/aboutus-imgs/circle-3.png" className="rounded-circle img-fluid img-width" alt="" />
                                <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow">Islamabad</p>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="about-property position-relative text-center text-md-right">
                                <img src="images/aboutus-imgs/circle-4.png" className="rounded-circle img-fluid img-width" alt="" />
                                <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow">Rawalpindi</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="p-2">
                        <Col className="m-0 p-0">
                            <div className="about-property position-relative text-center text-md-right">
                                <img src="images/aboutus-imgs/circle-5.png" className="rounded-circle img-fluid img-width" alt="" />
                                <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow">Peshawar</p>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="about-property position-relative text-center text-md-right">
                                <img src="images/aboutus-imgs/circle-6.png" className="rounded-circle img-fluid img-width" alt="" />
                                <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow">Multan</p>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="about-property position-relative text-center text-md-right">
                                <img src="images/aboutus-imgs/circle-7.png" className="rounded-circle img-fluid img-width" alt="" />
                                <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow">Murree</p>
                            </div>
                        </Col>
                        <Col className="m-0 p-0">
                            <div className="about-property position-relative text-center text-md-right">
                                <img src="images/aboutus-imgs/circle-8.png" className="rounded-circle img-fluid img-width" alt="" />
                                <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow">Naran</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </section>
        );
    }
}

export default AboutUs;
