import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import './registeration.css';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import VerifyAccount from './verifyaccount';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

let handleOpen = false;
let handleClose = true;


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 370,
    height: 260,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    handleOpen = () => setOpen(true);
    handleClose = () => setOpen(false);
    if (props.display) {
        return (
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                >
                    <Box sx={{ ...style, margin: 0, padding: 0 }}>
                        <button onClick={handleClose} className="mt-2 ml-2" style={{ border: "none", background: "none" }}><MdOutlineKeyboardArrowLeft /></button>
                        <VerifyAccount />
                    </Box>
                </Modal>
            </div>
        );
    }
}

export class Registration extends Component {
    state = {
        message: '', message1: '', name: "", email: "", password: "", rePassword: '', phoneNo: "",
        post: '',
        responseToPost: '',
    };

    handleNameChanged(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleEmailChanged(event) {
        this.setState({
            email: event.target.value
        });
    }
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

    handlePhoneNoChanged(event) {
        this.setState({
            phoneNo: event.target.value
        });
    }


    async handleButtonClicked(e) {
        e.preventDefault();
        var name = this.state.name;
        var email = this.state.email;
        var password = this.state.password;
        var phoneNo = this.state.phoneNo;
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postName: name, postEmail: email, postPhoneNo: phoneNo, postPassword: password }),
        })
        console.clear();
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(body);
        this.setState({ responseToPost: body });
        this.setState({
            message: body.result.data[0].message,
            message1: body.result.data[0].email[0]
        })
        //History.push(`/thankyou/${this.props.match.params.city}/${this.props.match.params.checkin}/${this.props.match.params.checkout}/${this.props.match.params.adults}/${this.props.match.params.rooms}/${this.props.match.params.nights}/${idd}/${name}/${email}/${phoneNo}/${uCity}/${promoCode}/${this.props.match.params.roomId}/${this.props.match.params.planId}/${this.props.match.params.roomq}/${this.props.match.params.rate}`)
    }

    render() {
        return (
            <section className="ml-3 mr-3">
                <BasicModal display={true} />
                <h4 className="text-center" style={{ fontFamily: "Gotham Rounded Medium", fontSize: "17px" }}>Sign Up</h4>
                <Container style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)" }}>
                    <Row>
                        <Col xs={12} className="regFrom">
                            <Form>
                                <Form.Group className="mt-3 mb-2" controlId="formBasicEmail">
                                    <Form.Control className="mb-3" type="text" value={this.state.name} onChange={this.handleNameChanged.bind(this)} placeholder="Enter Name" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                    <Form.Control className="mb-3" type="email" value={this.state.email} onChange={this.handleEmailChanged.bind(this)} placeholder="Enter Email" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                    <Form.Control className="mb-3" type="password" value={this.state.password} onChange={this.handlePasswordChanged.bind(this)} placeholder="Enter Password" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                    <Form.Control className="mb-3" type="password" value={this.state.rePassword} onChange={this.handleRePasswordChanged.bind(this)} placeholder="Enter Confirmed Password" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                    <Form.Control className="" type="text" value={this.state.phoneNo} onChange={this.handlePhoneNoChanged.bind(this)} placeholder="Enter Phone Number" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                    <Container>
                                        <Row>
                                            <Col className="mt-1 aBtn" xs={6}>
                                                <aButton variant="text" onClick={handleOpen} style={{ border: "none", fontSize: "11px", color: "#EF4E22", backgroundColor: "white", fontFamily: "Montserrat Thin", cursor: "pointer" }}>Verify Account</aButton>
                                            </Col>
                                            <Col className="mt-1 aBtn text-right" xs={6}>
                                                <aButton variant="text" size="small" onClick={handleOpen} style={{ border: "none", fontSize: "11px", color: "#EF4E22", backgroundColor: "white", fontFamily: "Montserrat Thin", cursor: "pointer" }}>Sign in</aButton>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form.Group>
                                <button style={{ fontFamily: "Gotham Rounded Medium" }} className="signupBtn" type="submit" onClick={this.handleButtonClicked.bind(this)}>Sign up</button>
                            </Form>
                            <p className="mt-2 m-0 p-0">Please Verify Account Befor Sign in</p>
                            <p className="mt-2 m-0 p-0">{this.state.message}</p>
                            <p className="mt-1" style={{ fontFamily: "Montserrat Thin", margin: "0", padding: "0" }}>or sign up with</p>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col xs={6}>
                            <button className="GBtn" style={{ height: "20px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Gotham Medium" }}><FcGoogle /> {' '}<span style={{ color: "#EF4E22" }}>Google</span></button>
                        </Col>
                        <Col xs={6}>
                            <button className="FBtn" style={{ height: "20px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Gotham Medium" }}><SiFacebook /> {' '} <span style={{ color: "#EF4E22" }}>Facebook</span></button>
                        </Col>
                        <Col className="text-center mt-1">
                            <p style={{ fontSize: "10px", fontFamily: "Gotham Medium" }}>By signing up, I am agreeing to Roomph’s <span style={{ color: "#EF4E22" }}>Terms & Conditions</span>
                                {' '}and {' '}<span style={{ color: "#EF4E22" }}>Privacy Policy</span></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Registration;
