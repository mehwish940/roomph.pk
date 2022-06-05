import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import './registeration.css';

export class ChangePassword extends Component {
    state = {
        key: "", password: "", rePassword: '',
        post: '',
        responseToPost: '',
    };

    handlePasswordChanged(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleRePasswordChanged(event) {
        this.setState({
            rePassword: event.target.value
        });
    }

    handleKeyChanged(event) {
        this.setState({
            key: event.target.value
        });
    }


    async handleButtonClicked(e) {
        e.preventDefault();
        var password = this.state.password;
        var rePassword = this.state.rePassword;
        var key = this.state.key;
        const response = await fetch('/api/changepassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postKey:key, postPassword: password, postRePassword: rePassword }),
        })
        console.clear();
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(body.result.data[0].message);
        this.setState({ responseToPost: body });
        this.setState({
            // message: body.result.data[0].message,
    })
        return body;
    }

    render() {
        return (
            <section className="">
                <h4 className="text-center" style={{ fontFamily: "Gotham Rounded Medium", fontSize: "17px" }}>Change Password</h4>
                <Container style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)" }}>
                    <Row>
                        <Col xs={12} className="regFrom">
                            <Form>
                                <Form.Group className="mt-3 mb-2" controlId="formBasicEmail">
                                    <Form.Control className="mb-3" type="password" value={this.state.password} onChange={this.handlePasswordChanged.bind(this)} placeholder="Enter Password" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                    <Form.Control className="mb-3" type="password" value={this.state.rePassword} onChange={this.handleRePasswordChanged.bind(this)} placeholder="Enter Confirmed Password" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                    <Form.Control className="mb-3" type="text" value={this.state.key} onChange={this.handleKeyChanged.bind(this)} placeholder="Enter Key Recieved on Email" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                </Form.Group>
                                <button style={{ fontFamily: "Gotham Rounded Medium" }} className="signupBtn mb-3" type="submit" onClick={this.handleButtonClicked.bind(this)}>Change Password</button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }
}

export default ChangePassword;
