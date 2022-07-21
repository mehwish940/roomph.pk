import React, { Component, useState, useCallback, useMemo } from "react";
import Slider from "react-slick";
import Slider1 from "react-slick";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from "@react-google-maps/api";
import './slider.css';
import './carousel.css';
import { BiMap } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import './description.css';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import history from '../../history';
import { Modal } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import en_PK from 'date-fns/locale/en-IN';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import History from '../../history';
import { RiArrowDropDownLine } from "react-icons/ri";
import { withRouter } from "react-router-dom";
import Lightbox from 'react-image-lightbox';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import Spinner from 'react-bootstrap/Spinner';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import './lightbox.css';
import './Top.css';
import { Child1 } from "../../propertyListing/results/results";
import { Imgs } from "../../propertyListing/results/results";

var mulImgs = '';
let containerStyle = {};
if (window.innerWidth < 480) {
  containerStyle = {
    width: '400px',
    height: '250px'
  };
}
else {
  containerStyle = {
    width: '940px',
    height: '400px',
    marginLeft: '20px'
  };
}


function MapComponent(props) {
  console.log(props.nlat, props.nlong)
  if (props.nlat !== '' && props.nlong !== '') {
    var markers = [{
      lat: Number(props.nlat),
      lng: Number(props.nlong),
      LatLng: [{
        lat: Number(props.nlat),
        lng: Number(props.nlong)
      }]
    }]
  }

  console.log(markers);

  //console.log(wlat)
  const center = {
    lat: parseFloat(props.nlat),
    lng: parseFloat(props.nlong)
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCk-pNTcBE9RFmTXJB1E-Ec5i0TN-t4Zrs"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(20);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      options={{ streetViewControl: false, mapTypeControl: false }}
      streetViewControl={false}
      mapTypeControl={false}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      {
        markers.map((mar, index) => {
          var position = {
            lat: mar.lat,
            lng: mar.lng
          }
          return (<Marker
            key={index}
            position={position}
            icon={'https://www.roomph.pk/v1/images/marker-icon.png'}
            animation={window.google.maps.Animation.DROP}
          />)
        })
      }
      <></>
    </GoogleMap>
  ) : <></>
}
const Child2 = () => {
  return (
    <>
      <Imgs.Consumer>
        {(Imgs) => {
          mulImgs = Imgs
          //console.log(mulImgs);
          return null;
        }}
      </Imgs.Consumer>
    </>
  );
};

var checkIn = '';
var checkOut = '';
var Adults = '';
var Rooms = '';
var nights = '';
var priceStart = '';
var priceEnd = '';
var rating = '';
var image1 = '';
var image2 = '';
var image3 = '';
var image4 = '';
var image5 = '';
var premium = '';
var hotName = '';
var logoUrl = '';
var category = '';
var Children = '';
var roomq = ' ';
var CityName = '';
var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


class CustomArrows extends Component {
  slidersCont() {
    return this.props.imgSrc.map((img, index) => {
      return (
        <div key={img.$.Photo_Max500}>
          {/* Success.Result[0].HotelRooms[0].RoomImages[0].RoomImage[0].$.Photo_Max500 */}
          <img className="sliderImgs" src={img.$.Photo_Max500} alt="Corrupt" />
          {/* <img src={this.props.moreImgs} alt="Discount" height={"260px"} /> */}
          {/* <img className="sliderImgs" src={process.env.PUBLIC_URL + "/images/City01.png"} alt="" /> */}
        </div>)
    })
  }
  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider1 {...settings}>
          {this.slidersCont()}
        </Slider1>
      </div>
    );
  }
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
    // const oneDay = 24 * 60 * 60 * 1000;
    // const firstDate = new Date(from.toISOString());
    // const secondDate = new Date(to.toISOString());
    //diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    var fromMonth = new Date(from.toISOString()).toLocaleString('en-pk', { weekday: 'short', month: 'short' });
    var toMonth = new Date(to.toISOString()).toLocaleString('en-pk', { weekday: 'short', month: 'short' });
    checkIn = `${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}`;
    checkOut = `${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}`;
    // var nights = '';
    // if (diffDays <= 1) {
    //   nights = `${diffDays + 1} night`;
    // }
    // else {
    //   nights = `${diffDays + 1} nights`;
    // }
    return <div>
      {/* <div style={{ backgroundColor: 'white', width: '330px', top: '350px', height: '35px', position: 'absolute', zIndex: '100' }}>
        <p className="float-right mr-2" style={{ fontFamily: 'Roboto Medium' }}>{monthsArr[from.getMonth() + 1]}{' '}{to.getFullYear()}</p>
      </div> */}
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
      {/* <p className="text-center" style={{fontSize:"14px"}}>{from.getFullYear()}-{from.getMonth()+1}-{from.getDate()}-----{to.getFullYear()}-{to.getMonth()+1}-{to.getDate()}</p>
      {from.toISOString().split('T')[0]} - {to.toISOString().split('T')[0]} */}
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
//Slider
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

function SampleNextArrow1(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", marginRight: '15px', zIndex: '100' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow1(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", marginLeft: '15px', zIndex: '100' }}
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
    const settings1 = {
      nextArrow: <SampleNextArrow1 />,
      prevArrow: <SamplePrevArrow1 />
    };
    return (
      <div>
        <Slider {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <img className="CarouselImg" src={mulImgs[0] ? mulImgs[0] : image1 ? image1 : null} alt="" />
          </div>
          <div>
            <img className="CarouselImg" src={mulImgs[1] ? mulImgs[1] : image2 ? image2 : null} alt="" />
          </div>
          <div>
            <img className="CarouselImg" src={mulImgs[2] ? mulImgs[2] : image3 ? image3 : null} alt="" />
          </div>
          <div>
            <img className="CarouselImg" src={mulImgs[3] ? mulImgs[3] : image4 ? image4 : null} alt="" />
          </div>
          <div>
            <img className="CarouselImg" src={mulImgs[4] ? mulImgs[4] : image5 ? image5 : null} alt="" />
          </div>
        </Slider>
        <Slider {...settings1}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <img className="pr-1 CarouselImg1" src={mulImgs[0] ? mulImgs[0] : image1 ? image1 : null} alt="" />
          </div>
          <div>
            <img className="pr-1 CarouselImg1" src={mulImgs[1] ? mulImgs[1] : image2 ? image2 : null} alt="" />
          </div>
          <div>
            <img className="pr-1 CarouselImg1" src={mulImgs[2] ? mulImgs[2] : image3 ? image3 : null} alt="" />
          </div>
          <div>
            <img className="pr-1 CarouselImg1" src={mulImgs[3] ? mulImgs[3] : image4 ? image4 : null} alt="" />
          </div>
          <div>
            <img className="pr-1 CarouselImg1" src={mulImgs[4] ? mulImgs[4] : image5 ? image5 : null} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
//Slider End


//Lightbox 

class LightboxExample extends Component {

  constructor(props) {

    super(props);
    //console.log(this.props.img1)
    this.state = {
      photoIndex: 0,
      images:
        [],
      isOpen: false,
    };
  }

  render() {
    const images = [`${this.props.img1}`,
    `${this.props.img2}`,
    `${this.props.img3}`,
    `${this.props.img4}`,
    `${this.props.img5}`,]
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <Container className="mt-3">
          <Row>
            <Col xs={12}>
              <AsNavFor imgSrc={mulImgs} />
            </Col>
          </Row>
        </Container>

        <button className="Btn mb-3 vAllBtn" style={{ fontSize: '14px', width: '120px' }} type="button" onClick={() => this.setState({ isOpen: true })}>
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

const Reviews = ({ userAllReviews }) => {
  const settings = {
    dots: false,
    infinite: true,
    // infinite: properties.length < 2 ? false : true,
    slidesToShow: window.innerWidth < 480 ? 1.1 : 3,
    slidesToScroll: window.innerWidth < 480 ? 1 : 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  if (userAllReviews == null) return <p className="mx-5">"No Reviews"</p>;
  else return (
    <div>
      <Slider {...settings}>
        {userAllReviews.map((userReviews, index) => (
          <div key={index} className="Ful1">
            <section className="mb-3 newFull">
              <Container className="reviewCont" style={{ border: "1px solid rgb(205, 206, 206)", borderRadius: "15px 15px 15px 15px", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row>
                  <Col xs={3} sm={3} lg={3} className="mt-3">
                    <img className="revHotelPic" src={logoUrl} alt="" style={{ borderRadius: "40%" }} />
                  </Col>
                  <Col xs={8} sm={8} className="hotel mt-3">
                    <h5 className="hotelName" style={{ color: "#414042" }}>{hotName}</h5>
                  </Col>
                </Row>
                <Row className="mt-2 reviewText">
                  <Col xs={12}>
                    <p className="revText" style={{ margin: "0", padding: "0", fontFamily: "Montserrat Thin", textAlign: 'justify' }}>“{userReviews.review}”</p>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p style={{ fontFamily: "Montserrat Thin", fontStyle: "italic", fontSize: "12px" }}>- {userReviews.fullname}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>


        ))}
      </Slider>
    </div>
  )
};


const AvailableRooms = ({ properties1 }) => {
  const [data, setData] = useState([]);

  return (
    <div>
      {properties1.map((properties1) => {
        //console.log(properties1)
        return (
          <Container key={properties1.RoomId} className="availableRoomsCont" fluid>
            <Row className="mx-1 mt-3" style={{ borderRadius: "0px 10px 10px 10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
              <Col style={{ margin: '0', padding: '0' }}>
                {/* {console.log([properties1.RoomImages[0].RoomImage[0].$.Photo_Max500 ? properties1.RoomImages[0].RoomImage[0].$.Photo_Max500 : null])} */}
                <CustomArrows imgSrc={[properties1.RoomImages[0].RoomImage ? properties1.RoomImages[0].RoomImage[0] : null]} />
              </Col>
              <Col className="mt-1">
                <p className="m-1 p-0" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '16px' }}><b>{properties1.RoomName}</b></p>
                {/* <p hidden>{splitString = (properties1.RoomFacilityName[0]).split(" "); {splitString[1]}}</p> */}
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset6.svg"} width={15} alt="" />Free Wifi</p>
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset26.svg"} width={15} alt="" />1 double bed</p>
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset25.svg"} width={15} alt="" />80m2/861 ft2</p>
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset24.svg"} width={15} alt="" />Garden view</p>
                <p className="m-1 p-0" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><img className="facility mr-2" src={process.env.PUBLIC_URL + "/images/Asset23.svg"} width={15} alt="" />Shower</p>
              </Col>
              <Col className="mt-3" xs={12}>
                <p> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '10px' }}><b>{properties1.RatePlanDetails[0].RatePlans[0]?.RatePlanName ? properties1.RatePlanDetails[0].RatePlans[0]?.RatePlanName : null} - <i>{properties1.RatePlanDetails[0].RatePlans[0]?.BookingPolicy == '100% will be charged at the time of booking.\n\n' ? 'Pay Later' : 'Pay Now'}</i></b></span> <img className="facility pt-1" src={process.env.PUBLIC_URL + "/images/Asset28.svg"} width={10} alt="" /> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>{properties1.RatePlanDetails[0].RatePlans[0]?.CancellationPolicyType ? properties1.RatePlanDetails[0].RatePlans[0]?.CancellationPolicyType : null} Cancellation</span> <span className="float-right" style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>max. {properties1.RatePlanDetails[0].RatePlans[0]?.MaxPerson ? properties1.RatePlanDetails[0].RatePlans[0]?.MaxPerson : null} <img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /><img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /></span> </p>
              </Col>
              <Col xs={8}>
                <p style={{ marginTop: '6px', fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}> Rs. <span style={{ fontSize: '16px', color: 'red' }}>{properties1.RatePlanDetails[0].RatePlans[0]?.Rate ? Number(properties1.RatePlanDetails[0].RatePlans[0]?.Rate).toLocaleString() : null}</span>  </p>
              </Col>
              <Col xs={4}>
                <DropDown setData={setData} data={data} roomId={properties1.RoomId[0]} planId={properties1.RatePlanDetails[0].RatePlans[0]?.RatePlanId[0]} roomRate={properties1.RatePlanDetails[0].RatePlans[0]?.Rate[0]} />
              </Col>
              {properties1.RatePlanDetails[0].RatePlans[1]?.RatePlanName ? <Row className="roomBottom">
                <Col className="mt-3" xs={12}>
                  <p> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '10px' }}><b>{properties1.RatePlanDetails[0].RatePlans[1]?.RatePlanName ? properties1.RatePlanDetails[0].RatePlans[1]?.RatePlanName : null} - <i>{properties1.RatePlanDetails[0].RatePlans[1]?.BookingPolicy == '100% will be charged at the time of booking.\n\n' ? 'Pay Later' : 'Pay Now'}</i></b></span> <img className="facility pt-1" src={process.env.PUBLIC_URL + "/images/Asset19.svg"} width={10} alt="" /> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>{properties1.RatePlanDetails[0].RatePlans[1]?.CancellationPolicyType ? properties1.RatePlanDetails[0].RatePlans[1]?.CancellationPolicyType : null} Cancellation</span> <span className="float-right personIcons" style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>max. {properties1.RatePlanDetails[0].RatePlans[1]?.MaxPerson ? properties1.RatePlanDetails[0].RatePlans[1]?.MaxPerson : null} <img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /><img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /></span> </p>
                </Col>
                <Col xs={8}>
                  <p style={{ marginTop: '6px', fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}> Rs. <span style={{ fontSize: '16px', color: 'red' }}>{properties1.RatePlanDetails[0].RatePlans[1]?.Rate ? Number(properties1.RatePlanDetails[0].RatePlans[1]?.Rate).toLocaleString() : null}</span>  </p>
                </Col>
                <Col xs={4}>
                  {/* <div className="dropdown float-right" style={{ whiteSpace: 'nowrap' }}>
                  <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">0</span> <RiArrowDropDownLine /></button>
                  <div className={`dropdown-content ${dropdownState ? "isVisible" : "isHidden"}`}>
                    <button onClick={handleSelectRoom1}>1</button>
                    <button onClick={handleSelectRoom2}>2</button>
                    <button onClick={handleSelectRoom3}>3</button>
                  </div>
                </div> */}
                  {/* <div className={`dropdown float-right`} style={{ whiteSpace: 'nowrap' }}>
                    <button onClick={handleDropdownClick} className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>
                      {dropdownValue === "" ? "Rooms 0" : `Rooms ${dropdownValue}`} <RiArrowDropDownLine /></button>
                    <div className={`dropdown-content ${dropdownState ? "isVisible" : "isHidden"}`}>
                      <button onClick={() => handleSelectRoom1('1', '4')} >1</button>
                      <button onClick={() => handleSelectRoom2('2', '5')} >2</button>
                      <button onClick={() => handleSelectRoom3('3', '6')} >3</button>
                    </div>
                  </div> */}

                  <DropDown setData={setData} data={data} roomId={properties1.RoomId[0]} planId={properties1.RatePlanDetails[0].RatePlans[1]?.RatePlanId[0]} roomRate={properties1.RatePlanDetails[0].RatePlans[1]?.Rate[0]} />

                </Col>
              </Row> : null}
              {/* <Col className="mt-3" xs={12}>
              <p> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '10px' }}><b>Roomph Special Rate - <i>Pay Later</i></b></span> <img className="facility pt-1" src={process.env.PUBLIC_URL + "/images/Asset19.svg"} width={10} alt="" /> <span style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}>Free Cancellation</span> <span className="float-right" style={{ fontFamily: 'Montserrat Regular', fontSize: '8px' }}><img className="facility1" src={process.env.PUBLIC_URL + "/images/Asset22.svg"} width={10} alt="" /></span> </p>
            </Col>
            <Col xs={8}>
              <p style={{ marginTop: '6px', fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}> Rs. <span style={{ fontSize: '16px', color: 'red' }}>{properties1.RatePlanDetails[0].RatePlans[0].Rate[0]}</span>  </p>
            </Col>
            <Col xs={4}>
              <div className="dropdown float-right" style={{ whiteSpace: 'nowrap' }}>
                <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">0</span> <RiArrowDropDownLine /></button>
                <div className="dropdown-content">
                  <button onClick={handleSelectRoom1}>1</button>
                  <button onClick={handleSelectRoom2}>2</button>
                  <button onClick={handleSelectRoom3}>3</button>
                </div>
              </div>
            </Col> */}
              <Col className="mx-auto">
                <button className="DSearchButton mb-3" onClick={() => History.push(`/customerinformation/${CityName}/${checkIn}/${checkOut}/${Adults}/${Rooms}/${nights}/${idd}/${properties1.RoomId}/${JSON.stringify(data)}/${roomq}/${properties1.RatePlanDetails[0].RatePlans[0].Rate}`)}>Book Now</button>
              </Col>
            </Row>
          </Container>
        )
      })}
    </div>
  )
};

//Getting Property Details End

//Rooms Dropdown
function DropDown({ setData, data, roomId, planId, roomRate }) {
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSelectRoom0 = (value, id) => {
    if (id === '0') {
      setDropdownValue(value);
      roomq = 0;
      setDropdownState(!dropdownState);
      let DATA = data.filter(item => !(item.planId == planId && item.roomId == roomId && item.roomRate == roomRate))
      // debugger
      DATA.push({ roomId: roomId, planId: planId, roomQ: value, roomRate: roomRate })
      setData(DATA)
    }

  }
  const handleSelectRoom1 = (value, id) => {
    if (id === '1') {
      setDropdownValue(value);
      roomq = 1;
      setDropdownState(!dropdownState);
      let DATA = data.filter(item => !(item.planId == planId && item.roomId == roomId && item.roomRate == roomRate))
      // debugger
      DATA.push({ roomId: roomId, planId: planId, roomQ: value, roomRate: roomRate })
      setData(DATA)
    }

  }

  const handleSelectRoom2 = (value, id) => {
    if (id === '2') {
      setDropdownValue(value);
      roomq = 2;
      setDropdownState(!dropdownState);
      let DATA = data.filter(item => !(item.planId == planId && item.roomId == roomId && item.roomRate == roomRate))

      // debugger
      DATA.push({ roomId: roomId + ',' + roomId, planId: planId + ',' + planId, roomQ: value + ',' + value, roomRate: roomRate + ',' + roomRate })
      setData(DATA)
    }
  }

  const handleSelectRoom3 = (value, id) => {
    if (id === '3') {
      setDropdownValue(value);
      roomq = 3;
      setDropdownState(!dropdownState);
      let DATA = data.filter(item => !(item.planId == planId && item.roomId == roomId && item.roomRate == roomRate))
      // debugger
      DATA.push({ roomId: roomId + ',' + roomId + ',' + roomId, planId: planId + ',' + planId + ',' + planId, roomQ: value + ',' + value + ',' + value, roomRate: roomRate + ',' + roomRate + ',' + roomRate })
      setData(DATA)

    }
  }
  return (
    <div className={`dropdown float-right`} style={{ whiteSpace: 'nowrap' }}>
      <button onClick={handleDropdownClick} className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>
        {dropdownValue === "" ? "Rooms 0" : `Rooms ${dropdownValue}`} <RiArrowDropDownLine /></button>
      <div className={`dropdown-content ${dropdownState ? "isVisible" : "isHidden"}`}>
        <button onClick={() => handleSelectRoom0('0', '0')} >-</button>
        <button onClick={() => handleSelectRoom1('1', '1')} >1</button>
        <button onClick={() => handleSelectRoom2('2', '2')} >2</button>
        <button onClick={() => handleSelectRoom3('3', '3')} >3</button>
      </div>
    </div>
  )
}

export class Description extends Component {
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
    facilities: [], logo: '', loading1: false, loading: false, reviews: [], hotelName: '', price: '', address: '', rating: '', userRating: '', description: '', nearby: '', userReviews: [], properties1: [], pImgs: [], CityName: '', Cancellation: '', Count: '', img: '',
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => {
        //console.clear();
        //const json = JSON.stringify(res);
        //console.log(res);
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
          //Count: res.Success.result[0].TotalCount,
          //CityName: res.Success.result[0].CityName
          // img: res.Success.result[0].AccommodationImages[0].URL[0]
        });
        this.setState({ loading: true });
      })
      .catch(err => console.log(err));

    this.callApi1()
      .then(res => {
        //console.clear();
        //const json = JSON.stringify(res);
        //console.log(res);
        this.setState({
          properties1: res.Success.Result[0].HotelRooms,
          // img: res.Success.result[0].AccommodationImages[0].URL[0]
        });
        this.setState({ loading1: true });
      })
      .catch(err => console.log(err));

    this.callApi2()
      .then(res => {
        //console.clear();
        //const json = JSON.stringify(res);
        //console.log(res.result.data[0].item);
        this.setState({
          userReviews: res.result.data[0].item,
          // img: res.Success.result[0].AccommodationImages[0].URL[0]
        });

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
    //console.log(this.props.match.params.city);
    const response = await fetch('/api/hotelDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postHotelId: idd }),
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    //console.log(body);
    this.setState({ responseToPost: body });
    return body;
  };

  callApi1 = async () => {
    idd = this.props.match.params.id;
    checkIn = this.props.match.params.checkin;
    checkOut = this.props.match.params.checkout;
    CityName = this.props.match.params.city;
    const response = await fetch('/api/getRooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postID: idd, postCheckIn: checkIn, postCheckOut: checkOut }),
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    // console.log(body);
    this.setState({ responseToPost: body });
    return body;
  };

  callApi2 = async () => {
    idd = this.props.match.params.id;
    const response = await fetch('/api/hotelReviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postHotelId: idd }),
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    //console.log(body);
    this.setState({ responseToPost: body });
    return body;
  };

  render() {
    image1 = this.state.img1;
    image2 = this.state.img2;
    image3 = this.state.img3;
    image4 = this.state.img4;
    image5 = this.state.img5;
    hotName = this.state.hotelName;
    logoUrl = this.state.logo;
    return (
      <section className="mb-3">
        <Modal show={this.state.showHide} centered>
          <div style={{ backgroundColor: 'white', width: '350px', height: '75px', position: 'absolute', zIndex: '100' }}>
            <button onClick={() => this.handleModalShowHide()} className="mt-2 ml-3" style={{ border: "none", background: "none", paddingRight: '400px' }}><MdOutlineKeyboardArrowLeft /></button>
          </div>
          <div className="mt-1 mb-3">
            <DataRange display={true} />
          </div>
          <button className="dateDoneBtn mx-auto mb-3" onClick={() => { history.push(`/propertydetails/${CityName}/${checkIn}/${checkOut}/${Adults}/${Rooms}/${nights}/${idd}`); this.handleModalShowHide(); window.location.reload(false); }}>Done</button>
        </Modal>

        <Modal show={this.state.showHide1} centered>
          <button onClick={() => this.handleModalShowHide1()} className="mt-2 ml-3" style={{ border: "none", background: "none", paddingRight: '400px' }}><MdOutlineKeyboardArrowLeft /></button>

          <div className="mt-1 mb-3 mx-auto">
            <RoomsAdultsChild />
          </div>
          <button className="dateDoneBtn mx-auto mb-3" onClick={() => { history.push(`/propertylisting/${this.props.city}/${this.props.checkIn}/${this.props.checkOut}/${this.props.adults}/${this.props.rooms}/${this.props.nights}/${priceStart}/${priceEnd}/${premium}/${rating}/${category}`); this.handleModalShowHide(); window.location.reload(false); }}>Done</button>
        </Modal>
        {/* <p>{this.state.Count}</p> */}
        <Container fluid>
          {/* Topbar */}
          <Row className="fullBanner" style={{ backgroundColor: "white", borderRadius: "0px 0px 20px 20px", border: "1px solid rgb(205, 206, 206)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)" }}>
            {/* For Larger Screens */}
            <Col className="d-none d-md-block" xs={10} lg={8} style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
              <Row className="p-1">
                <Col>
                  <button className="topbarBtn pt-lg-1" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none' }}>{this.props.match.params.city}</button>
                  <div >
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {monthsArr[this.props.match.params.checkin.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkin.slice(5, -2) - 1]} - {this.props.match.params.checkout.substring(7)}th  {monthsArr[this.props.match.params.checkout.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkout.slice(5, -2) - 1]} </button>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . {this.props.match.params.adults} guests</button>
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
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }} onClick={() => this.handleModalShowHide()}>{this.props.match.params.checkin.substring(7)}th {monthsArr[this.props.match.params.checkin.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkin.slice(5, -2) - 1]} - {this.props.match.params.checkout.substring(7)}th  {monthsArr[this.props.match.params.checkout.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkout.slice(5, -2) - 1]} </button>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }} onClick={() => this.handleModalShowHide1()}>{' '} . {this.props.match.params.adults} guests</button>
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
        <LightboxExample img1={this.state.img1} img2={this.state.img2} img3={this.state.img3} img4={this.state.img4} img5={this.state.img5} />
        <Child2 />
        <Container fluid>
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
              <button className="Button" style={{ fontSize: '14px', width: '100px' }} type="button"> Best Seller </button>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2 mx-auto" xs={12}>
              <p className="ml-1" style={{ fontSize: '20px', fontFamily: 'Gotham Rounded Bold', whiteSpace: 'nowrap', lineHeight: '50%' }}><span className="mr-2  hotN">{this.state.hotelName}</span>{
                Array.apply(null, { length: this.state.rating ? Number(this.state.rating) : 0 }).map(Number.call, Number).map((item) => {
                  return <img key={item} src={process.env.PUBLIC_URL + "/images/Asset100.svg"} className="imgWidD" alt="" />
                })
              }</p>
              {/* <p style={{ fontSize: '13px', fontFamily: 'Gotham Rounded Book', whiteSpace: 'nowrap' }}>
                {
                  Array.apply(null, { length: this.state.rating ? Number(this.state.rating) : 0 }).map(Number.call, Number).map((item) => {
                    return <img key={item} src={process.env.PUBLIC_URL + "/images/starsred.svg"} className="imgWidr" alt="" />
                  })
                }
              </p> */}
              <p className="PDPrice" style={{ fontSize: '20px', fontFamily: 'Gotham Rounded Bold', whiteSpace: 'nowrap', lineHeight: '50%' }}><span className="price float-right priceContain"><span style={{ fontSize: '14px', color: 'red' }}>Rs.</span> <span style={{ color: 'red' }}>{this.props.match.params.price}</span> <br /><span style={{ fontSize: '10px', marginLeft: '5px' }}>avg. per night</span></span></p>
              <Row>
                <Col xs={2}>
                  <p className="reviewCount1">{this.state.userRating}</p>
                </Col>
                <Col className="revD">
                  <p className="ml-2 rev dfl" style={{ whiteSpace: 'nowrap', margin: '0', padding: '0', lineHeight: '50%' }}><span style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '14px' }}>Very Good</span></p><p style={{ fontFamily: 'Gotham Rounded Book', margin: '0', padding: '0', fontSize: '14px' }}><span><u>{this.state.rating} review{this.state.rating > 1 ? "s " : ' '}</u></span></p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="">
            <Col className="mapHeading" xs={12}>
              <h6 className="ml-3 mt-3" style={{ fontFamily: 'Montserrat Bold' }}>Location</h6>
              <MapComponent nlat={this.props.match.params.lat} nlong={this.props.match.params.long} />
            </Col>
          </Row>
          <Row>
            <Col className="addressC" xs={12}>
              <p className="mt-2 addressCont" style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '14px' }}><BiMap className="addressCont" /> {this.state.address}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="dfl ml-3">
              <h6 className="ml-3 mr-2" style={{ fontSize: '18px', fontFamily: 'Gotham Rounded Medium', fontWeight: '600' }}>Reviews For {this.state.hotelName}</h6>
            </Col>
            <Col xs={12} className="dfl">
              {this.state.loading ? <Reviews userAllReviews={this.state.userReviews} /> : <Spinner className="ml-3" animation="border" />}
              <p className="text-center" style={{ fontSize: '12px' }}><u>View All</u></p>
            </Col>
          </Row>
          {this.state.loading1 ? <AvailableRooms properties1={this.state.properties1} /> : <Spinner animation="grow" />}

          {/* <Row>
  <Col xs={12}>
    <h6 style={{ fontSize: '18px', fontFamily: 'Gotham Rounded Medium', fontWeight: '600' }}>Reviews For {properties.AccommodationName}</h6>
  </Col>
  <Col xs={12}>
    <Reviews />
  </Col>
</Row> */}

          <Row className="mt-3 mapHeading">
            <Col xs={12}>
              <h6 style={{ fontFamily: 'Gotham Rounded Medium', margin: '0', padding: '0', fontSize: '18px' }}>Know More About {this.state.hotelName}</h6>
            </Col>
            <Col xs={12}>
              <p className="mt-1" style={{ textAlign: "justify", fontFamily: 'Gotham Rounded Book', fontSize: '13px' }}>{this.state.description} <span className="float-right"></span> </p>
              {/* <br /><b><u>See More</u></b> */}
            </Col>
          </Row>
          <Child1 />
          <Row className="mapHeading">
            <Col className="" xs={12}>
              <h6 style={{ fontFamily: 'Gotham Rounded Medium', margin: '0', padding: '0', fontSize: '18px' }}>Popular Landmarks</h6>
              <p className="mt-2" style={{ margin: '0', padding: '0', fontFamily: 'Gotham Rounded Book', fontSize: '13px' }}>{this.state.nearby} </p>
              {/* <span className="float-right">4.65km</span></p>
    <p style={{ margin: '0', padding: '0', fontFamily: 'Gotham Rounded Book', fontSize: '13px' }}>West End Plaza <span className="float-right">4.93 km</span></p>
    <p style={{ margin: '0', padding: '0', fontFamily: 'Gotham Rounded Book', fontSize: '13px' }}>Libra Jewellers <span className="float-right">5.29 km</span></p> */}
            </Col>
          </Row>
          <Row className="mt-3 mapHeading">
            <Col xs={12}>
              <p>
                <b>
                  <h6 style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '18px' }}>Some Helpful Information</h6>
                </b>
                <p style={{ fontFamily: 'Gotham Rounded Medium', fontSize: '12px' }}>Check-in from 10:30 am <span style={{ color: 'red' }}><i>until</i></span>  01:30 pm <br />
                  Check-out from 11:00 am <span style={{ color: 'red' }}><i>until</i></span> 12:30 pm</p>
              </p>
            </Col>
          </Row>
        </Container>






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
                <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">0</span> <RiArrowDropDownLine /></button>
                <div className="dropdown-content">
                  <button >1</a>
                  <button >2</a>
                  <button >3</a>
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
                <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">0</span> <RiArrowDropDownLine /></button>
                <div className="dropdown-content">
                  <button >1</a>
                  <button >2</a>
                  <button >3</a>
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
                <button className="dropbtn" style={{ fontFamily: 'Montserrat Regular' }}>Rooms <span className="ml-2">0</span> <RiArrowDropDownLine /></button>
                <div className="dropdown-content">
                  <button >1</a>
                  <button >2</a>
                  <button >3</a>
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
export { Child2 };