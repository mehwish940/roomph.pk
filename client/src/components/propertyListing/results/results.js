import React, { Component, createContext, useMemo, useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './results.css';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import SliderMUI, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { addDays } from 'date-fns';
import Checkbox from '@mui/material/Checkbox';
import en_PK from 'date-fns/locale/en-IN';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import history from '../../history';
import { Modal } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import Lightbox from 'react-image-lightbox';
import Image from 'react-bootstrap/Image';
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { BiMap } from "react-icons/bi";
import Filter from './filter/filter';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Child2 } from "../../propertyDetails/description/description";
import Spinner from 'react-bootstrap/Spinner';
import Sorting from "./Sort/Sorting";

var checkIn = '';
var checkOut = '';
var Adults = '';
var mulImages = [];
var Children = '';
var Rooms = '';
var nights = '';
var priceStart = '';
var priceEnd = '';
var rating = '';
var CityName = '';
let idd = '';
var premium = '';
var category = '';

var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: '15px', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: '15px', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

function DataRange(props) {
  const [to, setTo] = useState(addDays(new Date(), 2));
  const [from, setFrom] = useState(new Date());

  const handleSelect = useCallback(({ selection: { startDate, endDate } }) => {
    setFrom(startDate);
    setTo(endDate);
  });
  const ranges = useMemo(() => {
    return [
      {
        startDate: from,
        endDate: to,
        key: "selection"
      }
    ];
  }, [from, to]);
  if (props.display) {
    var fromMonth = new Date(from.toISOString()).toLocaleString('en-pk', { weekday: 'short', month: 'short' });
    var toMonth = new Date(to.toISOString()).toLocaleString('en-pk', { weekday: 'short', month: 'short' });
    checkIn = `${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}`;
    checkOut = `${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}`;

    return <div>
      <DateRange
        locale={en_PK}
        color={"#EF4E22"}
        rangeColors={"red"}
        minDate={new Date()}
        dateDisplayFormat={"yyyy.MM.dd"}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={ranges}
        months={1}
        direction="vertical"
      />
      <p className="text-center" style={{ fontSize: "14px" }}>{'Checkin: '}{fromMonth}{' '}{from.getDate()}{' '}-{' Checkout: '}{toMonth}{' '}{to.getDate()}</p>
    </div>
  }
}
function RoomsAdultsChild() {
  let [adults, setAdultsNum] = useState(2);
  let [child, setChildNum] = useState(0);
  let [rooms, setRoomsNum] = useState(1);
  let incAdults = () => {
    if (adults < 10) {
      setAdultsNum(Number(adults) + 1);
    }
  };
  let decAdults = () => {
    if (adults > 0) {
      setAdultsNum(adults - 1);
    }
  }
  let handleChangeAdults = (e) => {
    setAdultsNum(e.target.value);
    Adults = e.target.value;
  }


  let incChild = () => {
    if (child < 10) {
      setChildNum(Number(child) + 1);
    }
  };
  let decChild = () => {
    if (child > 0) {
      setChildNum(child - 1);
    }
  }
  let handleChangeChild = (e) => {
    setChildNum(e.target.value);
    Children = e.target.value;
  }


  let incRooms = () => {
    if (rooms < 10) {
      setRoomsNum(Number(rooms) + 1);
    }
  };
  let decRooms = () => {
    if (rooms > 0) {
      setRoomsNum(rooms - 1);
    }
  }
  let handleChangeRooms = (e) => {
    setRoomsNum(e.target.value);
    Rooms = e.target.value;
  }

  return (
    <>
      <form>
        <Container>
          <Row>
            <Col className="mt-2">
              <div style={{ whiteSpace: 'nowrap' }}>
                <label className="ml-1" style={{ fontFamily: "Gotham Medium", fontSize: "16px", color: "#EF4E22" }}>
                  Rooms
                </label>
                <button className="PMB" type="button" style={{ border: "none", background: "none", color: "#EF4E22", paddingLeft: '20px' }} onClick={decRooms}><AiOutlineMinusCircle /></button>
                <input className="PMB" style={{ width: "30px", border: "none", color: "#EF4E22", fontFamily: "Gotham Medium", fontSize: "16px", paddingLeft: '13px' }} type="text" value={rooms} onChange={handleChangeRooms} />
                <button className="PMB" type="button" style={{ border: "none", background: "none", color: "#EF4E22", paddingLeft: '2px' }} onClick={incRooms}><AiOutlinePlusCircle /></button>
              </div>
            </Col>
          </Row>

          <Row>
            <p hidden> {Adults = adults} {Rooms = rooms} {Children = child}</p>
            <Col className="mt-2">
              <div style={{ whiteSpace: 'nowrap' }}>
                <label className="ml-1" style={{ fontFamily: "Gotham Medium", color: "#EF4E22", fontSize: "16px" }}>
                  Adults
                </label>
                <button className="PMB" type="button" style={{ marginLeft: '3px', border: "none", background: "none", color: "#EF4E22", paddingLeft: '20px' }} onClick={decAdults}><AiOutlineMinusCircle /></button>
                <input className="PMB" style={{ width: "30px", border: "none", color: "#EF4E22", fontFamily: "Gotham Medium", fontSize: "16px", paddingLeft: '13px' }} type="text" value={adults} onChange={handleChangeAdults} />
                <button className="PMB" type="button" style={{ border: "none", background: "none", color: "#EF4E22", paddingLeft: '3px' }} onClick={incAdults}><AiOutlinePlusCircle /></button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="mt-2">
              <div style={{ whiteSpace: 'nowrap' }}>
                <label className="ml-1" style={{ fontFamily: "Gotham Medium", color: "#EF4E22", fontSize: "16px" }}>
                  Child
                </label>
                <button className="PMB" type="button" style={{ marginLeft: '14px', border: "none", background: "none", color: "#EF4E22", paddingLeft: '20px' }} onClick={decChild}><AiOutlineMinusCircle /></button>
                <input className="PMB" style={{ width: "30px", border: "none", color: "#EF4E22", fontFamily: "Gotham Medium", fontSize: "16px", paddingLeft: '13px' }} type="text" value={child} onChange={handleChangeChild} />
                <button className="PMB" type="button" style={{ border: "none", background: "none", color: "#EF4E22", paddingLeft: '3px' }} onClick={incChild}><AiOutlinePlusCircle /></button>
              </div>
            </Col>
          </Row>

        </Container>
      </form>
    </>
  );
}
const Child1 = () => {
  return (
    <>
      <Imgs.Provider value={mulImages}>
        <Child2 />
      </Imgs.Provider>
    </>
  );
}

//Lightbox 

class LightboxExample extends Component {

  constructor(props) {

    super(props);
    //console.log(props.imgSrc)
    this.state = {
      photoIndex: 0,
      images:
        [],
      isOpen: false,
    };
  }
  render() {
    const images = this.props.imgSrc;
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button className="Btn mb-3 ml-3" style={{ fontSize: '14px', width: '120px' }} type="button" onClick={() => this.setState({ isOpen: true })}>
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

class CustomArrows extends Component {
  slidersCont() {
    return this.props.imgSrc.map((img, index) => {
      return (
        <div key={img}>
          <img className="sliderImgs" src={img} alt="" />
          {/* <img src={this.props.moreImgs} alt="Discount" height={"260px"} /> */}
          {/* <img className="sliderImgs" src={process.env.PUBLIC_URL + "/images/City01.png"} alt="" /> */}
        </div>)
    })
  }

  render() {
    const settings = {
      //dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 3000,
      // autoplaySpeed: 3000,
      cssEase: "ease-in-out",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider  {...settings}>
          {this.slidersCont()}
        </Slider>
      </div>
    );
  }
}
function Checkboxes() {
  const [checked, setChecked] = React.useState(false);
  const handleChange1 = (event) => {
    category = 4;
  };
  const handleChange2 = (event) => {
    rating = 3;
    setChecked(event.target.checked);
  };
  const handleChange3 = (event) => {
    rating = 2;
  };
  const handleChange4 = (event) => {
    rating = 1;
  };
  const handleChange5 = (event) => {
    category = '8';
  };
  const handleChange6 = (event) => {
    category = '0';
  };
  const handleChange7 = (event) => {
    category = '5';
  };
  return (
    <div>
      <Checkbox onChange={handleChange1} inputProps={{ 'aria-label': 'controlled' }} className='m-0 p-0 ml-1 mt-1' color="success" /><img src={process.env.PUBLIC_URL + "/images/Asset16.png"} width={80} alt="" /><br />
      <Checkbox checked={checked} onChange={handleChange2} className='mt-1 p-0 ml-1' color="success" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><br />
      <Checkbox onChange={handleChange3} className='mt-1 p-0 ml-1' color="success" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><br />
      <Checkbox onChange={handleChange4} className='mt-1 p-0 ml-1' color="success" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><br />
      <p className="m-0 p-0"><Checkbox onChange={handleChange5} className='mt-1 chkBoxText p-0 ml-1' color="success" /><span className='chkBoxText' style={{ fontFamily: 'Gotham Rounded Bold' }}>Hotel</span><br /></p>
      <p className="m-0 p-0"><Checkbox onChange={handleChange6} className='mt-1 chkBoxText p-0 ml-1' color="success" /><span className='chkBoxText' style={{ fontFamily: 'Gotham Rounded Bold' }}>Apartment</span><br /></p>
      <p className="m-0 p-0"><Checkbox onChange={handleChange7} className='mt-1 chkBoxText p-0 ml-1' color="success" /><span className='chkBoxText' style={{ fontFamily: 'Gotham Rounded Bold' }}>Guest House</span></p>
    </div>
  );
}
function valuetext(value) {
  return `${value}°C`;
}
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};


const AirbnbSlider = styled(SliderMUI)(({ theme }) => ({
  color: '#ff3d00',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 17,
    width: 17,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'white',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

function CustomizedSlider() {
  const [value, setValue] = React.useState([0, 30000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 150 }}>
      <AirbnbSlider
        components={{ Thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={30000}
      />
      {/* <p className='m-0 p-0 ml-1' style={{ fontFamily: 'Gotham Rounded Bold' }}>Min <span className="float-right" style={{ fontFamily: 'Gotham Rounded Bold' }}>Max</span></p>
      <button className="pkr1">PKR <span className='ml-2'>{value[0]}</span></button>
      <p hidden>{priceStart = value[0]}{priceEnd = value[1]}</p>
      <hr className="dottedLine p-0" style={{ display: 'inline-block', width: '40px', borderTop: '1px dotted #F53500' }} />
      <button className="pkr1">PKR {value[1]}</button> */}
    </Box>
  );
}
const Imgs = createContext();
const PropertiesListing = ({ properties }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <div style={{ backgroundColor: 'white', width: '350px', height: '75px', position: 'absolute', zIndex: '100' }}>
          <button onClick={handleShow} className="mt-2 ml-3" style={{ border: "none", background: "none", paddingRight: '400px' }}><MdOutlineKeyboardArrowLeft /></button>
        </div>
        <div className="mt-1 mb-3">
          <DataRange display={true} />
        </div>
        <button className="dateDoneBtn mx-auto mb-3" onClick={() => { history.push(`/propertylisting/${this.props.city}/${this.props.checkIn}/${this.props.checkOut}/${this.props.adults}/${this.props.rooms}/${this.props.nights}/${priceStart}/${priceEnd}/${premium}/${rating}/${category}`); window.location.reload(false); }}>Done</button>
      </Modal>
      <div className="sortFilterLg d-none d-lg-block">
        <div className="priceRangeLP"><CustomizedSlider /></div>
        <Checkboxes />
      </div>
      {properties.map((properties, index) => (
        <div>
          <Row key={index.toString()} className="mb-3 hotel-card mt-lg-3" style={{ borderRadius: "10px", boxShadow: "0px 1px 2px 1px rgb(205, 206, 206)" }}>
            <Col className="dfl">
              {/* {console.log(properties.AccommodationImages ? properties.AccommodationImages[0].URL : properties.ImageURL)} */}
              <CustomArrows className="dfl" imgSrc={properties.AccommodationImages ? properties.AccommodationImages[0].URL : properties.ImageURL} />
            </Col>
            <Col style={{ padding: "8px 10px" }} className='hotel-details-container'>
              <div className="m-0 p-0">
                {/* {console.log(properties.Cancellation)} */}
                {properties.Cancellation[0] ? <p className="dfl free" style={{ fontFamily: 'Montserrat Regular' }}><img src={process.env.PUBLIC_URL + "/images/Asset19.svg"} className="imgWid0" alt="" /> <span className="freepartTxt" style={{ whiteSpace: 'nowrap' }}>{properties.Cancellation} Cancellation</span></p> : ''}
                <button className="hotel" style={{ color: '#000 !important', fontFamily: 'Gotham Rounded Bold', background: 'none', border: 'none', textAlign: 'left' }} onClick={() => { history.push(`/propertydetails/${properties.CityName}/${checkIn}/${checkOut}/${Adults}/${Rooms}/${nights}/${properties.MinRate[0]}/${properties.AccommodationId}/${properties.Latitude}/${properties.Longitude}`); mulImages = properties.AccommodationImages ? properties.AccommodationImages[0].URL : properties.ImageURL }}>{properties.AccommodationName}</button>
                <p style={{ fontSize: '13px', fontFamily: 'Gotham Rounded Book', whiteSpace: 'nowrap' }}>
                  {
                    Array.apply(null, { length: properties.Rating ? Number(properties.Rating[0]) : 0 }).map(Number.call, Number).map((item) => {
                      return <img key={item} src={process.env.PUBLIC_URL + "/images/starsred.svg"} className="imgWidr" alt="" />
                    })
                  }
                  <b className="cityStar" style={{ fontFamily: 'Gotham Rounded Book' }}> {properties.CityName}</b></p>
                {/* <LightboxExample imgSrc={properties.AccommodationImages ? properties.AccommodationImages[0].URL : properties.ImageURL} /> */}
              </div>

              <div style={{ margin: '0px', padding: '0px' }}>
                <div className="user-rating-container">
                  <p className="reviewCount float-right">{properties.UserRating}</p>
                  <div className="very-good">
                    <span style={{ fontFamily: 'Gotham Rounded Bold' }}>Very Good</span>
                    <u>{properties.Rating} review{properties.Rating > 1 ? "s " : ' '}</u></div>
                </div>

                {properties.MinRate[0] ?
                  <div className="hotel-pricing-container">
                    <span className="hotel-pricing-container-p">Only {properties.MinRoomsAvailable} Left</span>
                  </div>
                  : <div className="changeDateContainer"><span className="hotel-pricing-container-p1">Fully Booked</span>
                    <button className="changeDatebtn" onClick={handleShow}>Try <u>changing your dates</u> to check out similar rooms </button>
                  </div>}
                <div style={{ height: '10px' }}></div>
                {properties.MinRate[0] ? <div className="priceRs float-right" style={{ fontFamily: 'Gotham Rounded Bold' }}>Rs. {Number(properties.MinRate[0]).toLocaleString()}</div>
                  : <div className="priceRs1 float-right" style={{ fontFamily: 'Gotham Rounded Bold' }}>JUST MISSED IT!</div>}
              </div>
            </Col>
          </Row>
        </div>

      ))
      }
    </div>
  )
};

export class Results extends Component {
  constructor() {
    super();
    this.state = {
      showHide: false
    }
    this.state = {
      showHide1: false
    }
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
  }
  handleModalShowHide1() {
    this.setState({ showHide1: !this.state.showHide1 })
  }
  state = {
    loading: false, properties: [], pImgs: [], CityName: '', Cancellation: '', Count: '', img: '',
    post: '',
    responseToPost: '',
  };
  setStateOfParent = (properties) => {
    this.setState({ properties: properties });
  }
  setStateOfParentloading = () => {
    this.setState({ loading: !this.state.loading });
  }
  setStateOfParentloadingFilter = () => {
    this.setState({ loading: !this.state.loading });
    this.callApi()
      .then(res => {
        //console.clear();
        //const json = JSON.stringify(res);
        console.log(res.Success.result);
        this.setState({
          properties: res.Success.result,
          Count: res.Success.result.length,
          CityName: res.Success.result[0].CityName
          // img: res.Success.result[0].AccommodationImages[0].URL[0]
        });
        this.setState({ loading: true })
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this._div.scrollTop = 0;
    this.callApi()
      .then(res => {
        //console.clear();
        //const json = JSON.stringify(res);
        console.log(res.Success.result);
        this.setState({
          properties: res.Success.result,
          Count: res.Success.result[0].RowCount,
          CityName: res.Success.result[0].CityName
          // img: res.Success.result[0].AccommodationImages[0].URL[0]
        });
        this.setState({ loading: true })
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    checkIn = this.props.match.params.checkin;
    //console.log(typeof this.props.match.params.checkin)
    checkOut = this.props.match.params.checkout;
    Adults = this.props.match.params.adults;
    Rooms = this.props.match.params.rooms;
    nights = this.props.match.params.nights;
    priceStart = this.props.match.params.priceStart;
    priceEnd = this.props.match.params.priceEnd;
    premium = this.props.match.params.premium;
    rating = this.props.match.params.rating;
    category = this.props.match.params.category;
    //console.log(this.props.match.params.city);
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postCity: this.props.match.params.city, postCheckIn: this.props.match.params.checkin, postCheckOut: this.props.match.params.checkout, postAdults: this.props.match.params.adults, postRooms: this.props.match.params.rooms, postPriceStart: priceStart, postPriceEnd: priceEnd, postRating: rating, postPremium: premium, postCategory: category }),
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
    this.setState({ responseToPost: body });
    return body;
  };

  render() {
    return (
      <section className="mb-3" ref={(ref) => this._div = ref}>
        {/* <p>{this.state.count}</p>
        <p>{this.state.Cancellation}</p>
        <img src={this.state.img} alt="" /> */}
        <Modal show={this.state.showHide} centered>
          <div style={{ backgroundColor: 'white', width: '350px', height: '75px', position: 'absolute', zIndex: '100' }}>
            <button onClick={() => this.handleModalShowHide()} className="mt-2 ml-3" style={{ border: "none", background: "none", paddingRight: '400px' }}><MdOutlineKeyboardArrowLeft /></button>
          </div>
          <div className="mt-1 mb-3">
            <DataRange display={true} />
          </div>
          <button className="dateDoneBtn mx-auto mb-3" onClick={() => { history.push(`/propertylisting/${this.props.city}/${this.props.checkIn}/${this.props.checkOut}/${this.props.adults}/${this.props.rooms}/${this.props.nights}/${priceStart}/${priceEnd}/${premium}/${rating}/${category}`); this.handleModalShowHide(); window.location.reload(false); }}>Done</button>
        </Modal>

        <Modal show={this.state.showHide1} centered>
          <button onClick={() => this.handleModalShowHide1()} className="mt-2 ml-3" style={{ border: "none", background: "none", paddingRight: '400px' }}><MdOutlineKeyboardArrowLeft /></button>

          <div className="mt-1 mb-3 mx-auto">
            <RoomsAdultsChild />
          </div>
          <button className="dateDoneBtn mx-auto mb-3" onClick={() => { history.push(`/propertylisting/${this.props.city}/${this.props.checkIn}/${this.props.checkOut}/${this.props.adults}/${this.props.rooms}/${this.props.nights}/${priceStart}/${priceEnd}/${premium}/${rating}/${category}`); this.handleModalShowHide(); window.location.reload(false); }}>Done</button>
        </Modal>
        <Container fluid>
          <Row className="fullBanner" style={{ backgroundColor: "white", borderRadius: "0px 0px 0px 0px", border: "1px solid rgb(205, 206, 206)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)" }}>
            {/* For larger Screens */}
            <Col className="d-none d-md-block" xs={10} lg={8} style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
              <Row className="p-1">
                <Col>
                  <OverlayTrigger
                    placement="right"
                    trigger="click"
                    rootClose
                    overlay={(
                      <Popover id="popover-basic">
                        <Popover.Body>
                          <button className="topCitiesBtns">Karachi</button>
                          <button className="topCitiesBtns">Lahore</button>
                          <button className="topCitiesBtns">Islamabad</button>
                          <button className="topCitiesBtns">Rawalpindi</button>
                          <button className="topCitiesBtns">Peshawar</button>
                        </Popover.Body>
                      </Popover>
                    )}>
                    <button className="topbarBtn pt-lg-1" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', textTransform: 'capitalize' }}>{this.props.match.params.city}</button>
                  </OverlayTrigger>

                  <div >
                    <button className="topbarBtn" onClick={() => this.handleModalShowHide()} style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {monthsArr[this.props.match.params.checkin.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkin.slice(5, -2) - 1]} - {this.props.match.params.checkout.substring(7)}th  {monthsArr[this.props.match.params.checkout.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkout.slice(5, -2) - 1]} </button>
                    {/* <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {(new Date()).toLocaleString('default', { month: 'short' })} - {this.props.match.params.checkout.substring(7)}th {(new Date()).toLocaleString('default', { month: 'short' })} </button> */}
                    <button className="topbarBtn" onClick={() => this.handleModalShowHide1()} style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . {this.props.match.params.adults} guests</button>
                  </div>
                </Col>
                <Col xs={2} className="my-auto mx-auto">
                  <img className="searchLogo float-right" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
                </Col>
              </Row>
            </Col>
            {/* For Smaller Screens */}
            <Col xs={8} className="d-md-none" style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
              <Row className="">
                <Col>
                  <OverlayTrigger
                    placement="right"
                    trigger="click"
                    rootClose
                    overlay={(
                      <Popover id="popover-basic">
                        <Popover.Body>
                          <button className="topCitiesBtns">Karachi</button>
                          <button className="topCitiesBtns">Lahore</button>
                          <button className="topCitiesBtns">Islamabad</button>
                          <button className="topCitiesBtns">Rawalpindi</button>
                          <button className="topCitiesBtns">Peshawar</button>
                        </Popover.Body>
                      </Popover>
                    )}>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', textTransform: 'capitalize' }}>{this.props.match.params.city}</button>
                  </OverlayTrigger>
                  <div style={{ height: '15px' }}>

                  </div>
                  <div style={{ position: 'absolute', top: '15px' }}>
                    <button className="topbarBtn" onClick={() => this.handleModalShowHide()} style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {monthsArr[this.props.match.params.checkin.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkin.slice(5, -2) - 1]} - {this.props.match.params.checkout.substring(7)}th  {monthsArr[this.props.match.params.checkout.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkout.slice(5, -2) - 1]} </button>
                    <button className="topbarBtn" onClick={() => this.handleModalShowHide1()} style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . {this.props.match.params.adults} guests</button>
                  </div>
                </Col>
                <Col xs={2} className="my-auto mx-auto">
                  <img className="searchLogo float-right" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
                </Col>
              </Row>
            </Col>
            <Col xs={1}>

            </Col>
            <Col xs={3} lg={2} className='mapp my-auto mx-auto'>
              <div className="iitem float-right" onClick={() => {
                this.props.history.push(`/map/${this.props.match.params.city}/${checkIn}/${checkOut}/${Adults}/${Rooms}`);
              }}>
                <BiMap className="mapPic" />
                <span className="ccaption">Map</span>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="">
            <Col className="dfl">
              <div id="box-search">
                <div className="thumbnail">
                  <Image className="featuredImg" src={process.env.PUBLIC_URL + "/images/slider.png"} alt="hotel" fluid />
                  <div className="caption">
                    <img src={process.env.PUBLIC_URL + "/images/Asset16.png"} alt="" />
                  </div>
                  <div className="caption1 my-auto">
                    <p className="p-2 para my-auto" style={{ fontFamily: 'Gotham Rounded Bold' }}><img className="VAL" src={process.env.PUBLIC_URL + "/images/Asset99.svg"} width={20} height={20} alt="" /><img className="VAL" src={process.env.PUBLIC_URL + "/images/Asset99.svg"} width={20} height={20} alt="" /><img className="VAL" src={process.env.PUBLIC_URL + "/images/Asset99.svg"} width={20} height={20} alt="" /> Pine View Hotel <span style={{ float: 'right', paddingTop: '2px' }}> Rs. 7,500 <span style={{ fontFamily: 'Gotham Rounded Book' }}>/ night</span></span></p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="buttonsSFContainer d-lg-none">
            <Col xs={3}>
              <Sorting properties={this.state.properties} setStateOfParentloading={this.setStateOfParentloading} setStateOfParent={this.setStateOfParent} />
            </Col>
            <Col xs={4} className="filtButn">
              <Filter city={this.props.match.params.city} checkIn={this.props.match.params.checkin} checkOut={this.props.match.params.checkout} rooms={this.props.match.params.rooms} adults={this.props.match.params.adults} nights={this.props.match.params.nights} setStateOfParentloadingFilter={this.setStateOfParentloadingFilter} />
            </Col>
          </Row>
          <Row className="showingSignCont">
            <Col>
              <p className="para2 mt-lg-3 mb-lg-4" style={{ fontFamily: 'Montserrat Regular' }}><u>Showing {this.state.Count} properties - {this.state.CityName}</u></p>
              <p className="p-2 para" style={{ width: '103%', backgroundColor: '#FF5D47', color: '#fff', borderRadius: '10px', fontFamily: 'Montserrat Regular' }}><u>Sign up</u> and get 20% off on your first booking.</p>
            </Col>
          </Row>
          {/* <Row className="mx-auto" style={{ borderRadius: "10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
            <Col className="dfl my-auto">
              <CustomArrows />
            </Col>
            <Col className="">
              <p className="dfl free mt-3" style={{ fontFamily: 'Montserrat Regular', whiteSpace: 'nowrap' }}><img src={process.env.PUBLIC_URL + "/images/Asset19.svg"} className="imgWid0" alt="" /> <span style={{ fontSize: '12px' }}>Free Cancellation</span></p>
              <h6 className="dfl hotel mt-1 ml-md-2" style={{ fontFamily: 'Gotham Rounded Bold', whiteSpace: 'nowrap' }}>Hotel Plaza Islamabad</h6>
              <p className="" style={{ fontFamily: 'Gotham Rounded Book', whiteSpace: 'nowrap' }}><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><b className="area"> Blue Area</b></p>
              <p className="reviewCount ml-2 float-right">1.5</p><p className="rev dfl" style={{ float: 'right', whiteSpace: 'nowrap', textAlign: 'right', margin: '0', padding: '0',lineHeight:'100%' }}><span style={{ fontFamily: 'Gotham Rounded Bold' }}>Very Good</span></p><p style={{ fontFamily: 'Gotham Rounded Book', float: 'right', margin: '0', padding: '0', fontSize: '14px' }}><u>19 review</u></p>
              <br /><br />
              <p className="mt-lg-3 mt-2 dfl" style={{ whiteSpace: 'nowrap' }}><span className="left" style={{ backgroundColor: '#FF334F', color: '#fff', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', whiteSpace: 'nowrap' }}>Only 1 Left</span> <span className="rs" style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '18px' }}>Rs. 12,000</span></p>
            </Col>
          </Row> */}
          {this.state.loading ? <PropertiesListing properties={this.state.properties} /> : <Spinner className="resLoader" animation="grow" />}

          <Row className="resWhatsapp justify-content-center" style={{ borderRadius: "10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
            <Col xs={2} lg={2} className="dfl my-auto pt-1" >
              <Image className="imgWid1 imgwiddd imgwid4" src={process.env.PUBLIC_URL + "/images/Asset36.svg"} alt="" fluid />
            </Col>
            <Col xs={6} lg={6} className="my-auto pt-3 p-0 m-0">
              <p className="chat chattxt"><span className="getText" style={{ whiteSpace: 'nowrap', fontFamily: 'Montserrat Bold' }}>Get help from Roomph Support</span><br />
                <span className="getText" style={{ fontFamily: 'Montserrat Regular', whiteSpace: 'nowrap' }}>Get the best deal from one of our experts</span></p>
            </Col>
            <Col xs={2} lg={2} className="my-auto" >
              <button className="chat chatBtn float-left" style={{ whiteSpace: 'nowrap' }}>Chat with us</button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default withRouter(Results);
export { Imgs, Child1 };