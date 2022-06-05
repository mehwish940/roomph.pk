import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import './registeration.css';
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Signup from './signup';
import ForgetPass from './forgotpass';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const aButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // overflow:'scroll',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function Registration() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    // logout the user
    const handleLogout = () => {
        setUser({});
        setFname("");
        setPassword("");
        localStorage.clear();
        window.location.reload(false);
    };
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const user = { fname, password };
        setEmail(email);
        setPassword(password);
        const response = await fetch('/api/signin', {
            method: 'POST', user,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postEmail: email, postPassword: password }),
        })
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        //this.setState({ responseToPost: body });
        console.clear()
        console.log(body.result.status[0])
        setUser(body);
        localStorage.setItem("user", JSON.stringify(body));

        var fname = body.result.data[0].fname;
        if (fname == undefined) {
            setFname(body.result.data[0].message);
        }
        else {
            setFname(`${fname} you are logged in`);
        }
        //console.log(fname);
        return body;
    }
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    console.log(user)
    if (user) {
        if (user.result.data[0].fname == undefined) {
            setUser({});
            setFname("");
            setPassword("");
            localStorage.clear();
           
        } else {
            return (
                <div className='p-3'>
                    <p className="text-center" style={{ fontFamily: "Gotham Rounded Medium", fontSize: "17px" }}>{user.result.data[0].fname} you are Logged In</p>
                    <button style={{ fontFamily: "Gotham Rounded Medium" }} className="signupBtn" onClick={handleLogout}>Logout</button>
                </div>
            );
        }
    }

    return (
        <section className="m-3">
            <div>
                <Modal
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"

                >
                    <Box sx={{ ...style, width: 350, height: 500, margin: 0, padding: 0 }}>
                        <button onClick={handleClose1} className="mt-2 ml-2" style={{ border: "none", background: "none" }}><MdOutlineKeyboardArrowLeft /></button>
                        <ForgetPass />
                    </Box>
                </Modal>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                >
                    <Box sx={{ ...style1, width: 350, margin: 0, padding: 0, height: 500 }}>
                        <button onClick={handleClose} className="mt-2 ml-2" style={{ border: "none", background: "none" }}><MdOutlineKeyboardArrowLeft /></button>
                        <Signup />
                    </Box>
                </Modal>
            </div>
            <h6 className="text-center mt-3" style={{ fontFamily: "Gotham Rounded Medium", fontSize: "17px" }}>Sign in</h6>
            <Container style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)" }}>
                <Row>
                    <Col xs={12} className="regFrom">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mt-3 mb-2" controlId="formBasicEmail">
                                <Form.Control className="mb-3" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Email" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                                <Form.Control className="mb-3" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Password" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                            </Form.Group>
                            <button style={{ fontFamily: "Gotham Rounded Medium" }} className="signupBtn" type="submit">Sign in</button>
                            <Container>
                                <Row>
                                    <Col className="mt-1 aBtn" xs={6}>
                                        <aButton variant="text" onClick={handleOpen} style={{ border: "none", fontSize: "11px", color: "#EF4E22", backgroundColor: "white", fontFamily: "Montserrat Thin", cursor: "pointer" }}>Create Account</aButton>
                                    </Col>
                                    <Col className="mt-1 aBtn text-right" xs={6}>
                                        <aButton variant="text" size="small" onClick={handleOpen1} style={{ border: "none", fontSize: "11px", color: "#EF4E22", backgroundColor: "white", fontFamily: "Montserrat Thin", cursor: "pointer" }}>Forgot Password?</aButton>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                        <p className="mt-3" style={{ fontFamily: "Montserrat Thin" }}>or sign in with</p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}>
                        <button className="GBtn" style={{ height: "20px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Gotham Medium" }}><FcGoogle /> {' '}<span style={{ color: "#EF4E22" }}>Google</span></button>
                    </Col>
                    <Col xs={6}>
                        <button className="FBtn" style={{ height: "20px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Gotham Medium" }}><SiFacebook /> {' '} <span style={{ color: "#EF4E22" }}>Facebook</span></button>
                    </Col>
                    <Col className="text-center mt-3">
                        <p style={{ fontSize: "10px", fontFamily: "Gotham Medium" }}>By signing in, I am agreeing to Roomph’s <span style={{ color: "#EF4E22" }}>Terms & Conditions</span>
                            {' '}and {' '}<span style={{ color: "#EF4E22" }}>Privacy Policy</span></p>
                    </Col>
                </Row>
            </Container>
        </section>
    );

}

