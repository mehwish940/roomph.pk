import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './blog.css';

export class Blogs extends Component {
  state = {
    blogImage: '', ShortDescription: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        blogImage: res.express.Collection.Rows[0].Image,
        ShortDescription: res.express.Collection.Rows[0].ShortDescription
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello3');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <section className="mb-3 mt-2">
        <Container className="" fluid>
          <Row>
            <Col className="blH text-center mb-2 mt-lg-2">
              <h4 className="blogHeagingNew">Get Inspiration</h4>
            </Col>
          </Row>
          <Row className="RRR justify-content-center">
            <Col xs={6} lg={4} md={4} className="text-md-center m-0 p-0">
              <div className="bcard">
                <div className="bcontainer">
                  <img className="imh" src={`https://www.roomph.pk/${this.state.blogImage}`} alt="Avatar" />
                  <a href="/singleblog"><p className="mt-1">{this.state.ShortDescription}</p></a>
                </div>
              </div>
            </Col>
            <Col xs={6} lg={4} md={4} className="text-md-center m-0 p-0">
              <div className="bcard">
                <div className="bcontainer">
                  <img className="imh" src={`https://www.roomph.pk/${this.state.blogImage}`} alt="Avatar" />
                  <a href="/singleblog"><p className="mt-1">{this.state.ShortDescription}</p></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} className="d-none d-md-block d-lg-block text-md-center m-0 p-0">
              <div className="bcard">
                <div className="bcontainer">
                  <img className="imh" src={`https://www.roomph.pk/${this.state.blogImage}`} alt="Avatar" />
                  <a href="/singleblog"><p className="mt-1">{this.state.ShortDescription}</p></a>
                </div>
              </div>
            </Col>
            {/* <Col lg={4} md={4} className="d-none d-md-block d-lg-block text-md-center m-0 p-0">
              <div className="bcard">
                <div className="bcontainer">
                  <img className="imh" src={`https://www.roomph.pk/${this.state.blogImage}`} alt="Avatar" />
                  <a href="/singleblog"><p className="mt-1">{this.state.ShortDescription}</p></a>
                </div>
              </div>
            </Col> */}
          </Row>
          <Row>
            <Col className="text-center bl">
              <a href="/blogs" className="viewAllBtn"><u>View All</u></a>
            </Col>
          </Row>

        </Container>
      </section>
    );
  }
}

export default Blogs;
