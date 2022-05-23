import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

function IncDecCounter() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  let handleChange = (e) => {
    setNum(e.target.value);
  }

  return (
    <>
      <form>
        <Container>
          <Row  className="mt-3">
            <Col xs={4}>
              <label style={{fontFamily:"Gotham Medium",fontSize:"16px", color:"#EF4E22"}}>
                Rooms
              </label>
            </Col>
            <Col xs={4}>
              <input style={{ width: "30px",border:"none", color:"#EF4E22",fontFamily:"Gotham Medium",fontSize:"16px" }} type="text" value={num} onChange={handleChange} />
            </Col>
            <Col xs={4}>
              <button className="PMB" type="button" style={{border:"none",background:"none",color:"#EF4E22"}} onClick={decNum}><AiOutlineMinusCircle /></button>
              <button className="PMB  pl-1" type="button" style={{border:"none",background:"none",color:"#EF4E22"}} onClick={incNum}><AiOutlinePlusCircle /></button>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
}

export default IncDecCounter;