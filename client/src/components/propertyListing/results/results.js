import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './results.css';
import history from '../../history';
import Image from 'react-bootstrap/Image';
import { withRouter } from "react-router-dom";
import Slider1 from "react-slick";
import { BiMap } from "react-icons/bi";
import Filter from './filter/filter';

const data = "Hello Everyone";
var checkIn = '';
var checkOut = '';
var Adults = '';
var Rooms = '';
var nights = '';
var priceStart = '';
var priceEnd = '';
var rating = '';
var premium = '';
var category = '';

var monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
class CustomArrows extends Component {
  render() {
    const settings = {
      //dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider1 {...settings}>
          <div>
            <img className="sliderImgs" src={this.props.imgSrc} alt="" />
            {/* <img className="sliderImgs" src={process.env.PUBLIC_URL + "/images/City01.png"} alt="" /> */}
          </div>
          <div>
            <img className="sliderImgs" src={this.props.imgSrc} alt="" />
            {/* <img src={this.props.moreImgs} alt="Discount" height={"260px"} /> */}
            {/* <img className="sliderImgs" src={process.env.PUBLIC_URL + "/images/City01.png"} alt="" /> */}
          </div>
        </Slider1>
      </div>
    );
  }
}
const Properties = ({ properties }) => {
  return (
    <div>
      {properties.map((properties) => (

        <Row className="mx-auto mt-3" style={{ borderRadius: "10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
          <Col className="dfl my-auto">
            <CustomArrows imgSrc={properties.ImageURL} />
          </Col>
          <Col className="">
            <p className="dfl free mt-2" style={{ fontFamily: 'Montserrat Regular' }}><img src={process.env.PUBLIC_URL + "/images/Asset19.svg"} className="imgWid0" alt="" /> <span style={{ fontSize: '10px', whiteSpace: 'nowrap' }}>{properties.Cancellation} Cancellation</span></p>
            <button className="dfl hotel mt-1 ml-md-2 ml-1" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', border: 'none', fontSize: '18px', textAlign:'left' }} onClick={() => history.push(`/propertydetails/${properties.CityName}/${checkIn}/${checkOut}/${Adults}/${Rooms}/${nights}/${properties.AccommodationId}`)}>{properties.AccommodationName}</button>
            <p className="m-1" style={{ fontFamily: 'Gotham Rounded Book', whiteSpace: 'nowrap' }}><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><b className="area"> {properties.CityName}</b></p>
            <p className="reviewCount dfl ml-2 float-right">{properties.UserRating}</p><p className="rev dfl mt-1" style={{ float: 'right', whiteSpace: 'nowrap', textAlign: 'right', margin: '0', padding: '0', lineHeight: '80%' }}><span style={{ fontFamily: 'Gotham Rounded Bold' }}>Very Good</span></p><p style={{ fontFamily: 'Gotham Rounded Book', float: 'right', margin: '0', padding: '0', fontSize: '14px' }}><u>{properties.Rating} review</u></p>
            <br />
            <p className="mt-lg-3 mb-1 mt-3 dfl" style={{ whiteSpace: 'nowrap' }}><span className="left" style={{ backgroundColor: '#FF334F', color: '#fff', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', whiteSpace: 'nowrap' }}>Only {properties.MinRoomsAvailable} Left</span> <span className="rs float-right mt-1" style={{ fontFamily: 'Gotham Rounded Bold', fontSize: '16px' }}>Rs. {properties.MinRate}</span></p>
          </Col>
        </Row>

      ))}
    </div>
  )
};
export class Results extends Component {
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
      body: JSON.stringify({ postCity: this.props.match.params.city, postCheckIn: this.props.match.params.checkin, postCheckOut: this.props.match.params.checkout, postAdults: this.props.match.params.adults, postRooms: this.props.match.params.rooms, postPriceStart: priceStart, postPriceEnd: priceEnd, postRating: rating, postPremium: premium, postCategory: category}),
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
        {/* <p>{this.state.count}</p>
        <p>{this.state.Cancellation}</p>
        <img src={this.state.img} alt="" /> */}
        <Container fluid>
          <Row className="p-2" style={{ backgroundColor: "white", borderRadius: "0px 0px 0px 0px", border: "1px solid rgb(205, 206, 206)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)" }}>
            {/* For larger Screens */}
            <Col className="d-none d-md-block" xs={10} style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
              <Row className="p-2">
                <Col>
                  <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', textTransform: 'capitalize' }}>{this.props.match.params.city}</button>
                  <div >
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {monthsArr[this.props.match.params.checkin.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkin.slice(5, -2) - 1]} - {this.props.match.params.checkout.substring(7)}th  {monthsArr[this.props.match.params.checkout.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkout.slice(5, -2) - 1]} </button>
                    {/* <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {(new Date()).toLocaleString('default', { month: 'short' })} - {this.props.match.params.checkout.substring(7)}th {(new Date()).toLocaleString('default', { month: 'short' })} </button> */}
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
                  <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', textTransform: 'capitalize' }}>{this.props.match.params.city}</button>
                  <div style={{ height: '15px' }}>

                  </div>
                  <div style={{ position: 'absolute', top: '15px' }}>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{this.props.match.params.checkin.substring(7)}th {monthsArr[this.props.match.params.checkin.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkin.slice(5, -2) - 1]} - {this.props.match.params.checkout.substring(7)}th  {monthsArr[this.props.match.params.checkout.slice(5, -3) - 1]}{monthsArr[this.props.match.params.checkout.slice(5, -2) - 1]} </button>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>{' '} . {this.props.match.params.adults} guests</button>
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
        <Container fluid>
          <Row className="">
            <Col className="dfl">
              <div id="box-search">
                <div className="thumbnail">
                  <Image className="featuredImg" src={process.env.PUBLIC_URL + "/images/slider.png"} alt="hotel" fluid />
                  <div className="caption">
                    <img src={process.env.PUBLIC_URL + "/images/Asset16.png"} width={60} alt="" />
                  </div>
                  <div className="caption1 my-auto">
                    <p className="p-2 para my-auto" style={{ fontFamily: 'Gotham Rounded Bold' }}><img className="VAL" src={process.env.PUBLIC_URL + "/images/Asset99.svg"} width={20} height={20} alt="" /><img className="VAL" src={process.env.PUBLIC_URL + "/images/Asset99.svg"} width={20} height={20} alt="" /><img className="VAL" src={process.env.PUBLIC_URL + "/images/Asset99.svg"} width={20} height={20} alt="" /> Pine View Hotel <span style={{ float: 'right', paddingTop: '2px' }}> Rs. 7,500 <span style={{ fontFamily: 'Gotham Rounded Book' }}>/ night</span></span></p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={3}>
              <button className="Buttons mt-3">Sort</button>
            </Col>
            <Col xs={4} className="mt-3 float-left">
              <Filter city={this.props.match.params.city} checkIn={this.props.match.params.checkin} checkOut={this.props.match.params.checkout} rooms={this.props.match.params.rooms} adults={this.props.match.params.adults} nights={this.props.match.params.nights} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p className="para2" style={{ fontFamily: 'Montserrat Regular', fontSize: '14px' }}><u>Showing {this.state.Count} properties - {this.state.CityName}</u></p>
              <p className=" p-2 para" style={{ width: '100%', backgroundColor: '#FF5D47', color: '#fff', borderRadius: '10px', fontFamily: 'Montserrat Regular' }}><u>Sign up</u> and get 20% off on your first booking.</p>
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
          <Properties properties={this.state.properties} />
          <Row className="mx-lg-5 mt-3 mx-auto justify-content-center" style={{ borderRadius: "10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
            <Col xs={2} lg={2} className="dfl my-auto pt-1" >
              <Image className="imgWid1 imgwid4" src={process.env.PUBLIC_URL + "/images/Asset36.svg"} width={100} alt="" fluid />
            </Col>
            <Col xs={6} lg={6} className="my-auto pt-3 p-0 m-0">
              <p className="chat chattxt"><span style={{ whiteSpace: 'nowrap', fontSize: '13px', fontFamily: 'Montserrat Bold' }}>Get help from Roomph Support</span><br />
                <span style={{ fontSize: '10px', fontFamily: 'Montserrat Regular', whiteSpace: 'nowrap' }}>Get the best deal from one of our experts</span></p>
            </Col>
            <Col xs={2} lg={2} className="my-auto" >
              <button className="chat chatBtn float-left" style={{whiteSpace:'nowrap'}}>Chat with us</button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default withRouter(Results);
