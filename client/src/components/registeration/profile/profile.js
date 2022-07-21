import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../../header/Topbar";
import Footer from "../../footer/Footer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './profile.css';

export default function Profile() {
    const [fname, setfName] = useState([]);
    const [lname, setlName] = useState([]);
    const [email, setEmail] = useState([]);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            console.log(user);
            setfName(user.result.data[0].fname);
            setlName(user.result.data[0].lname);
            setEmail(user.result.data[0].email);
        }
    }, []);
    return (
        <section className="">
            <Topbar />
            <Container className="mb-3">
                <Row>
                    <Col className="mt-3" xs={9}>
                        <h5 className="profileHeading">Personal details</h5>
                        <p className="profileText">Update your info and find out how it’s used</p>
                    </Col>
                    <Col>
                        <AccountCircleIcon fontSize='70px' className="profileIconP" />
                    </Col>
                </Row>
                <hr className="hrLine" />
                <Row>
                    <Col className="" xs={10}>
                        <h5 className="profileHeading">Name</h5>
                        <p className="profileText">{fname}{' '}{lname}</p>
                    </Col>
                </Row>
                <hr className="hrLine" />
                <Row>
                    <Col className="" xs={10}>
                        <h5 className="profileHeading">Display Name</h5>
                        <p className="profileText">{fname}</p>
                    </Col>
                </Row>
                <hr className="hrLine" />
                <Row>
                    <Col className="" xs={10}>
                        <h5 className="profileHeading">Email <button className="verified"> Verified </button></h5>
                        <p className="profileText">{email}</p>
                        <p className="profileText">This is the email adress you use to sign in. it’s also where we send your booking confirmations.</p>
                    </Col>
                </Row>
                {/* <hr className="hrLine" />
                <Row>
                    <Col className="" xs={10}>
                        <h5 className="profileHeading">Phone Number</h5>
                        <p className="profileText">Add your phone number</p>
                        <p className="profileText">Properties or attractions you bok can use this number to contact you. you can also use it to sign in</p>
                    </Col>
                </Row>
                <hr className="hrLine" />
                <Row>
                    <Col className="" xs={10}>
                        <h5 className="profileHeading">Password</h5>
                        <p className="profileText">Change your password</p>
                    </Col>
                </Row> */}
            </Container>
            <Footer />
        </section>
    );

}

