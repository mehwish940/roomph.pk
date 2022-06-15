import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GoogleMapContainer from './GoogleMapContainer';

function useFetchData() {
    const params = useParams();
    const cityDetails = [{
        name: 'Karachi', lat:24.9056, long: 67.0822
    }, {
        name: 'Islamabad', long: 73.0551, lat: 33.69
    },{
        name: 'Rawalpindi', long: 73.071442, lat: 33.626057
    }]
    const [loading, setLoading] = useState([]);
    const [responseData, setData] = useState("");
    const [cityDet, setcityDet] = useState([]);

    useEffect(async () => {
        setLoading(true);
        console.log("Executed only once!");
        console.log(params.city)
        setcityDet(cityDetails.find(cd=>cd.name.toLowerCase()==params.city.toLowerCase()));
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postCity: params.city, postCheckIn: params.checkin, postCheckOut: params.checkout, postAdults: params.adults, postRooms: params.rooms, postPriceStart: '', postPriceEnd: '', postRating: '', postPremium: '', postCategory: '' })
        })
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        var results = body.Success.result;
        setData(results);
        setLoading(false);

    }, []);
    console.log(responseData);
       // console.log(cityDet);
    return { loading, responseData , cityDet };
}
function Maps() {
    const { loading, responseData , cityDet} = useFetchData();
    if (loading) {
        return (
     <>
     <div className='loading-div'>
	<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
	<div class="gr-medium">Loading map..</div></div></>
)
    } else {
        return (
            <section className="position-relative ">
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-12 px-0 left-0 right-0 position-absolute bottom-0 z-index-999">
                            <div className="bg-white scrollbar" id="scroll-4">
                                <div className="feature-hotel-sidebar w-100">
                                    <ReturnBody data={responseData} />
                                </div>
                            </div></div></div></div>
                <div id="map_canvas" className="w-100">
                    <GoogleMapContainer className="w-100" data={responseData} cityDetail={cityDet}/>
                </div>
            </section>
        )
    }



}

function ReturnBody(props) {
    // console.log(props.data)


    if (props.data.length > 0) {
        return props.data.map((res, index) => {
            var Price = res.MinRate[0];
            return (<a href="#" target="_parent" id={index}>
                <div className="feature-hotel-box mb-2 float-left w-100 datas px-3 pt-2" data-id={index}>
                    <div className="feature-hotel-img float-left mt-2">
                        <img src={res.ImageURL[0]} alt="" className="img-fluid" />
                    </div>
                    <div className="feature-hotel-description float-left">
                        <div className="feature-hotel-title float-left">
                            <p className="text-black text-capitalize mb-0 gr-medium ft-12">
                                {res.AccommodationName[0]}
                            </p>
                            <p className="roboto-light ft-10 mb-0">
                                {res.Address[0]}
                            </p>
                        </div>
                        <div className="feature-hotel-star-rating float-left">
                            <p className="mb-0 text-orange ft-12">Rs. {Price?Number(Price).toLocaleString():"Fully Booked"}</p>
                            <p className="mb-0 roboto-light ft-10">avg. per night</p>
                        </div>
                    </div>
                </div>
            </a>);
        })
    } else {
        return (
            <div>
                <h1>Not found</h1>
            </div>)
    }


}

export default Maps