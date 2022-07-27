import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../header/Topbar";
import Footer from "../footer/Footer";
import './blogs.css';

export class Blogs extends Component {
  state = {
    blogImage: '', ShortDescription: '', blogName: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.callApi()
      .then(res => this.setState({
        blogName: res.express.Collection.Rows[0].Name,
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
      <section className="">
        <Topbar />
        <Container className="mb-3" fluid>
          {/* <Row>
            <Col className="m-0 p-0">
              <h4 className="blogH">Blogs</h4>
            </Col>
          </Row> */}
          {/* <Container fluid>
            <Row className="p-2">
              <Col xs={12} className="" style={{ borderRadius: "30px", border: "1px solid rgb(205, 206, 206)", boxShadow: "2px 2px 2px 2px rgb(205, 206, 206)" }}>
                <Row className="">
                  <Col>
                    <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Bold', background: 'none', textTransform: 'capitalize' }}>Discover articles that would help you</button>
                    <div style={{ height: '15px' }}>
                    </div>
                    <div style={{ position: 'absolute', top: '15px' }}>
                      <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}>Search for a destination, a category, etc</button>
                      <button className="topbarBtn" style={{ fontFamily: 'Gotham Rounded Book', background: 'none' }}></button>
                    </div>
                  </Col>
                  <Col xs={2} className="my-auto mx-auto">
                    <img className="searchLogo float-right" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
                  </Col>
                </Row>
              </Col>

            </Row>
          </Container> */}
          <Row>
            <Col className="blH text-center">
              <h4 className="blogHeaddingb">Get Inspiration</h4>
            </Col>
          </Row>
          <Row className="RRR blogContb justify-content-center m-lg-0 p-lg-0">
            <Col xs={11} lg={5} md={5} className="mr-lg-3 text-md-center m-0 p-0">
              <div className="bcard1">
                <div className="bcontainer1">
                  <img className="imh1" src={`https://www.roomph.pk/${this.state.blogImage}`} alt="Blogs" />
                  <button className="travelTipsBtn" style={{ fontSize: '14px', width: '100px' }} type="button"> Travel Tips </button>
                  <h6 className="blogName blogNameb"><a href="/singleblog">{this.state.blogName}</a></h6>
                  <a href="/"><p className="blogtxtb">{this.state.ShortDescription}</p></a>
                </div>
              </div>
            </Col>
            <Col xs={11} lg={5} md={5} className="d-none d-lg-block text-md-center m-0 p-0">
              <div className="bcard1">
                <div className="bcontainer1">
                  <img className="imh1" src={`https://www.roomph.pk/${this.state.blogImage}`} alt="Blogs" />
                  <button className="travelTipsBtn" style={{ fontSize: '14px', width: '100px' }} type="button"> Travel Tips </button>
                  <h6 className="blogName blogNameb"><a href="/singleblog">{this.state.blogName}</a></h6>
                  <a href="/"><p className="blogtxtb">{this.state.ShortDescription}</p></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </section>
    );
  }
}

export default Blogs;
