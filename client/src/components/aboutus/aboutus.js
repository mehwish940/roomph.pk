import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../header/Topbar";
import Footer from "../footer/Footer";
import './aboutus.css';

export class AboutUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <section className="">
                <Topbar />
                <Container fluid>
                    <Row>
                        <Col className="m-0 p-0">
                            <h5 className="aboutUsHeading">Quality
                                Consistency
                                & Bargain
                                Prices</h5>
                            <p className="textContainerAU AboutUsT mb-1 pb-1">
                                Roomph was founded in 2019 and aims to become Pakistan’s first and largest hotel company that provides budget accommodation. Roomph has revolutionized the fragmented and legacy driven budget hospitality space in Pakistan by enabling standardization of services to make your travel experience better, consistent and memorable every time. Our aim is to provide predictable, affordable and available budget room accommodation to millions of travellers in Pakistan.<br /><br />
                                All Roomph accommodations include:<br />
                                <p className="m-1 p-0 ltAU" style={{ fontFamily: 'Montserrat Regular' }}><img className=" mr-2" src={process.env.PUBLIC_URL + "/images/Asset6.svg"} width={25} alt="" />Free Wifi</p>
                                <p className="m-1 p-0 ltAU" style={{ fontFamily: 'Montserrat Regular' }}><img className="air mr-2" src={process.env.PUBLIC_URL + "/images/Asset7.svg"} width={25} alt="" />Air-Conditioning</p>
                                <p className="m-1 p-0 ltAU" style={{ fontFamily: 'Montserrat Regular' }}><img className=" mr-2" src={process.env.PUBLIC_URL + "/images/Asset19new.svg"} width={23} alt="" />Option to Book Now and Pay later</p>
                                <p className="m-1 p-0 ltAU" style={{ fontFamily: 'Montserrat Regular' }}><img className="wash mr-2" src={process.env.PUBLIC_URL + "/images/Asset23.svg"} width={25} alt="" />Well-maintained washrooms</p>
                            </p>
                        </Col>
                    </Row>
                    <div className="aboutUsCitiesContainer">
                        <Row className="p-2">
                            <Col className="m-0 p-0">
                                <div className="about-property position-relative text-center text-md-right">
                                    <img src="images/aboutus-imgs/circle-1.png" className="rounded-circle img-fluid img-width" alt="" />
                                    <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow cityFontSizeAU">Lahore</p>
                                </div>
                            </Col>
                            <Col className="m-0 p-0">
                                <div className="about-property position-relative text-center text-md-right">
                                    <img src="images/aboutus-imgs/circle-2.png" className="rounded-circle img-fluid img-width" alt="" />
                                    <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow cityFontSizeAU">Karachi</p>
                                </div>
                            </Col>
                            <Col className="m-0 p-0">
                                <div className="about-property position-relative text-center text-md-right">
                                    <img src="images/aboutus-imgs/circle-3.png" className="rounded-circle img-fluid img-width" alt="" />
                                    <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow cityFontSizeAU">Islamabad</p>
                                </div>
                            </Col>
                            <Col className="m-0 p-0">
                                <div className="about-property position-relative text-center text-md-right">
                                    <img src="images/aboutus-imgs/circle-4.png" className="rounded-circle img-fluid img-width" alt="" />
                                    <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow cityFontSizeAU">Rawalpindi</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="p-2 mb-4">
                            <Col className="m-0 p-0">
                                <div className="about-property position-relative text-center text-md-right">
                                    <img src="images/aboutus-imgs/circle-5.png" className="rounded-circle img-fluid img-width" alt="" />
                                    <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow cityFontSizeAU">Peshawar</p>
                                </div>
                            </Col>
                            <Col className="m-0 p-0">
                                <div className="about-property position-relative text-center text-md-right">
                                    <img src="images/aboutus-imgs/circle-6.png" className="rounded-circle img-fluid img-width" alt="" />
                                    <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow cityFontSizeAU">Multan</p>
                                </div>
                            </Col>
                            <Col className="m-0 p-0">
                                <div className="about-property position-relative text-center text-md-right">
                                    <img src="images/aboutus-imgs/circle-7.png" className="rounded-circle img-fluid img-width" alt="" />
                                    <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow cityFontSizeAU">Murree</p>
                                </div>
                            </Col>
                            <Col className="m-0 p-0">
                                <div className="about-property position-relative text-center text-md-right">
                                    <img src="images/aboutus-imgs/circle-8.png" className="rounded-circle img-fluid img-width" alt="" />
                                    <p className="centered ft-30 gr-medium pr-1 text-right text-white w-100 txt-shadow cityFontSizeAU">Naran</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Footer />
            </section>
        );
    }
}

export default AboutUs;
