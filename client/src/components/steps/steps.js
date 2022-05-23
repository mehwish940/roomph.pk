import React, { Component } from "react";
import './steps.scss';
import { SiNike } from "react-icons/si";

export default class Steps extends Component {
  render() {
    return (
      <section className="" style={{backgroundColor: "white", borderRadius: "0px 0px 10px 10px", border: "1px solid rgb(205, 206, 206)", boxShadow: "1px 1px 1px 1px rgb(205, 206, 206)",height:'54px' }}>
         <div className="wrapper option-1 option-1-1">
            <p style={{position:'absolute',left:'95px', color:'white',zIndex:'100',fontSize:'11px'}}>1</p>
            <SiNike style={{position:'absolute',top:'48px',left:'288px', color:'orange',zIndex:'100',fontSize:'11px'}} />
            <ol className="c-stepper">
              <li className="c-stepper__item">
                <p className="" style={{fontSize:'10px',color:'red',fontFamily:'Roboto Light',lineHeight:'100%'}}>Customer <br /> Information</p>
               </li>
              <li className="c-stepper__item1">
                <p className="" style={{fontSize:'10px',color:'red',fontFamily:'Roboto Light',lineHeight:'100%'}}>Booking <br /> Confirmed</p>
               </li>
            </ol>
          </div>
      </section>
    );
  }
}
