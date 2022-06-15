import React from "react";
import { useMemo } from "react";
import { useLoadScript, Marker } from "@react-google-maps/api";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '76%'
};


function GoogleMapContainer(props) {
    console.log(props)
    var markers = new Array();
    if (props.data.length > 0) {
        props.data.map((mar, index) => {
            markers.push({
                lat: Number(mar.Latitude),
                lng: Number(mar.Longitude),
                LatLng: [{
                    lat: Number(mar.Latitude),
                    lng: Number(mar.Longitude)
                }]
            })
        })
    } else {
        console.log(markers);
    }

    const center = {
        lat: Number(props.cityDetail.lat),
        lng: Number(props.cityDetail.long)
    }
    // const options = {
    //     zoom: 3,
    //     center: center,
    //     styles: [
    //         {
    //             featureType: "poi",
    //             elementType: "labels",
    //             stylers: [{ visibility: "off" }]
    //         }
    //     ]
    // }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCk-pNTcBE9RFmTXJB1E-Ec5i0TN-t4Zrs"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        //const bounds = new window.google.maps.LatLng(center.lat, center.lng);
        map.setZoom(11);
       // map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return isLoaded ? (
        <GoogleMap
            // options={options}
            mapContainerStyle={containerStyle}
            center={center}
            defaultZoom={11}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            {
                markers.map((mar, index) => {
                    var position = {
                        lat: mar.lat,
                        lng: mar.lng
                    }
                    return (<Marker
                        key={index}
                        position={position}
                        icon={'https://www.roomph.pk/v1/images/marker-icon.png'}
                        animation={window.google.maps.Animation.DROP}
                    />)
                })
            }


        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMapContainer)
