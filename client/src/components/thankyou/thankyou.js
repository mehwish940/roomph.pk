import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "../header/Topbar";
import Steps from '../steps/steps';
import Footer from "../footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import History from "../history";

let checkIn = '';
let checkOut = '';
var Adults = '';
var Rooms = '';
var nights = '';
var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Getting Property Details
let idd = '';

const Properties = ({ properties }) => {
  return (
    <div>
      {properties.map((properties) => {
        if (properties.AccommodationId == idd) {
          return <Container className="mt-2 pl-3" style={{ backgroundColor: '#f6f6f6', borderRadius: '10px' }}>
            <Row>
              <Col className="mt-3 pr-0" xs={5}>
                <button className="BButton" type="button" style={{ fontFamily: 'JTMarnie Light' }}> Best Seller </button>
                <h6 className="mt-2 m-0" style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '16px' }}>{properties.AccommodationName}</h6>
                <img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidr" alt="" />
                <p className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}>
                  <b>{properties.Address}</b>
                </p>
              </Col>
              <Col className="mt-3" xs={7}>
                <img className="" style={{ borderRadius: '15px' }} src={properties.ImageURL} alt="Room" width={"180px"} height={"110px"} />
              </Col>
              <Col className="" xs={12}>
                <p className="m-0 p-0" style={{ fontFamily: 'Gotham Rounded Light', fontSize: '11px' }}>
                  <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Check-in: </span> <b>{checkIn.substring(7)}th {monthsArr[checkIn.slice(5, -3) - 1]}{monthsArr[checkIn.slice(5, -2) - 1]} {checkIn.substring(0, 4)}, {(new Date(checkIn)).toLocaleString('en-pk', { weekday: 'long' })}</b><br />
                  <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Check-out: </span> <b> {checkOut.substring(7)}th  {monthsArr[checkOut.slice(5, -3) - 1]}{monthsArr[checkOut.slice(5, -2) - 1]} {checkOut.substring(0, 4)}, {(new Date(checkOut)).toLocaleString('en-pk', { weekday: 'long' })}</b><br />
                  <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}> Stay: </span>  <b> {nights} Nights, {Rooms} Rooms, {Adults} Adults</b>
                </p>
              </Col>
            </Row>
            <hr style={{ color: '#000000', backgroundColor: '#000000', borderColor: '#000000' }} />
            <Row>
              <Col xs={6}>
                <p style={{ fontFamily: 'Gotham Rounded Light', fontSize: '11px', whiteSpace: 'nowrap' }}>
                  <span style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>{Rooms} Room ({nights} Nights): </span><b>Rs. 50,500</b> <br />
                  <span style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Tax (16% G.S.T.): </span><b> Rs. 8,800</b>
                </p>
              </Col>
              <Col xs={6} className="my-auto">
                <p className="ml-2" style={{ fontSize: '6px', fontFamily: 'JTMarnie Light', color: '#fff' }}><span style={{ borderRadius: "45px", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", backgroundColor: '#7ed34f', padding: '5px' }}>Free Breakfast</span> <span style={{ borderRadius: "45px", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", backgroundColor: '#7ed34f', padding: '5px', whiteSpace: 'nowrap' }}>Book Now Pay Later</span> </p>
              </Col>
            </Row>
          </Container>;
        }
        return null;
      })}
    </div>
  )
};


class Thankyou extends Component {
  state = {
    properties: [], pImgs: [], CityName: '',bookingId:'', Cancellation: '', Count: '', img: '',
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => {
        //console.clear();
        //const json = JSON.stringify(res);
        console.log(res);
        this.setState({
          properties: res.Success.result,
          Count: res.Success.result[0].TotalCount,
          CityName: res.Success.result[0].CityName,
         
          // img: res.Success.result[0].AccommodationImages[0].URL[0]
        })
      })
      .catch(err => console.log(err));
    this.callApi1()
      .then(res => {
        //console.clear();
        //const json = JSON.stringify(res);
        console.log(res);
        this.setState({
          bookingId: res.ReservationCreate.Success[0].Result[0].BookingID
          // img: res.Success.result[0].AccommodationImages[0].URL[0]
        })
      })
      .catch(err => console.log(err));

  }

  callApi = async () => {
    idd = this.props.match.params.id;
    checkIn = this.props.match.params.checkin;
    checkOut = this.props.match.params.checkout;
    Adults = this.props.match.params.adults;
    Rooms = this.props.match.params.rooms;
    nights = this.props.match.params.nights;
    console.log(this.props.match.params.city);
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postCity: this.props.match.params.city, postCheckIn: this.props.match.params.checkin, postCheckOut: this.props.match.params.checkout, postAdults: this.props.match.params.adults, postRooms: this.props.match.params.rooms }),
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    this.setState({ responseToPost: body });
    return body;
  };

  callApi1 = async () => {
    idd = this.props.match.params.id;
    checkIn = this.props.match.params.checkin;
    checkOut = this.props.match.params.checkout;
    Adults = this.props.match.params.adults;
    Rooms = this.props.match.params.rooms;
    nights = this.props.match.params.nights;
    console.log(this.props.match.params.city);
    const response = await fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postCity: this.props.match.params.city, postCheckIn: this.props.match.params.checkin, postCheckOut: this.props.match.params.checkout, postAdults: this.props.match.params.adults, postRooms: this.props.match.params.rooms, postId: idd, postName: this.props.match.params.name, postEmail: this.props.match.params.email, postPhone: this.props.match.params.phone, postUcity: this.props.match.params.ucity, postRoomId: this.props.match.params.roomId, postPlanId: this.props.match.params.planId, postRoomQ: this.props.match.params.roomq, postRate: this.props.match.params.rate  }),
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    this.setState({ responseToPost: body });
    return body;
  };
  render() {
    return (
      <div className="Thankyou">
        <Topbar />
        <Steps />
        <section className="">
          <Container>
            <Row>
              <Col xs={12} sm={6} className="mt-3">
                <h6 style={{ fontFamily: 'Montserrat Bold', fontSize: '12px', fontWeight: '900' }}>Thank you, {this.props.match.params.name}! Your booking is now complete.</h6>
                <ul className="ml-3" style={{ fontFamily: 'Gotham Rounded Book', fontSize: '12px' }}>
                  <li style={{ color: 'red' }}><span style={{ color: 'black' }}>You chose to pay at the property. Roomph will not charge your credit card.</span></li>
                  <li style={{ color: 'red', marginTop: '5px' }}><span style={{ color: 'black' }}>In the next 10 minutes, you will receive an email containing your booking details.</span></li>
                  <li style={{ color: 'red', marginTop: '5px' }}><span style={{ color: 'black' }}>Your Booking ID is {this.state.bookingId}.</span></li>
                  <li style={{ color: 'red', marginTop: '5px' }}><span style={{ color: 'black' }}>Please present this information at the check-in.</span></li>
                  <li style={{ color: 'red', marginTop: '5px' }}><span style={{ color: 'black' }}>To help manage your bookings, you can sign-in to Roomph if you did’nt book as a guest.</span></li>
                </ul>
              </Col>
            </Row>
          </Container>
          <Properties properties={this.state.properties} />
          {/* <Container className="mt-2 mb-2 pl-3" style={{ backgroundColor: '#f6f6f6',borderRadius:'10px' }}>
              <Row>
                <Col className="mt-3 pr-0" xs={5}>
                  <button className="BButton" type="button" style={{ fontFamily: 'JTMarnie Light' }}> Best Seller </button>
                  <h6 className="mt-2 m-0" style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '16px' }}>Harvey Islamabad</h6>
                  <img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidr" alt="" />
                  <p className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}>
                    <b>House 83, Street 5, E11/2, Golra, Islamabad</b>
                  </p>
                </Col>
                <Col className="mt-3" xs={7}>
                  <img className="" style={{ borderRadius: '15px' }} src="images/room.png" alt="Room" width={"200px"} height={"110px"} />
                </Col>
                <Col className="" xs={12}>
                  <p className="m-0 p-0" style={{ fontFamily: 'Gotham Rounded Light', fontSize: '11px' }}>
                    <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Check-in: </span> <b>15th Feb 2022, Thursday</b><br />
                    <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Check-out: </span> <b> 20th Feb 2022, Tuesday</b><br />
                    <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}> Stay: </span>  <b> 5 Nights, 1 Room, 2 Adults</b>
                  </p>
                </Col>
              </Row>
              <hr style={{ color: '#000000', backgroundColor: '#000000', borderColor: '#000000' }} />
              <Row>
                <Col xs={6}>
                  <p style={{ fontFamily: 'Gotham Rounded Light', fontSize: '11px', whiteSpace: 'nowrap' }}>
                    <span style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>1 Room (5 Nights): </span><b>Rs. 50,500</b> <br />
                    <span style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Tax (16% G.S.T.): </span><b> Rs. 8,800</b>
                  </p>
                </Col>
                <Col xs={6} className="my-auto">
                  <p className="" style={{ fontSize: '8px', fontFamily: 'JTMarnie Light', color: '#fff' }}><span style={{ borderRadius: "45px", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", backgroundColor: '#7ed34f', padding: '5px' }}>Free Breakfast</span> <span style={{ borderRadius: "45px", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", backgroundColor: '#7ed34f', padding: '5px', whiteSpace: 'nowrap' }}>Book Now Pay Later</span> </p>
                </Col>
              </Row>
            </Container> */}
        </section>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Thankyou);
