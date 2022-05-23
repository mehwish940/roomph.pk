import React, { Component } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Slider from "react-slick";
import './carousel.css';
import Select from '@mui/material/Select';
import { BiMap } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import './description.css';
import Reviews from './reviews/reviews';
import Slider1 from './slider/slider';
import History from '../../history';
import { RiArrowDropDownLine } from "react-icons/ri";
import { withRouter } from "react-router-dom";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import './lightbox.css';
import './Top.css';

let checkIn = '';
let checkOut = '';
var monthsArr =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Slider
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#EF4E22", borderRadius: "10px 10px 10px 10px", marginRight: '15px', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#EF4E22", borderRadius: "10px 10px 10px 10px", marginLeft: '15px', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <img className="CarouselImg" src={process.env.PUBLIC_URL + "/images/City01.png"} alt="" />
          </div>
          <div>
            <img className="CarouselImg" src={process.env.PUBLIC_URL +"/images/City02.png"} alt="" />
          </div>
          <div>
        <img className="CarouselImg" src={process.env.PUBLIC_URL +"/images/City03.png"} alt="" />
          </div>
          <div>
            <img className="CarouselImg" src={process.env.PUBLIC_URL +"/images/City04.png"} alt="" />
          </div>
          <div>
            <img className="CarouselImg" src={process.env.PUBLIC_URL +"/images/City01.png"} alt="" />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <img className="pr-1 CarouselImg1" src={process.env.PUBLIC_URL +"/images/City01.png"} alt="" />
          </div>
          <div>
            <img className="pr-1 CarouselImg1" src={process.env.PUBLIC_URL +"/images/City02.png"} alt="" />
          </div>
          <div>
            <img className="pr-1 CarouselImg1" src={process.env.PUBLIC_URL +"/images/City03.png"} alt="" />
          </div>
          <div>
            <img className="pr-1 CarouselImg1" src={process.env.PUBLIC_URL +"/images/City04.png"} alt="" />
          </div>
          <div>
            <img className="pr-1 CarouselImg1" src={process.env.PUBLIC_URL +"/images/City01.png"} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
} 
//Slider End


//Lightbox 
const images = [
  process.env.PUBLIC_URL +'/images/City01.png',
  process.env.PUBLIC_URL + '/images/City02.png',
  process.env.PUBLIC_URL + '/images/City03.png',
  process.env.PUBLIC_URL + '/images/City04.png',
  ];

class LightboxExample extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
  
    render() {
      const { photoIndex, isOpen } = this.state;
  
      return (
        <div>
        <Container className="mt-3">
          <Row>
            <Col xs={12}>
              <AsNavFor />
            </Col>
          </Row>
        </Container>
      
          <button className="Btn mb-3 ml-3" type="button" onClick={() => this.setState({ isOpen: true })}>
            View All Photos
          </button>
  
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>
      );
    }
  }
//Lightbox End

//Getting Property Details
let idd = '';

const Properties = ({ properties }) => {
  return (
    <div>
      {properties.map((properties) => {
        if (properties.AccommodationId == idd) {
          return <Container fluid>
            {/* <Row className="mx-auto mt-3" style={{ borderRadius: "10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
            <Col className="dfl my-auto">
             
            </Col>
            <Col className="">
              <p className="dfl free mt-3" style={{ fontFamily: 'Montserrat Regular', whiteSpace: 'nowrap' }}><img src={process.env.PUBLIC_URL + "/images/Asset19.svg"} className="imgWid0" alt="" /> <span style={{ fontSize: '12px' }}>{properties.Cancellation} Cancellation</span></p>
              <h6 className="dfl hotel mt-1 ml-md-2 ml-1" style={{ fontFamily: 'Gotham Rounded Bold', whiteSpace: 'nowrap' }}>{properties.AccommodationName}</h6>
              <p className="" style={{ fontFamily: 'Gotham Rounded Book', whiteSpace: 'nowrap' }}><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><b className="area"> {properties.CityName}</b></p>
              <p className="reviewCount ml-2 float-right">{properties.UserRating}</p><p className="rev dfl" style={{ float: 'right', whiteSpace: 'nowrap', textAlign: 'right', margin: '0', padding: '0',lineHeight:'100%' }}><span style={{ fontFamily: 'Gotham Rounded Bold' }}>Very Good</span></p><p style={{ fontFamily: 'Gotham Rounded Book', float: 'right', margin: '0', padding: '0', fontSize: '14px' }}><u>{properties.Rating} review</u></p>
              <br /><br />
              <p className="mt-lg-3 mt-2 dfl" style={{ whiteSpace: 'nowrap' }}><span className="left" style={{ backgroundColor: '#FF334F', color: '#fff', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', whiteSpace: 'nowrap' }}>Only {properties.MinRoomsAvailable} Left</span> <span className="rs" style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '16px' }}>Rs. {properties.MaxRate}</span></p>
            </Col>
          </Row> */}
            {/* <Container fluid> */}
            <Row>
              <Col xs={12} className="">
                <button className="Button" type="button"> Best Seller </button>
              </Col>
            </Row>
            <Row>
              <Col className="mt-2 mx-auto" xs={12}>
                <p className="ml-1" style={{ fontFamily: 'Gotham Rounded Bold', whiteSpace: 'nowrap', lineHeight: '50%' }}><span className="mr-2">{properties.AccommodationName}</span><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidD" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidD" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidD" alt="" /><span className="float-right"><span style={{ fontSize: '16px', color: 'red' }}>Rs.</span> <span style={{ color: 'red' }}>{properties.Max_MinRate}</span> <br /><span style={{ fontSize: '10px', marginLeft: '5px' }}>avg. per night</span></span></p>
                <p className="ml-2 rev dfl" style={{ whiteSpace: 'nowrap', margin: '0', padding: '0', lineHeight: '50%' }}><span style={{ fontFamily: 'Gotham Rounded Bold',fontSize:'14px'}}>Very Good</span><span className="reviewCount1 float-left mr-2 pt-2">{properties.UserRating}</span></p><p style={{ fontFamily: 'Gotham Rounded Book', margin: '0', padding: '0', fontSize: '14px' }}><span><u>{properties.Rating} review</u></span></p>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col style={{ margin: '0', padding: '0' }} xs={12}>
                <h6 className="ml-3 mt-3" style={{ fontFamily: 'Montserrat Bold' }}>Location</h6>
                <img src={process.env.PUBLIC_URL + "/images/map.png"} width={"100%"} alt="" />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '14px' }}><BiMap className="mapPic1" /> {properties.Address}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h6 style={{ fontFamily: 'Gotham Rounded Medium' }}>Reviews For {properties.AccommodationName}</h6>
              </Col>
              <Col xs={12}>
                <Reviews />
              </Col>
            </Row>
            <Row className="mx-1" style={{ borderRadius: "0px 10px 10px 10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
              <Col style={{ margin: '0', padding: '0' }}>
                <Slider1 />
              </Col>
              <Col className="mt-1">
                <p className="m-1 p-0" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '16px' }}><b>{properties.MinRoomName}</b></p>
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset6.svg"} width={15} alt="" />Free Wi-Fi</p>
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset26.svg"} width={15} alt="" />1 double bed</p>
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset25.svg"} width={15} alt="" />80m2/861 ft2</p>
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset24.svg"} width={15} alt="" />Garden view</p>
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset23.svg"} width={15} alt="" />Shower</p>

              </Col>
              <Col className="mt-3" xs={12}>
                <p> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '10px' }}><b>Roomph Special Rate - <i>Pay Now</i></b></span> <img className="facility" src={process.env.PUBLIC_URL + "/images/Asset28.svg"} width={10} alt="" /> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>Non-Refundable</span> <span className="float-right" style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>max. <img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /><img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /></span> </p>
              </Col>
              <Col xs={8}>
                <p className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}> Rs. <span style={{ fontSize: '16px', color: 'red' }}>{properties.MinRate}</span>  </p>
              </Col>
              <Col xs={4}>
                <div className="dropdown float-right">
                  <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">1</span> <RiArrowDropDownLine /></button>
                  <div className="dropdown-content">
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                  </div>
                </div>
              </Col>
              <Col className="mt-3" xs={12}>
                <p> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '10px' }}><b>Roomph Special Rate - <i>Pay Later</i></b></span> <img className="facility" src={process.env.PUBLIC_URL + "/images/Asset19.svg"} width={10} alt="" /> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>Free Cancellation</span> <span className="float-right" style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>max. <img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /><img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /></span> </p>
              </Col>
              <Col xs={8}>
                <p className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}> Rs. <span style={{ fontSize: '16px', color: 'red' }}>{properties.MaxRate}</span>  </p>
              </Col>
              <Col xs={4}>
                <div className="dropdown float-right">
                  <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">1</span> <RiArrowDropDownLine /></button>
                  <div className="dropdown-content">
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                  </div>
                </div>
              </Col>
              <Col className="mt-3" xs={12}>
                <p> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '10px' }}><b>Roomph Special Rate - <i>Pay Later</i></b></span> <img className="facility" src={process.env.PUBLIC_URL + "/images/Asset19.svg"} width={10} alt="" /> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>Free Cancellation</span> <span className="float-right" style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}><img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /></span> </p>
              </Col>
              <Col xs={8}>
                <p className="mt-1" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}> Rs. <span style={{ fontSize: '16px', color: 'red' }}>{properties.Max_MinRate}</span>  </p>
              </Col>
              <Col xs={4}>
                <div className="dropdown float-right">
                  <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">1</span> <RiArrowDropDownLine /></button>
                  <div className="dropdown-content">
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                  </div>
                </div>
              </Col>
              <Col className="mx-auto">
                <button className="DSearchButton mb-3" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }} onClick={() => History.push('/customerinformation')}>Book Now</button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12}>
                <h6 style={{ fontFamily: 'Gotham Rounded Medium', margin: '0', padding: '0' }}>Know More About {properties.AccommodationName}</h6>
              </Col>
              <Col xs={12}>
                <p className="mt-1" style={{ textAlign: "justify", fontFamily: 'Gotham Rounded Book', fontSize: '13px' }}>{properties.GeneralDescription} <span className="float-right"><br /><b><u>See More</u></b></span> </p>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3" xs={12}>
                <h6 style={{ fontFamily: 'Gotham Rounded Medium', margin: '0', padding: '0' }}>Popular Landmarks</h6>
                <p className="mt-2" style={{ margin: '0', padding: '0', fontFamily: 'Gotham Rounded Book', fontSize: '13px' }}>PAF Golf Course <span className="float-right">4.65km</span></p>
                <p style={{ margin: '0', padding: '0', fontFamily: 'Gotham Rounded Book', fontSize: '13px' }}>West End Plaza <span className="float-right">4.93 km</span></p>
                <p style={{ margin: '0', padding: '0', fontFamily: 'Gotham Rounded Book', fontSize: '13px' }}>Libra Jewellers <span className="float-right">5.29 km</span></p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12}>
                <p>
                  <b>
                    <h6 style={{ fontFamily: 'Gotham Rounded Medium' }}>Some Helpful Information</h6>
                  </b>
                  <p style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}>Check-in from 10:30 am <span style={{ color: 'red' }}><i>until</i></span>  01:30 pm <br />
                    Check-out from 11:00 am <span style={{ color: 'red' }}><i>until</i></span> 12:30 pm</p>
                </p>
              </Col>
            </Row>

          </Container>;
        }
        return null;
      })}
    </div>
  )
};

//Getting Property Details End

//Rooms Dropdown
function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
//Rooms Dropdown End

export class Description extends Component {
  state = {
    properties: [], pImgs: [], CityName: '', Cancellation: '', Count: '', img: '',
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
          CityName: res.Success.result[0].CityName
          // img: res.Success.result[0].AccommodationImages[0].URL[0]
        })
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    idd = this.props.match.params.id;
    checkIn = this.props.match.params.checkin;
    checkOut = this.props.match.params.checkout;
    console.log(this.props.match.params.city);
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postCity: this.props.match.params.city, postCheckIn: this.props.match.params.checkin, postCheckOut: this.props.match.params.checkout }),
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    this.setState({ responseToPost: body });
    return body;
  };
  render() {
    return (
      <section className="mb-3">
        {/* <p>{this.state.Count}</p> */}
        <Container fluid>
        {/* Topbar */}
          <Row className="p-2" style={{ backgroundColor: "white", borderRadius: "0px 0px 20px 20px", border: "1px solid rgb(205, 206, 206)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)" }}>
            <Col className="d-none d-md-block" xs={10} style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
              <Row className="p-2">
                <Col>
                  <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none' }}>{this.props.match.params.city}</button>
                  <div >
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {monthsArr[this.props.match.params.checkin.slice(5, -3)-1]}{monthsArr[this.props.match.params.checkout.slice(5, -2)-1]} - {this.props.match.params.checkout.substring(7)}th  {monthsArr[this.props.match.params.checkout.slice(5, -3)-1]}{monthsArr[this.props.match.params.checkout.slice(5, -2)-1]} </button>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . 2 guests</button>
                  </div>
                </Col>
                <Col xs={2} className="my-auto mx-auto">
                  <img className="searchLogo float-right" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
                </Col>
              </Row>
            </Col>
            <Col xs={8} className="d-md-none" style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
              <Row className="">
                <Col>
                  <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none' }}>{this.props.match.params.city}</button>
                  <div>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none' }}></button>
                  </div>
                  <div style={{ position: 'absolute', top: '20px' }}>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {monthsArr[this.props.match.params.checkin.slice(5, -3)-1]}{monthsArr[this.props.match.params.checkout.slice(5, -2)-1]} - {this.props.match.params.checkout.substring(7)}th  {monthsArr[this.props.match.params.checkout.slice(5, -3)-1]}{monthsArr[this.props.match.params.checkout.slice(5, -2)-1]} </button>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . 2 guests</button>
                  </div>
                </Col>
                <Col xs={2} className="my-auto mx-auto">
                  <img className="searchLogo float-right" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
                </Col>
              </Row>
            </Col>
            <Col className='my-auto mx-auto'>
              <div className="iitem float-right">
                <BiMap className="mapPic" />
                <span className="ccaption">Map</span>
              </div>
            </Col>
          </Row>
        </Container>
        <LightboxExample />

        <Properties properties={this.state.properties} />

        {/* <Container fluid>
          <Row>
            <Col xs={12} className="">
              <button className="Button" type="button"> Best Seller </button>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2 mx-auto" xs={12}>
              <p className="ml-1" style={{ fontFamily: 'Gotham Rounded Bold', whiteSpace: 'nowrap', lineHeight: '50%' }}><span className="mr-2">Hotel Plaza Islamabad</span><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidD" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidD" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidD" alt="" /><span className="float-right"><span style={{ fontSize: '12px', color: 'red' }}>Rs.</span> <span style={{ color: 'red' }}>12,000</span> <br /><span style={{ fontSize: '10px', marginLeft: '5px' }}>avg. per night</span></span></p>
              <p className="ml-2 rev dfl" style={{ whiteSpace: 'nowrap', margin: '0', padding: '0', lineHeight: '50%' }}><span style={{ fontFamily: 'Gotham Rounded Bold',fontSize:'14px'}}>Very Good</span><span className="reviewCount1 float-left mr-2 pt-2">1.50</span></p><p style={{ fontFamily: 'Gotham Rounded Book', margin: '0', padding: '0', fontSize: '14px' }}><span><u>19 review</u></span></p>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col style={{ margin: '0', padding: '0' }} xs={12}>
              <h5 className="ml-3" style={{ fontFamily: 'Montserrat Bold' }}>Location</h5>
              <img src="images/map.png" width={"100%"} alt="" />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '14px' }}>House 83, Street 5, E11/2, Golra, Islamabad</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h6 style={{ fontFamily: 'Gotham Rounded Medium' }}>Reviews For Harvey Islamabad</h6>
            </Col>
            <Col xs={12}>
              <Reviews />
            </Col>
          </Row>
          <Row className="mx-1" style={{ borderRadius: "0px 10px 10px 10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
            <Col style={{ margin: '0', padding: '0' }}>
              <Slider />
            </Col>
            <Col className="mt-3">
              <p className="m-0 p-0" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}><b>Deluxe Double Room</b></p>
              <p className="m-0 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src="images/Asset6.svg" width={15} alt="" />Free Wi-Fi</p>
              <p className="m-0 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src="images/Asset26.svg" width={15} alt="" />1 double bed</p>
              <p className="m-0 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src="images/Asset25.svg" width={15} alt="" />80m2/861 ft2</p>
              <p className="m-0 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src="images/Asset24.svg" width={15} alt="" />Garden view</p>
              <p className="m-0 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src="images/Asset23.svg" width={15} alt="" />Shower</p>

            </Col>
            <Col className="mt-3" xs={12}>
              <p> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '10px' }}><b>Roomph Special Rate - <i>Pay Now</i></b></span> <img className="facility" src="images/Asset28.svg" width={10} alt="" /> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>Non-Refundable</span> <span className="float-right" style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>max. <img className="facility1" src="images/Asset22.svg" width={10} alt="" /><img className="facility1" src="images/Asset22.svg" width={10} alt="" /></span> </p>
            </Col>
            <Col xs={8}>
              <p style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}> Rs. <span style={{ fontSize: '14px', color: 'red' }}>12,000</span>  </p>
            </Col>
            <Col xs={4}>
              <div className="dropdown float-right">
                <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">1</span> <RiArrowDropDownLine /></button>
                <div className="dropdown-content">
                  <a href="">1</a>
                  <a href="">2</a>
                  <a href="">3</a>
                </div>
              </div>
            </Col>
            <Col className="mt-3" xs={12}>
              <p> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '10px' }}><b>Roomph Special Rate - <i>Pay Later</i></b></span> <img className="facility" src="images/Asset19.svg" width={10} alt="" /> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>Free Cancellation</span> <span className="float-right" style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>max. <img className="facility1" src="images/Asset22.svg" width={10} alt="" /><img className="facility1" src="images/Asset22.svg" width={10} alt="" /></span> </p>
            </Col>
            <Col xs={8}>
              <p style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}> Rs. <span style={{ fontSize: '14px', color: 'red' }}>12,000</span>  </p>
            </Col>
            <Col xs={4}>
              <div className="dropdown float-right">
                <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">1</span> <RiArrowDropDownLine /></button>
                <div className="dropdown-content">
                  <a href="">1</a>
                  <a href="">2</a>
                  <a href="">3</a>
                </div>
              </div>
            </Col>
            <Col className="mt-3" xs={12}>
              <p> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '10px' }}><b>Roomph Special Rate - <i>Pay Later</i></b></span> <img className="facility" src="images/Asset19.svg" width={10} alt="" /> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>Free Cancellation</span> <span className="float-right" style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}><img className="facility1" src="images/Asset22.svg" width={10} alt="" /></span> </p>
            </Col>
            <Col xs={8}>
              <p style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}> Rs. <span style={{ fontSize: '14px', color: 'red' }}>12,000</span>  </p>
            </Col>
            <Col xs={4}>
              <div className="dropdown float-right">
                <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">1</span> <RiArrowDropDownLine /></button>
                <div className="dropdown-content">
                  <a href="">1</a>
                  <a href="">2</a>
                  <a href="">3</a>
                </div>
              </div>
            </Col>
            <Col className="mx-auto">
              <button className="DSearchButton mb-3" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }} onClick={() => History.push('/customerinformation')}>Book Now</button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <h6 style={{ fontFamily: 'Gotham Rounded Medium', margin: '0', padding: '0' }}>Know More About Harvey Islamabad</h6>
            </Col>
            <Col xs={12}>
              <p className="mt-1" style={{ textAlign: "justify", fontFamily: 'Gotham Rounded Book', fontSize: '13px' }}>Our lavishly decorated rooms with warm undertones and earthy colours emanate the most soothing and relaxing vibes, ensuring the most comfortable accommodation for your holiday. Our expert chefs wi.. <span className="float-right"><b><u>See More</u></b></span> </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h6 style={{ fontFamily: 'Gotham Rounded Medium', margin: '0', padding: '0' }}>Popular Landmarks</h6>
              <p className="mt-2" style={{margin:'0',padding:'0', fontFamily: 'Gotham Rounded Book', fontSize: '13px'}}>PAF Golf Course <span className="float-right">4.65km</span></p>
              <p style={{margin:'0',padding:'0', fontFamily: 'Gotham Rounded Book', fontSize: '13px'}}>West End Plaza <span className="float-right">4.93 km</span></p>
              <p style={{margin:'0',padding:'0', fontFamily: 'Gotham Rounded Book', fontSize: '13px'}}>Libra Jewellers <span className="float-right">5.29 km</span></p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12}>
            <p>
              <b>
              <h6 style={{ fontFamily: 'Gotham Rounded Medium'}}>Some Helpful Information</h6>
              </b>
                <p style={{fontFamily: 'Gotham Rounded Medium',fontSize:'12px'}}>Check-in from 10:30 am <span style={{color:'red'}}><i>until</i></span>  01:30 pm <br />
                Check-out from 11:00 am <span style={{color:'red'}}><i>until</i></span> 12:30 pm</p>
            </p>
          </Col>
        </Row>
      </Container> */}
      </section >
    );
  }
}

export default withRouter(Description);
