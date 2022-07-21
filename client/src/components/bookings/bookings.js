import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../header/Topbar";
import Spinner from 'react-bootstrap/Spinner';
import Footer from "../footer/Footer";
import './bookings.css';

var profId = '';
const BookingDetails = ({ bookings }) => {
    console.log(bookings)
    return (
        <div>
            {bookings.map((book, index) => {
                return (<Container className="m-0 p-0" key={index} fluid>
                    <Row className="RRR justify-content-center">
                        <Col xs={11} lg={11} md={11} className="text-md-center m-0 p-0">
                            <div className="bcard1">
                                <div className="bcontainer1">
                                    <img className={"imh1"} src={book.ImageURL} alt="" />
                                    {/* <img className={"imh1"} src={process.env.PUBLIC_URL + "/images/slide-hotel.png"} alt="" /> */}
                                    <button className="travelTipsBtn" style={{ fontSize: '14px', width: '100px' }} type="button"> {book.BookingStatus[0]} </button>
                                    <p className="mb-1" style={{ fontSize: '18px', fontFamily: 'Gotham Rounded Bold', marginLeft: '15px' }}><span className="mr-2  hotN">{book.AccommodationName[0]}</span>{
                                        Array.apply(null, { length: book.Rating[0] ? Number(book.Rating[0]) : 0 }).map(Number.call, Number).map((item) => {
                                            return <img key={item} src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidD starss float-right" alt="" />
                                        })
                                    }</p>
                                    {/* <h6 className="blogName"><a href="/singleblog">Hotel</a></h6> */}
                                    <p className="mb-1 float-right"><b style={{ fontSize: '13px' }}>Price: {' '}</b>{book.TotalPrice[0]}</p>
                                    <p className="mb-1"><b style={{ fontSize: '13px' }}>Booking ID:{' '}</b>{book.BookingID[0]}</p>
                                    <p className="mb-1"><b style={{ fontSize: '13px' }}>Pin Code:{' '}</b>{book.PinCode[0]}</p>
                                    <p>Booking from <i>{book.ArrivalDate[0]}</i>{' '} to <i>{book.DepartureDate[0]}</i></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>)
            })
            }
        </div>
    )
};
export default class Bookings extends Component {
    state = {
        bookin: [], loading: false,
        post: '',
        responseToPost: '',
    };

    componentDidMount() {
        this.callApi()
            .then(res => {
                this.setState({
                    bookin: res.getHotels.Success[0].Result,
                });
                this.setState({ loading: true })
            })
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postProfileId: profId }),
        })
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        this.setState({ responseToPost: body });
        return body;
    };
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const profileId = user.result.data[0].profile_id;
            profId = profileId
            //console.log(profId, profileId)
        }
        return (
            <section className="">
                <Topbar />
                <Container className="p-1 mb-3" style={{}} fluid>
                    <Row>
                        <Col className="mt-3 blH text-center">
                            <h4>My Bookings</h4>
                        </Col>
                    </Row>
                    {this.state.loading ? <BookingDetails bookings={this.state.bookin} /> : <Spinner className="ml-2" animation="grow" />}
                </Container>
                <Footer />
            </section>
        );
    }
}

