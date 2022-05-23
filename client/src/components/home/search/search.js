import React, { Component, useState, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./search.css";
import { withRouter, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import History from '../../history';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import en_PK from 'date-fns/locale/en-IN';
import IncDecCounter from "./room-adult-counter/room";
import IncDecCounter1 from "./room-adult-counter/child";
import IncDecCounter2 from "./room-adult-counter/adults";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

let handleOpen = false;
let handleClose = true;
let handleOpen1 = false;
let handleClose1 = true;
var checkIn = '';
var checkOut = '';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 370,
  height: 220,
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
  const [from, setFrom] = useState(addDays(new Date(), 0));

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
    var diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    var fromMonth = new Date(from.toISOString()).toLocaleString('en-pk',{weekday:'short',month:'short'});
    var toMonth = new Date(to.toISOString()).toLocaleString('en-pk',{weekday:'short',month:'short'});
    checkIn = `${from.getFullYear()}-${from.getMonth()+1}-${from.getDate()}`;
    checkOut = `${to.getFullYear()}-${to.getMonth()+1}-${to.getDate()}`;
    if(diffDays <= 1) {
      diffDays = `${diffDays+1} night`;
    }
    else{
      diffDays = `${diffDays+1} nights`;
    }
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
        months={2}
        direction="vertical"
      />
      <p>{checkIn}</p>
      <p className="text-center" style={{fontSize:"14px"}}>{fromMonth}{' '}{from.getDate()}{' '}-{' '}{toMonth}{' '}{to.getDate()} ({diffDays})</p>
      <p className="text-center" style={{fontSize:"14px"}}>{from.getFullYear()}-{from.getMonth()+1}-{from.getDate()}-----{to.getFullYear()}-{to.getMonth()+1}-{to.getDate()}</p>
      {from.toISOString().split('T')[0]} - {to.toISOString().split('T')[0]}
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
            <button onClick={handleClose} className="mt-2 ml-2" style={{ border: "none", background: "none" }}><MdOutlineKeyboardArrowLeft /></button>
            <DataRange display={true} />
            <div class="text-center">
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
            <Container style={{borderRadius: "15px 15px 15px 15px", border: "1px solid rgb(203, 203, 203)", width: "260px" }}>
              <Row>
                <Col>
                  <IncDecCounter />
                  <IncDecCounter2 />
                  <IncDecCounter1 />
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
    paragaraph: '',image:'',
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
      console.log(JSON.stringify({ post: this.state.post }));
      this.props.history.push(`/propertylisting/${this.state.post}/${checkIn}/${checkOut}`);

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

        <section id="section" style={{ backgroundImage: `url(https://www.roomph.pk/${this.state.image})` }} className="selection py-5 mb-3">
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
                <p style={{margin:"0", padding:"0"}}>..Only Happy Surprises</p>
              </Col>
            </Row>
            <Row className="sea">
              <Col xs={10} sm={8} md={6} lg={5} className="Search mx-auto" style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid white" }}>
                <form className="nosubmit" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    className="nosubmit mt-3"
                    value={this.state.post}
                    placeholder="Enter place, hotel, or guesthouse"
                    onChange={e => this.setState({ post: e.target.value })}
                  />
                  {/* <Link to='/propertylisting/islamabad'> */}
                  <button style={{ position: "absolute", top: "80px"}} className="mt-5 SearchButton" type="submit">SEARCH</button>
                  {/* </Link> */}
                </form>
                {/* <form className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Enter place, hotel, or guesthouse" />
                  </form> */}
                <div className="Sbt">
                  <button style={{ border: "none", background: "none", color: "rgb(147, 148, 149)" }} className="mt-3 d-block mb-1 mBs" onClick={handleOpen}> <BsFillCalendarEventFill /> <span style={{ marginLeft: '.5rem' }}>  </span>  Check-in-date <span style={{ marginLeft: '.5rem' }}> | </span> <span style={{ marginLeft: '.5rem' }}> </span><BsFillCalendarEventFill /> <span style={{ marginLeft: '.5rem' }}>  </span>  Check-out-date  </button>
                  <button style={{ border: "none", background: "none", color: "rgb(147, 148, 149)" }} className="mt-2 d-block mb-3 mBs" onClick={handleOpen1}> <BsFillPeopleFill /> <span style={{ marginLeft: '.5rem' }}>  </span>  1 room, 2 adults, 0 children </button>
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
