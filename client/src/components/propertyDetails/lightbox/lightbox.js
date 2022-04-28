import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Carousel from './carousel/carousel';
import './lightbox.css';
const images = [
    'images/City01.png',
    'images/City02.png',
    'images/City03.png',
    'images/City04.png',
  ];
  
  export default class LightboxExample extends Component {
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
              <Carousel />
            </Col>
          </Row>
        </Container>
      
          <button className="Btn mt-3 mb-3 ml-3" type="button" onClick={() => this.setState({ isOpen: true })}>
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