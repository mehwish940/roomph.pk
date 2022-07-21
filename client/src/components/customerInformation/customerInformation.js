import React, { Component } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "aos/dist/aos.css";
import Topbar from "../header/Topbar";
import Footer from "../footer/Footer";
import { Container, Row, Col, Form } from "react-bootstrap";
import Steps from '../steps/steps';
import './customerInformation.css';
import { withRouter } from "react-router-dom";
import History from "../history";

let checkIn = '';
let checkOut = '';
var Adults = '';
var rate = '';
var Rooms = '';
var nights = '';
var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Getting Property Details
let idd = '';

const Tax = ({ taxdetail }) => {
  return (
    <div>
      {taxdetail.map((tax, index) => (
        <p key={index} className="m-0 p-0" style={{ fontFamily: 'Gotham Rounded Light', fontSize: '11px', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Tax ({tax.$.TaxPercent} {tax.$.TaxName}): </span><b> Rs. {tax.$.TaxPercent * rate / 100}</b>
        </p>
      )
      )}
    </div>
  )
};
class CustomerInformation extends Component {
  state = {
    loading: false, tax: [], properties: [], loading: false, name: "", email: "", reEmail: "", phoneNo: "", uCity: "", promoCode: "", pImgs: [], CityName: '', Cancellation: '', Count: '', img: '',
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

  handleReEmailChanged(event) {
    this.setState({
      reEmail: event.target.value
    });
  }

  handlePhoneNoChanged(event) {
    this.setState({
      phoneNo: event.target.value
    });
  }

  handleCityChanged(event) {
    this.setState({
      uCity: event.target.value
    });
  }

  handlePromoCodeChanged(event) {
    this.setState({
      promoCode: event.target.value
    });
  }

  handleButtonClicked() {
    var name = this.state.name;
    var email = this.state.email;
    var reEmail = this.state.reEmail;
    var phoneNo = this.state.phoneNo;
    var uCity = this.state.uCity;
    var promoCode = this.state.promoCode;
    History.push(`/thankyou/${this.props.match.params.city}/${this.props.match.params.checkin}/${this.props.match.params.checkout}/${this.props.match.params.adults}/${this.props.match.params.rooms}/${this.props.match.params.nights}/${idd}/${name}/${email}/${phoneNo}/${uCity}/${promoCode}/${this.props.match.params.roomId}/${this.props.match.params.planId}/${this.props.match.params.roomq}/${this.props.match.params.rate}`)

  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        //console.clear();
        //const json = JSON.stringify(res);
        console.log(res);
        this.setState({
          facilities: res.getHotels.Success[0].Result[0].hotelExtras[0].Facility,
          logo: res.getHotels.Success[0].Result[0].LogoURL,
          hotelName: res.getHotels.Success[0].Result[0].AccommodationName,
          price: res.getHotels.Success[0].Result[0].Max_MinRate,
          address: res.getHotels.Success[0].Result[0].Address,
          rating: res.getHotels.Success[0].Result[0].Rating,
          userRating: res.getHotels.Success[0].Result[0].UserRating,
          description: res.getHotels.Success[0].Result[0].GeneralDescription,
          nearby: res.getHotels.Success[0].Result[0].NearbyAreas,
          img1: res.getHotels.Success[0].Result[0].hotelImages[0]?.Image_URLs[0].$.Image_URL,
          img2: res.getHotels.Success[0].Result[0].hotelImages[0]?.Image_URLs[1].$.Image_URL,
          img3: res.getHotels.Success[0].Result[0].hotelImages[0]?.Image_URLs[2].$.Image_URL,
          img4: res.getHotels.Success[0].Result[0].hotelImages[0]?.Image_URLs[3].$.Image_URL,
          img5: res.getHotels.Success[0].Result[0].hotelImages[0]?.Image_URLs[4].$.Image_URL,
          tax: res.getHotels.Success[0].Result[0].hoteltaxes[0].Tax,
          //CityName: res.Success.result[0].CityName
          // img: res.Success.result[0].AccommodationImages[0].URL[0]
        });
        this.setState({ loading: true });
      })
      .catch(err => console.log(err));
  }
  callApi = async () => {

    idd = this.props.match.params.id;
    rate = this.props.match.params.rate;
    checkIn = this.props.match.params.checkin;
    checkOut = this.props.match.params.checkout;
    Adults = this.props.match.params.adults;
    Rooms = this.props.match.params.rooms;
    nights = this.props.match.params.nights;
    console.log(this.props.match.params.city);
    console.log(JSON.parse(this.props.match.params.planId))
    const response = await fetch('/api/hotelDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postHotelId: idd }),
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    this.setState({ responseToPost: body });
    return body;
  };
  render() {
    return (
      <div className="CustomerInformation">
        <Topbar />
        <section className="">
          <Steps />
          {/* {this.state.loading ? <Properties properties={this.state.properties} /> : <Spinner className="ml-3 mt-3" animation="grow" />} */}
          <Container className="mb-3">
            <Row>
              <Col>
                <p className="mt-3 p-2 para" style={{ width: '100%', backgroundColor: '#FF5D47', color: '#fff', borderRadius: '10px', fontFamily: 'Montserrat Regular' }}><u>Sign up</u> and get 20% off on your first booking.</p>
              </Col>
            </Row>
            {this.state.loading ? <Container className=" pl-1" style={{ backgroundColor: '#f6f6f6', borderRadius: '10px' }}>
              <Row>
                <Col className="pr-0" xs={5}>
                  <button className="BButton" type="button" style={{ fontFamily: 'JTMarnie Light' }}> Best Seller </button>
                  <h6 className="mt-2 m-0" style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '16px' }}>{this.state.hotelName}</h6>
                  {Array.apply(null, { length: this.state.rating ? Number(this.state.rating) : 0 }).map(Number.call, Number).map((item) => {
                    return <img key={item} src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidD" alt="" />
                  })}
                  <p className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}>
                    <b>{this.state.address}</b>
                  </p>
                </Col>
                <Col className="mt-3" xs={7}>
                  <img className="" style={{ borderRadius: '15px' }} src={this.state.img1} alt="" width={"180px"} height={"110px"} />
                </Col>
                <Col className="" xs={12}>
                  <p className="m-0 p-0" style={{ fontFamily: 'Gotham Rounded Light', fontSize: '11px' }}>
                    <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Check-in: </span> <b>{checkIn.substring(7)}th {monthsArr[checkIn.slice(5, -3) - 1]}{monthsArr[checkIn.slice(5, -2) - 1]} {checkIn.substring(0, 4)}, {(new Date(checkIn)).toLocaleString('en-pk', { weekday: 'long' })}</b><br />
                    <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>Check-out: </span> <b>{checkOut.substring(7)}th  {monthsArr[checkOut.slice(5, -3) - 1]}{monthsArr[checkOut.slice(5, -2) - 1]} {checkOut.substring(0, 4)}, {(new Date(checkOut)).toLocaleString('en-pk', { weekday: 'long' })}</b><br />
                    <span className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}> Stay: </span>  <b> {nights} Nights, {Rooms} Rooms, {Adults} Adults</b>
                  </p>
                </Col>
              </Row>
              <hr style={{ color: '#000000', backgroundColor: '#000000', borderColor: '#000000' }} />
              <Row>
                <Col xs={6}>
                  <p style={{ fontFamily: 'Gotham Rounded Light', fontSize: '11px', whiteSpace: 'nowrap' }}>
                    <span style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '13px' }}>{Rooms} Room ({nights} Nights): </span><b>Rs. {this.props.match.params.rate.split('.')[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</b> <br />
                    <Tax taxdetail={this.state.tax} />
                  </p>
                </Col>
                <Col xs={6} className="my-auto">
                  <p className="ml-2" style={{ fontSize: '7px', fontFamily: 'JTMarnie Light', color: '#fff', whiteSpace: 'nowrap' }}><span style={{ borderRadius: "45px", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", backgroundColor: '#7ed34f', padding: '5px' }}>Free Breakfast</span> <span style={{ borderRadius: "45px", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", backgroundColor: '#7ed34f', padding: '5px', whiteSpace: 'nowrap' }}>Book Now Pay Later</span> </p>
                </Col>
              </Row>
            </Container> : <Spinner className="mb-3" animation="grow" />}

            <div style={{ borderRadius: "15px 15px 30px 30px", border: "1px solid rgb(203, 203, 203)" }}>
              <Row className="mx-auto">
                <Col xs={12} className="regFrom">
                  <h6 className="mt-3" style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '16px' }}>Let us know who you are</h6>
                  <Form>
                    <Form.Group className="mt-3 mb-2" controlId="formBasicEmail">
                      <Form.Control value={this.state.name} onChange={this.handleNameChanged.bind(this)} className="mb-3" type="text" placeholder="Full name *" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px", color: 'black' }} />
                      <Form.Control value={this.state.email} onChange={this.handleEmailChanged.bind(this)} className="mb-3" type="email" placeholder="Email *" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px" }} />
                      <Form.Control value={this.state.reEmail} onChange={this.handleReEmailChanged.bind(this)} className="mb-3" type="email" placeholder="Retype email *" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px" }} />
                      <Form.Control value={this.state.phoneNo} onChange={this.handlePhoneNoChanged.bind(this)} className="float-right mb-3" type="text" placeholder="City *" style={{ width: '50%', height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px" }} />
                      <Form.Control value={this.state.uCity} onChange={this.handleCityChanged.bind(this)} className="mb-3" type="text" placeholder="Phone number *" style={{ width: '46%', height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "12px" }} />
                      <Form.Control value={this.state.promoCode} onChange={this.handlePromoCodeChanged.bind(this)} className="mb-3" type="text" placeholder="Promo Code (Optional)" style={{ height: "30px", borderRadius: "20px 20px 20px 20px", border: "1px solid rgb(203, 203, 203)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)", fontFamily: "Montserrat Thin", fontSize: "13px" }} />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row className="mx-auto">
                <Col className="mt-1">
                  <p style={{ fontSize: "10px", fontFamily: "Gotham Medium" }}>We’ll send your confirmation to this email address. <br />By processing with this booking, I am agreeing to Roomph’s <span style={{ color: "#EF4E22" }}>Terms & Conditions</span>
                    {' '}and {' '}<span style={{ color: "#EF4E22" }}>Privacy Policy</span></p>
                  <button className="bookingBtn mb-3" onClick={this.handleButtonClicked.bind(this)}>Confirm Booking</button>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

export default withRouter(CustomerInformation);
