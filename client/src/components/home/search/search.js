import React, { Component, useState, useCallback, useMemo, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import PropTypes from "prop-types";
// import { Spinner } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import options from './data';
// import 'react-bootstrap-typeahead/css/Typeahead.css';
import './Typehead.scss';
import "./search.css";
import { withRouter } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { AiOutlineClose } from "react-icons/ai";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import en_PK from 'date-fns/locale/en-IN';
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

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
var Adults = '2';
var Children = '';
// var userInput = '';
var priceStart = ' ';
var priceEnd = ' ';
var rating = ' ';
var premium = ' ';
var category = '8';
var Rooms = '1';
var diffDays = '';

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
                <button className="PMB1" type="button" style={{ border: "none", background: "none", color: "#EF4E22" }} onClick={decRooms}><AiOutlineMinusCircle /></button>
                <input className="PMB" style={{ width: "30px", border: "none", color: "#EF4E22", fontFamily: "Gotham Medium", fontSize: "16px" }} type="text" value={rooms} onChange={handleChangeRooms} />
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
                <button className="PMB1" type="button" style={{ marginLeft: '3px', border: "none", background: "none", color: "#EF4E22" }} onClick={decAdults}><AiOutlineMinusCircle /></button>
                <input className="PMB" style={{ width: "30px", border: "none", color: "#EF4E22", fontFamily: "Gotham Medium", fontSize: "16px" }} type="text" value={adults} onChange={handleChangeAdults} />
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
                <button className="PMB1" type="button" style={{ marginLeft: '14px', border: "none", background: "none", color: "#EF4E22" }} onClick={decChild}><AiOutlineMinusCircle /></button>
                <input className="PMB" style={{ width: "30px", border: "none", color: "#EF4E22", fontFamily: "Gotham Medium", fontSize: "16px" }} type="text" value={child} onChange={handleChangeChild} />
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
  width: window.innerWidth > 990 ? 380 : 370,
  overflow: 'scroll',
  height: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

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
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(from.toISOString());
    const secondDate = new Date(to.toISOString());
    diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    var fromMonth = new Date(from.toISOString()).toLocaleString('en-pk', { weekday: 'short', month: 'short' });
    var toMonth = new Date(to.toISOString()).toLocaleString('en-pk', { weekday: 'short', month: 'short' });
    checkIn = `${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}`;
    checkOut = `${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}`;
    //    var nights = '';
    // if (diffDays <= 1) {
    //   nights = `${diffDays + 1} night`;
    // }
    // else {
    //   nights = `${diffDays + 1} nights`;
    // }
    return <div>
      <div className="dateRangeCont" style={{ backgroundColor: 'white', width: '340px', height: '75px', position: 'absolute', zIndex: '100' }}>
        <button onClick={handleClose} className="mt-2 ml-1" style={{ border: "none", background: "none", zIndex: '200', marginLeft: '-10px', outline: 'none' }}><MdOutlineKeyboardArrowLeft /></button>
        {/* <p className="" style={{ position: 'absolute', top: '45px', right: '4px', fontFamily: 'Roboto Medium' }}>{new Date(from.toISOString()).toLocaleString('en-pk', { month: 'long' })}{' '}{from.getFullYear()}</p> */}
      </div>
      {/* <div style={{ backgroundColor: 'white', width: '330px', top: '350px', height: '35px', position: 'absolute', zIndex: '100' }}>
        <p className="float-right mr-2" style={{ fontFamily: 'Roboto Medium' }}>{monthsArr[from.getMonth() + 1]}{' '}{to.getFullYear()}</p>
      </div> */}
      <div className="dateRangeCont">
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
      </div>
      <p className="cincout" style={{ fontSize: "14px" }}><b>{'Checkin: '}</b>{fromMonth}{' '}{from.getDate()}{' '}-<b>{' Checkout: '}</b>{toMonth}{' '}{to.getDate()}</p>
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
            <div className="">
              <button style={{ outline: 'none' }} className="dateDoneBtn mb-3" type="submit" onClick={handleClose}>Done</button>
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
            <button onClick={handleClose1} className="mt-2 ml-3" style={{ border: "none", background: "none" }}><MdOutlineKeyboardArrowLeft /></button>
            <Container style={{ borderRadius: "15px 15px 15px 15px", width: "260px" }}>
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
const AutoSuggestions = () => {
  const [singleSelections, setSingleSelections] = useState([]);
  citi = singleSelections;
  return (
    <Fragment>

      {/* <Typeahead
          id="onclear-example"
          options={options}
          onChange={setSingleSelections}
          selected={singleSelections}
          placeholder="Choose a state...">
          {({ onClear, selected }) => (
            <div className="rbt-aux">
              {!!selected.length && <ClearButton onClick={onClear} />}
              {!selected.length && <Spinner animation="grow" size="sm" />}
            </div>
          )}
        </Typeahead> */}
      <div className='nosubmit mt-2'>
        <Typeahead
          id=""
          onChange={setSingleSelections}
          options={options}
          placeholder="Enter place, hotel, or guesthouse"
          selected={singleSelections}
        />
      </div>

    </Fragment>
  );
};
export class Search extends Component {
  //Transfer Response between React and Nodejs
  state = {
    paragaraph: '', image: '', checkInn: 'Check-in-date', checkOutt: 'Check-out-date', room: '1', adults: '2', children: '0',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    window.scrollTo(0, 0);
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
    //console.log(citi[0].CityId);
    //console.log(JSON.stringify({ post: this.state.post }));
    if (citi[0].AccommodationId === undefined) {
      this.props.history.push(`/propertylisting/${citi[0].label}/${checkIn}/${checkOut}/${Adults}/${Rooms}/${diffDays}/${priceStart}/${priceEnd}/${premium}/${rating}/${category}`);
    }
    else {
      this.props.history.push(`/propertydetails/${citi[0].CityName}/${checkIn}/${checkOut}/${Adults}/${Rooms}/${diffDays}/ /${citi[0].AccommodationId}/0/0`);
    }


  };

  render() {
    return (
      <>
        <section id="section" style={{ backgroundImage: `linear-gradient(to right, rgba(6, 33, 82, .5), rgba(6, 33, 82, .5)),url(https://www.roomph.pk/${this.state.image})` }} className="selection mb-3">
          <BasicModal display={true} />
          <BasicModal1 display={true} />
          <Container fluid>
            <Row className="bestDealsContainer">
              <Col xs={10} className="mx-auto text-center selection-h">
                <h6>
                  {this.state.paragraph}
                </h6>
                <p>..Only Happy Surprises</p>
              </Col>
            </Row>
            <Row className="sea">
              <Col xs={10} sm={8} md={6} lg={4} className="Search ns mx-auto" style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid white" }}>
                <AutoSuggestions />
                <form className="nosubmit" onSubmit={this.handleSubmit}>
                  <div className="sbtN">
                    <button className="SearchButton" type="submit">SEARCH</button>
                  </div>
                </form>
                <div className="Sbt">
                  <button style={{ border: "none", background: "none", color: "rgb(147, 148, 149)" }} className="mt-3 d-block mb-1 mBs" onClick={handleOpen}> <BsFillCalendarEventFill /> <span style={{ marginLeft: '.5rem' }}>  </span>  {this.state.checkInn === '' ? chkIn : this.state.checkInn} <span style={{ marginLeft: '.5rem' }}> | </span> <span style={{ marginLeft: '.5rem' }}> </span><BsFillCalendarEventFill /> <span style={{ marginLeft: '.5rem' }}>  </span>  {this.state.checkOutt === '' ? chkOut : this.state.checkOutt}  </button>
                  <button style={{ border: "none", background: "none", color: "rgb(147, 148, 149)" }} className="mt-2 d-block mb-3 mBs mBs1" onClick={handleOpen1}> <BsFillPeopleFill /> <span style={{ marginLeft: '.5rem' }}>  </span>  {this.state.room === '' ? rm : this.state.room} room, {this.state.adults === '' ? ad : this.state.adults} adults, {this.state.child === '' ? ch : this.state.child} children </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default withRouter(Search);
