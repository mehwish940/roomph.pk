import React, { Component, useState, useCallback, useMemo, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./search.css";
import { withRouter } from "react-router-dom";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import History from '../../history';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import en_PK from 'date-fns/locale/en-IN';
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
require("./autocomplete.css");

let handleOpen = false;
let handleClose = true;
let handleOpen1 = false;
let handleClose1 = true;
var checkIn = '';
var checkOut = '';
var chkIn = 'Check-in-date';
var chkOut = 'Check-out-date';
var rm = '1';
var ad = '2';
var ch = '0';
var citi = '';
var Adults = '';
var Children = '';
var userInput = '';
var priceStart = ' ';
var priceEnd = ' ';
var rating = ' ';
var premium = ' ';
var category = '8';
var sortType = "0";
var sortBy = "1";
// var hotel = ' ';
// var apartment = ' ';
// var guesthouse = ' ';
var Rooms = '';
var diffDays = '';
var monthsArr = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  onChange = e => {
    const { suggestions } = this.props;

    userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    citi = filteredSuggestions[activeSuggestion];
    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a className
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <p className="mt-1"  style={{ color: "rgb(147, 148, 149)" }}>City Not Found</p>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          className="nosubmit"
          placeholder="Enter place, hotel, or guesthouse"
        />
        {suggestionsListComponent}
      </Fragment>
    );
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
                <button className="PMB pl-5" type="button" style={{ border: "none", background: "none", color: "#EF4E22" }} onClick={decRooms}><AiOutlineMinusCircle /></button>
                <input className="PMB pl-2" style={{ width: "30px", border: "none", color: "#EF4E22", fontFamily: "Gotham Medium", fontSize: "16px" }} type="text" value={rooms} onChange={handleChangeRooms} />
                <button className="PMB  pl-1" type="button" style={{ border: "none", background: "none", color: "#EF4E22" }} onClick={incRooms}><AiOutlinePlusCircle /></button>
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
                <button className="PMB pl-5" type="button" style={{ marginLeft: '3px', border: "none", background: "none", color: "#EF4E22" }} onClick={decAdults}><AiOutlineMinusCircle /></button>
                <input className="PMB pl-2" style={{ width: "30px", border: "none", color: "#EF4E22", fontFamily: "Gotham Medium", fontSize: "16px" }} type="text" value={adults} onChange={handleChangeAdults} />
                <button className="PMB  pl-1" type="button" style={{ border: "none", background: "none", color: "#EF4E22" }} onClick={incAdults}><AiOutlinePlusCircle /></button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="mt-2">
              <div style={{ whiteSpace: 'nowrap' }}>
                <label className="ml-1" style={{ fontFamily: "Gotham Medium", color: "#EF4E22", fontSize: "16px" }}>
                  Child
                </label>
                <button className="PMB pl-5" type="button" style={{ marginLeft: '14px', border: "none", background: "none", color: "#EF4E22" }} onClick={decChild}><AiOutlineMinusCircle /></button>
                <input className="PMB pl-2" style={{ width: "30px", border: "none", color: "#EF4E22", fontFamily: "Gotham Medium", fontSize: "16px" }} type="text" value={child} onChange={handleChangeChild} />
                <button className="PMB  pl-1" type="button" style={{ border: "none", background: "none", color: "#EF4E22" }} onClick={incChild}><AiOutlinePlusCircle /></button>
              </div>
            </Col>
          </Row>

        </Container>
      </form>
    </>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 370,
  height: 260,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
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


function DataRange(props) {
  const [to, setTo] = useState(new Date());
  const [from, setFrom] = useState(addDays(new Date(), 2));

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
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(from.toISOString());
    const secondDate = new Date(to.toISOString());
    diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    var fromMonth = new Date(from.toISOString()).toLocaleString('en-pk', { weekday: 'short', month: 'short' });
    var toMonth = new Date(to.toISOString()).toLocaleString('en-pk', { weekday: 'short', month: 'short' });
    checkIn = `${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}`;
    checkOut = `${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}`;
    var nights = '';
    if (diffDays <= 1) {
      nights = `${diffDays + 1} night`;
    }
    else {
      nights = `${diffDays + 1} nights`;
    }
    return <div>
      <div style={{ backgroundColor: 'white', width: '330px', height: '75px', position: 'absolute', zIndex: '100' }}>
        <button onClick={handleClose} className="mt-2 float-right" style={{ border: "none", background: "none", zIndex: '200' }}><AiOutlineClose style={{ color: '#616161' }} /></button>
        <p className="" style={{ position: 'absolute', top: '45px', right: '4px', fontFamily: 'Roboto Medium' }}>{new Date(from.toISOString()).toLocaleString('en-pk', { month: 'long' })}{' '}{from.getFullYear()}</p>
      </div>
      <div style={{ backgroundColor: 'white', width: '330px', top: '350px', height: '35px', position: 'absolute', zIndex: '100' }}>
        <p className="float-right mr-2" style={{ fontFamily: 'Roboto Medium' }}>{monthsArr[from.getMonth() + 1]}{' '}{to.getFullYear()}</p>
      </div>
      <DateRange
        locale={en_PK}
        color={"#EF4E22"}
        rangeColors={"red"}
        minDate={new Date()}
        dateDisplayFormat={"yyyy.MM.dd"}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={ranges}
        months={2}
        direction="vertical"
      />
      <p className="text-center" style={{ fontSize: "14px" }}>{fromMonth}{' '}{from.getDate()}{' '}-{' '}{toMonth}{' '}{to.getDate()} ({nights})</p>
      {/* <p className="text-center" style={{fontSize:"14px"}}>{from.getFullYear()}-{from.getMonth()+1}-{from.getDate()}-----{to.getFullYear()}-{to.getMonth()+1}-{to.getDate()}</p>
      {from.toISOString().split('T')[0]} - {to.toISOString().split('T')[0]} */}
    </div>
  }
}
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
          <Box sx={{ ...style1, margin: 0, padding: 0, paddingLeft: 3 }}>
            <DataRange display={true} />
            <div className="text-centerasse">
              <button className="dateDoneBtn mb-3" type="submit" onClick={handleClose}>Done</button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
}

function BasicModal1(props) {
  const [open1, setOpen1] = React.useState(false);
  handleOpen1 = () => setOpen1(true);
  handleClose1 = () => setOpen1(false);
  if (props.display) {
    return (
      <div>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
        >
          <Box sx={{ ...style, padding: 0 }}>
            <button onClick={handleClose1} className="mt-2 ml-2" style={{ border: "none", background: "none" }}><MdOutlineKeyboardArrowLeft /></button>
            <Container style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)", width: "260px" }}>
              <Row>
                <Col>
                  <RoomsAdultsChild />
                  <button className="incDoneBtn mb-3" type="submit" onClick={handleClose1}>Done</button>
                </Col>
              </Row>
            </Container>
          </Box>
        </Modal>
      </div>
    );
  }
}

export class Search extends Component {
  //Transfer Response between React and Nodejs
  state = {
    paragaraph: '', image: '', checkInn: 'Check-in-date', checkOutt: 'Check-out-date', room: '1', adults: '2', children: '0',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    
    this.callApi()
      .then(res => this.setState({
        paragraph: res.express.Collection.Rows[0].Description,
        image: res.express.Collection.Rows[0].Image,
      }))
      .catch(err => console.log(err));

    }
    componentDidUpdate() {
      // Changing the state after 600ms
      setTimeout(() => {
        this.setState({ checkInn: checkIn, checkOutt: checkOut, room: Rooms, adults: Adults, child: Children });
      }, 1000);
    }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    // const response = await fetch('/api/world', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ post: this.state.post }),
    // });
    // const body = await response.text();

    //this.setState({ responseToPost: body });
    //history.push(`/propertylisting/${post.code}`);
    console.clear();
    this.props.history.push(`/propertylisting/${citi}/${checkIn}/${checkOut}/${Adults}/${Rooms}/${diffDays + 1}/${priceStart}/${priceEnd}/${premium}/${rating}/${category}/${sortType}/${sortBy}`);

  };

  render() {
    return (
      <>
        {/* <p>{this.state.response}</p> */}
        {/* <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p> */}

        <section id="section" style={{ backgroundImage: `linear-gradient(to right, rgba(6, 33, 82, .5), rgba(6, 33, 82, .5)),url(https://www.roomph.pk/${this.state.image})` }} className="selection py-5 mb-3">
          <BasicModal display={true} />
          <BasicModal1 display={true} />
          {/* <DataRange display={true} />
      
                <IncDecCounter /> */}

          <Container>
            <p>{this.state.count}</p>
            <Row>
              <Col xs={10} className="mx-auto text-center selection-h">
                <h6>
                  {this.state.paragraph}
                </h6>
                <p style={{ margin: "0", padding: "0" }}>..Only Happy Surprises</p>
              </Col>
            </Row>
            <Row className="sea">
              <Col xs={10} sm={8} md={6} lg={5} className="Search mx-auto" style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid white" }}>
                <div className="mt-2">
                  <Autocomplete
                    suggestions={["Karachi", "Islamabad", "Lahore", "Multan", "Murree", "Abbottabad", "Bahawalpur", "Faisalabad", "Rahim Yar", "Skardu", "Sukkur", "Dera Ghazi", "Rawalpindi", "Swat", "Naran", "Gilgit", "Kandhkot", "Balakot", "Hunza", "Mirpur AJK", "Mansehra city", "Peshawar", "Muzaffarabad", "Nathia Gali", "Khaplu", "Quetta", "Pakpattan", "Shekhupura", "Shangla", "Kalam", "Sahiwal", "Nawabshah", "Gujranwala", "Gabin Jabba", "Miandam", "Kumrat", "Dir", "Ayubia", "Hyderabad", "Gawadar", "Mardan", "Azad Kashmir", "Kaghan", "Sialkot", "Bhakar", "Badin", "Umarkot", "Sargodha", "Dera Ismail", "Mianwali", "Jhang", "Rajanpur", "Layyah", "Vehari", "Shogran", "Gwadar", "Chitral", "Kohat", "Larkana", "Pankakot", "Taftan", "Ziarat", "Birmoglasht", "Gujrat", "Bannu", "Charsada", "Neelum Valley", "Bagh", "Mithi", "Patriata", "Keran", "Rawalakot", "Mirpur Khas", "Wah Cantonment", "Shigar City", "Nankana Sahib", "Benguela", "Madyan", "Bahrain", "Malamjabba", "Kathmandu", "Morden", "Waterford", "Pokhara", "Dubai", "Dubai", "Mingora", "Bhurban", "Nagar", "Sadiqabad", "Dosso", " Lower Hutt", "San Fernando", "Sancti Sp", "El Jadida", "Khasab", "Casablanca", "As Sib", "Meyuns", "Quelimane", "Blue City", "Sohar", "Ede", "Almere", "Sur", "Kaesong", "Yaren", "Marrakesh", "Nacala", "Kamalia", "Dharan", "Batakundi", "Bourwai", "Malakandi", "Barka", "Lalitpur", "New York"
                    ]}
                  />
                </div>
                <form className="nosubmit" onSubmit={this.handleSubmit}>
                  {/* <input
                    type="text"
                    className="nosubmit mt-3"
                    value={this.state.post}
                    placeholder="Enter place, hotel, or guesthouse"
                    onChange={e => this.setState({ post: e.target.value })}
                  /> */}
                  {/* <Link to='/propertylisting/islamabad'> */}
                  <button style={{ position: "absolute", top: "80px" }} className="mt-5 SearchButton" type="submit">SEARCH</button>
                  {/* </Link> */}
                </form>
                {/* <form className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Enter place, hotel, or guesthouse" />
                  </form> */}
                <div className="Sbt">
                  <button style={{ border: "none", background: "none", color: "rgb(147, 148, 149)" }} className="mt-3 d-block mb-1 mBs" onClick={handleOpen}> <BsFillCalendarEventFill /> <span style={{ marginLeft: '.5rem' }}>  </span>  {this.state.checkInn==''?chkIn:this.state.checkInn} <span style={{ marginLeft: '.5rem' }}> | </span> <span style={{ marginLeft: '.5rem' }}> </span><BsFillCalendarEventFill /> <span style={{ marginLeft: '.5rem' }}>  </span>  {this.state.checkOutt==''?chkOut:this.state.checkOutt}  </button>
                  <button style={{ border: "none", background: "none", color: "rgb(147, 148, 149)" }} className="mt-2 d-block mb-3 mBs" onClick={handleOpen1}> <BsFillPeopleFill /> <span style={{ marginLeft: '.5rem' }}>  </span>  {this.state.room==''?rm:this.state.room} room, {this.state.adults==''?ad:this.state.adults} adults, {this.state.child==''?ch:this.state.child} children </button>
                </div>
                {/* <button className="SearchButton mt-5 mb-3" onClick={() => History.push('/propertylisting')}>Search</button> */}
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default withRouter(Search);
