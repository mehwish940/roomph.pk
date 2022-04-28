import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import './registeration.css';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

export class Registration extends Component {
    render() {
    return (
            <section className="ml-3 mr-3">
                <h4 className="text-center" style={{ fontFamily: "Gotham Rounded Medium",fontSize:"17px"}}>Sign Up</h4>
                <Container style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)" }}>
                    <Row>
                        <Col xs={12} className="regFrom">
                            <Form>
                                <Form.Group className="mt-3 mb-2" controlId="formBasicEmail">
                                    <Form.Control className="mb-3" type="text" placeholder="Enter Name" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px"  }} />
                                    <Form.Control className="mb-3" type="email" placeholder="Enter Email" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px"  }} />
                                    <Form.Control className="mb-3" type="password" placeholder="Enter Password" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px"  }} />
                                    <Form.Control className="mb-3" type="password" placeholder="Enter Confirmed Password" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px"  }} />
                                    <Form.Control className="mb-3" type="text" placeholder="Enter Phone Number" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px"  }} />
                                </Form.Group>
                                <button style={{ fontFamily: "Gotham Rounded Medium" }} className="signupBtn" type="submit">Sign up</button>
                            </Form>
                            <p className="mt-1"  style={{ fontFamily: "Montserrat Thin", margin:"0", padding:"0" }}>or sign up with</p>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col xs={6}>
                            <button className="GBtn" style={{ height: "20px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Gotham Medium" }}><FcGoogle /> {' '}<span style={{color: "#EF4E22"}}>Google</span></button>
                        </Col>
                        <Col xs={6}>
                            <button className="FBtn" style={{ height: "20px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Gotham Medium" }}><SiFacebook /> {' '} <span style={{color: "#EF4E22"}}>Facebook</span></button>
                        </Col>
                        <Col className="text-center mt-1">
                            <p style={{fontSize:"10px", fontFamily: "Gotham Medium" }}>By signing up, I am agreeing to Roomph’s <span style={{ color: "#EF4E22" }}>Terms & Conditions</span>
                                {' '}and {' '}<span style={{ color: "#EF4E22" }}>Privacy Policy</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Registration;
