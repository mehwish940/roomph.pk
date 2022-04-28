import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import './registeration.css';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

export class Registration extends Component {
    render() {
    return (
            <section className="m-3">
                <h4 className="text-center mt-3" style={{ fontFamily: "Gotham Rounded Medium",fontSize:"17px" }}>Forgot Password</h4>
                <Container style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)" }}>
                    <Row>
                        <Col xs={12} className="regFrom">
                            <Form>
                                <Form.Group className="mt-3 mb-2" controlId="formBasicEmail">
                                    <Form.Control className="mb-3" type="email" placeholder="Enter Email" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                </Form.Group>
                                <button style={{ fontFamily: "Gotham Rounded Medium" }} className="signupBtn" type="submit">Reset Password</button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="text-center mt-3">
                            <p style={{ fontSize: "10px", fontFamily: "Gotham Medium" }}>Please enter your email in the box above. We will send you a
                                link to access further instructions.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Registration;
