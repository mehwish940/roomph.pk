import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import './registeration.css';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ChangePassword from './changepassword';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


let handleOpen = false;
let handleClose = true;

const aButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));
const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 370,
    overflow: 'scroll',
    height: 550,
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
                    <Box sx={{ ...style1, margin: 0 }}>
                    <button onClick={handleClose} className="mt-2 ml-2" style={{border:"none", background:"none"}}><MdOutlineKeyboardArrowLeft /></button>
                        <ChangePassword />
                        {/* <div class="text-centerasse">
                <button className="dateDoneBtn mb-3" type="submit" onClick={handleClose}>Done</button>
              </div> */}
                    </Box>
                </Modal>
            </div>
        );
    }
}

export class Registration extends Component {
    state = {
        email: "",
        post: '',
        responseToPost: '',
    };

    handleEmailChanged(event) {
        this.setState({
            email: event.target.value
        });
    }
    async handleButtonClicked(e) {
        e.preventDefault();
        var email = this.state.email;
        const response = await fetch('/api/forgot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postEmail: email }),
        })
        console.clear();
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(body);
        //     this.setState({ responseToPost: body });
        //     this.setState({
        //         message: body.result.data[0].message,
        // })
        //     return body;
    }
    render() {
        return (
            <section className="m-3">
                <BasicModal display={true} />
                <h4 className="text-center mt-3" style={{ fontFamily: "Gotham Rounded Medium", fontSize: "17px" }}>Forgot Password</h4>
                <Container style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)" }}>
                    <Row>
                        <Col xs={12} className="regFrom">
                            <Form>
                                <Form.Group className="mt-3 mb-2" controlId="formBasicEmail">
                                    <Form.Control className="mb-3" value={this.state.email} onChange={this.handleEmailChanged.bind(this)} type="email" placeholder="Enter Email" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                </Form.Group>
                                <Col className="mb-1 aBtn m-0 p-0" xs={6}>
                                    <aButton variant="text" onClick={handleOpen} style={{ border: "none", fontSize: "11px", color: "#EF4E22", backgroundColor: "white", fontFamily: "Montserrat Thin", cursor: "pointer" }}>Change Password</aButton>
                                </Col>
                                <button style={{ fontFamily: "Gotham Rounded Medium" }} className="signupBtn" type="submit" onClick={this.handleButtonClicked.bind(this)}>Reset Password</button>
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
