import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import './filter.css';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Checkboxes() {
    return (
      <div>
        <Checkbox className='m-0 p-0 ml-1 mt-3' {...label} color="success" /><img src={process.env.PUBLIC_URL + "/images/Asset16.svg"} width={80} alt=""/><br />
        <Checkbox className='m-0 p-0 ml-1' {...label} color="success" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><br />
        <Checkbox className='m-0 p-0 ml-1' {...label} color="success" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><br />
        <Checkbox className='m-0 p-0 ml-1' {...label} color="success" /><img src={process.env.PUBLIC_URL + "/images/Asset99.svg"} className="imgWidr" alt="" /><br />
        <Checkbox className='m-0 p-0 ml-1' {...label} color="success" /><span style={{fontFamily:'Gotham Rounded Bold'}}>Hotel</span><br />
        <Checkbox className='m-0 p-0 ml-1' {...label} color="success" /><span style={{fontFamily:'Gotham Rounded Bold'}}>Apartment</span><br />
        <Checkbox className='m-0 p-0 ml-1' {...label} color="success" /><span style={{fontFamily:'Gotham Rounded Bold'}}>Guest House</span>
      </div>
    );
  }
  
  function valuetext(value) {
    return `${value}°C`;
  }
  function ValueLabelComponent(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  
  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#ff3d00',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 17,
      width: 17,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'white',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 3,
    },
  }));
  
  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
  };
  
  function CustomizedSlider() {
    const [value, setValue] = React.useState([0, 30000]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <Box sx={{ width: 320 }}>
        <AirbnbSlider
          components={{ Thumb: AirbnbThumbComponent }}
          getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={0}
          max={30000}
        />
        <p className='m-0 p-0 ml-1' style={{fontFamily:'Gotham Rounded Bold'}}>Min <span className="float-right" style={{fontFamily:'Gotham Rounded Bold'}}>Max</span></p>
        <button className="pkr">PKR <span className='ml-2'>{value[0]}</span></button>
        <hr class="mb-1 p-0" style={{ display: 'inline-block', width: '140px', borderTop: '1px dotted black' }} />
        <button className="pkr">PKR {value[1]}</button>
      </Box>
    );
  }
class BootstrapModal extends React.Component {

    constructor() {
        super();
        this.state = {
            showHide: false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render() {
        return (
            <div>
                <button className='Buttons' onClick={() => this.handleModalShowHide()}>
                    Filter
                </button>
                <Modal show={this.state.showHide}>
                    <Modal.Header>
                    <button onClick={() => this.handleModalShowHide()} className="mt-2 ml-2" style={{border:"none", background:"none"}}><MdOutlineKeyboardArrowLeft /></button>
                    </Modal.Header>
                    <div className="ml-4 m0- p-0">
                        <p className='m-0 p-0' style={{fontFamily:'Gotham Rounded Bold'}}>Price per night</p>
                        <CustomizedSlider />
                    </div>
                    <div className="mt-1 mb-3" style={{ marginLeft: '15px' }}>
                        <Checkboxes />
                    </div>
                </Modal>

            </div>
        )
    }

}

export default BootstrapModal;