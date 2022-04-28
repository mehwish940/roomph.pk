import React, { Component, useState, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./search.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import History from '../../history';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import IncDecCounter from "./room-adult-child.js/room-adult-child";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function DataRange(props) {
  const [to, setTo] = useState(new Date());
  const [from, setFrom] = useState(addDays(new Date(), 7));

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
    return <Container>
      <Row>
        <Col xs={12}>
          {/* {from.toISOString()} - {to.toISOString()} */}
          {from.toISOString().slice(0, 10).replace(-/-/g, "")} - {to.toISOString().slice(0, 10).replace(-/-/g, "")}
          <DateRange
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={ranges}
            months={2}
            direction="vertical"
          />
        </Col>
      </Row>
    </Container>
  }
}


export class Search extends Component {
  //Transfer Response between React and Nodejs
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
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
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <>
        {/* <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
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

        <section id="section" className="selection py-5 mb-3">
         
                      {/* <DataRange display={true} />
      
                <IncDecCounter /> */}
           
          <Container>

            <Row>
              <Col xs={10} className="mx-auto text-center selection-h">
                <h6>
                  Best Prices on Afordable Rooms
                </h6>
                <p>..Only Happy Surprises</p>
              </Col>
            </Row>

            <Row className="sea justify-content-lg-center">
              <Col xs={10} lg={7} className="Search mx-auto" style={{ borderRadius: "15px 15px 15px 15px", border: "1px solid white" }}>
                  <form className="nosubmit"  onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      className="nosubmit mt-4"
                      value={this.state.post}
                      placeholder="Enter place, hotel, or guesthouse"
                      onChange={e => this.setState({ post: e.target.value })}
                    />
                    <button style={{position:"absolute", top:"110px", display:"block", fontSize:"0.875em", left:"-30px", marginTop:"35px"}} className="ml-5 mt-5 SearchButton" type="submit">SEARCH</button>
                  </form>
                  {/* <form className="nosubmit">
                    <input className="nosubmit" type="search" placeholder="Enter place, hotel, or guesthouse" />
                  </form> */}
                <div className="Sbt">
                <button style={{ border: "none", fontSize: "16px", background: "none", color: "rgb(147, 148, 149)" }} className="mt-3 d-block mb-3"> <BsFillCalendarEventFill />  Check-in-date <span style={{ marginLeft: '1rem'}}> | </span> <span style={{ marginLeft: '1rem'}}> </span><BsFillCalendarEventFill /> Check-out-date  </button>
                <button style={{ border: "none", fontSize: "16px", background: "none", color: "rgb(147, 148, 149)" }} className="d-block mb-3"> <BsFillPeopleFill /> 1 room, 2 adults, 0 children </button>
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

export default Search;
