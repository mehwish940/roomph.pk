import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "../header/Topbar";
import Steps from '../steps/steps';
import Footer from "../footer/Footer";
import { Container, Row, Col} from "react-bootstrap";


class Thankyou extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 900,
    });
  }
  render() {
    return (
        <div className="Thankyou">
             <Topbar />
             <Steps />
             <section className="mb-3 mt-3 ml-3 mr-3">
                <Container>
                <Row>
                    <Col xs={12} sm={6} className="">
                        <p>Thank you, Ramisha! Your booking is now complete.
                            You chose to pay at the property. Roomph will not charge
                            your credit card.
                            In the next 10 minutes, you will receive an email containing
                            your booking details.
                            Your Booking ID is 6555500.
                            Please present this information at the check-in.
                            To help manage your bookings, you can sign-in to Roomph if
                            you did’nt book as a guest.</p>
                    </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                     <button className="BButton" type="button"> Best Seller </button>
                  </Col>
                  <Col xs={6}>
                     <h4>Harvey Islamabad</h4>
                     <p><b>House 83, Street 5, E11/2, Golra, Islamabad</b><br />
                       <b>Check-in:</b> 15th Feb 2022, Thursday<br />
                       <b>Check-out: </b> 20th Feb 2022, Tuesday<br />
                       <b> Stay: </b> 5 Nights, 1 Room, 2 Adults
                    </p>
                  </Col>
                  <Col xs={6}>
                    <img src="images/City04.png" alt="Room" width={"100%"} />
                  </Col>
                </Row>
                <hr style={{ color: '#000000', backgroundColor: '#000000',  borderColor : '#000000'}} />
                <Row>
                  <Col xs={6}>
                      <p><b>1 Room (5 Nights):</b> Rs. 50,500 <br />
                          <b> Tax (16% G.S.T.):</b> Rs. 8,800 </p>
                  </Col>
                  <Col xs={6} className="text-center">
                      <p style={{ backgroundColor:"red", borderRadius:"10px 10px 10px 10px" }}>Free Breakfast</p>
                      <p style={{ backgroundColor:"red", borderRadius:"10px 10px 10px 10px" }}>Book Now Pay Later</p>
                  </Col>
                </Row>
              
                </Container>
            </section>
             <Footer />
        </div>
    );
  }
}

export default Thankyou;
