import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../header/Topbar";
import Footer from "../footer/Footer";
import './singleblog.css';

export class SingleBlog extends Component {
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
                <Container fluid>
                    <Row>
                        <Col className="m-0 p-0">
                            <img className="imh2" src={`https://www.roomph.pk/${this.state.blogImage}`} alt="Blogs" />
                            <div className="singleBlogContn">
                                <button className="travelTipsBtn" style={{ fontSize: '14px', width: '100px' }} type="button"> Travel Tips </button>
                                <h6 className="blogName"><a href="/singleblog">{this.state.blogName}</a></h6>
                                <a href="/"><p className="blogtxtb blogDescription">{this.state.ShortDescription}</p></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </section>
        );
    }
}

export default SingleBlog;
