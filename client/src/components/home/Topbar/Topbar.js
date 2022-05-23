import * as React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Top.css";
import Signin from '../../registeration/signin';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Topbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section style={{ backgroundColor: "#fff"}} className="m-1"   >
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ ...style, width: 350, margin: 0, padding: 0 }}>
            <button onClick={handleClose} className="mt-2 ml-2 arrowBtn"><MdOutlineKeyboardArrowLeft /></button>
            <Signin />
          </Box>
        </Modal>
      </div>
      <Container fluid>
        <Row>
          <a href="/"><img className="roomphLogo ml-2" src="images/logo.svg" alt="logo" /></a>
          <Col xxs={4} className="">
            <div className="Deals">
              <button className="dealsBtn">View Deals</button>
            </div>
          </Col>
          <Col xxs={8} className="">
            <div className="wrap">
              <button className="mr-2 mt-1 signinBtn" onClick={handleOpen}>Sign in</button>
              <Link className="d-lg-none" to="/download" target="_blank">
                <button className="d-lg-none buttonApp" >Use App</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );

}
