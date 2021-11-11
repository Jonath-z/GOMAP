import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { IoLocationSharp } from 'react-icons/io5';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Map = (props) => {
    const [long, setLong] = useState();
    const [lat, setLat] = useState();
    useEffect(() => {
        const error = (err) => {
            console.log(err)
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setLat(pos.coords.latitude);
                setLong(pos.coords.longitude);
                console.log(pos.coords);
            }, error, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge:0
            });
        }
        else {
            alert('please allow GOMAP to access to your location');
        }
    }, []);
    
    const defaultProps = {
        center: {
            lat: lat,
            lng: long
        },
        zoom: 15
    };

    const handleApiLoaded = (map, maps) => {
        console.log(map);
      };

    return (
        
        // Important! Always set the container height explicitly
        long !== undefined && lat !== undefined ? <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}` }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                <AnyReactComponent
                    lat={lat}
                    lng={long}
                    text={<IoLocationSharp className='text-red-600 text-3xl shadow-2xl' />}
                />
            </GoogleMapReact>
        </div> :
            <div>
                <h1>
                    please allow GOMAP to get your current location
                </h1>
            </div>
    );
}

export default Map;
