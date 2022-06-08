import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import './registeration.css';

export class VerifyAccount extends Component {
    state = {
        key: "",
        post: '',
        responseToPost: '',
    };


    handleKeyChanged(event) {
        this.setState({
            key: event.target.value
        });
    }


    async handleButtonClicked(e) {
        e.preventDefault();
        var key = this.state.key;
        const response = await fetch('/api/verifyaccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postKey: key}),
        })
        console.clear();
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(body.result.data[0].message);
        this.setState({ responseToPost: body });
        this.setState({
            message: body.result.data[0].message,
        })
        return body;
    }

    render() {
        return (
            <section className="p-3">
                <h4 className="text-center" style={{ fontFamily: "Gotham Rounded Medium", fontSize: "17px" }}>Verify Account</h4>
                <Container style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)" }}>
                    <Row>
                        <Col xs={12} className="regFrom">
                            <Form>
                                <Form.Group className="mt-3 mb-2" controlId="formBasicEmail">
                                    <Form.Control className="mb-3" type="text" value={this.state.key} onChange={this.handleKeyChanged.bind(this)} placeholder="Enter Key Recieved on Email" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                </Form.Group>
                                <p>{this.state.message}</p>
                                <button style={{ fontFamily: "Gotham Rounded Medium" }} className="signupBtn mb-3" type="submit" onClick={this.handleButtonClicked.bind(this)}>Verify</button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }
}

export default VerifyAccount;
