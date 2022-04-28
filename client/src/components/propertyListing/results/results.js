import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import './results.css';
import Slider from './slider/slider';

export class Results extends Component {
  render() {
    return (
      <section className="mb-3">
       {/* Filter Modal */}
       
        <Container>
          <Row>
            <Col xs={12} className="">
                <div id="box-search">
                    <div className="thumbnail">
                        <img src="images/lahore.avif" alt="hotel"/>
                        <div className="caption">
                            <p>Pine View Hotel Rs. 7,500 / night</p>
                        </div>
                    </div>
                </div>
            </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <button className="Buttons mt-3">Sort</button>
                <button className="Buttons ml-3">Filter</button>
              </Col>
          </Row>
          <Row className="mt-3">
              <Col xs={12}>
                  <p><u>Showing 69 properties - Islamabad</u></p>
              </Col>
          </Row>
          <Row className="mt-3">
              <Col xs={6}>
                <Slider />
              </Col>
              <Col xs={6}>
                  <p>Free Cancellation</p>
                  <h6>Hotel Plaza Islamabad</h6>
                  <p><b>Blue Area</b></p>
                  <p>Very Good <br />849 reviews</p>
                  <p style={{ width:"100px",  backgroundColor: "red", borderRadius:"10px 10px 10px 10px" }}>Only 1 Left</p>
                  <h5>Rs. 12,000</h5>
              </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Results;
