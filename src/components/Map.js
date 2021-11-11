import React, { memo, useEffect, useState,useCallback } from 'react'
// import GoogleMapReact from 'google-map-react';
import { GoogleMap, useJsApiLoader,Marker,InfoWindow } from '@react-google-maps/api';
import { IoLocationSharp } from 'react-icons/io5';
import uuid from 'react-uuid';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Map = (props) => {
    const [long, setLong] = useState();
    const [lat, setLat] = useState();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [locationInfo, setLocationInfo] = useState(null);
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

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`
      })
    
      const [map, setMap] = useState(null)
    
      const onLoad = useCallback((map)=> {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
          setMap(map)
      }, [])
    
      const onUnmount = useCallback((map)=> {
        setMap(null)
      }, [])
    useEffect(() => {
        console.log(map);
    },[map])
    
    const defaultProps = {
        center: {
            lat: -1.665032,
            lng: 29.2039258
        },
        zoom: 15
    };

    const containerStyle = {
        width: '100%',
        height: '100vh'
    }

    return (
        
        // Important! Always set the container height explicitly
        isLoaded ? <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultProps.center}
                zoom={defaultProps.zoom}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker
                    key={uuid()}
                    position={{
                        lat: parseFloat(lat),
                        lng: parseFloat(long)
                    }}
                                  
                // text={<IoLocationSharp className='text-red-600 text-2xl shadow-2xl' />}
                >
                </Marker>
                {JSON.parse(localStorage.getItem('coordonates')) &&
                    <Marker
                        key={uuid()}
                        position={{
                            lat: parseFloat(JSON.parse(localStorage.getItem('coordonates')).lat),
                            lng: parseFloat(JSON.parse(localStorage.getItem('coordonates')).long)
                        }}
                    onClick={() => {
                        setLocationInfo(JSON.parse(localStorage.getItem('coordonates')))
                        console.log(locationInfo);
                    }}
                    >
                </Marker>
                }
                {locationInfo !== null && <InfoWindow
                    position={{
                        lat: parseFloat(locationInfo.lat),
                        lng: parseFloat(locationInfo.long)
                    }}
                    onCloseClick={() => {
                        console.log('closed');
                    }}
                >
                    <div>location</div>
                </InfoWindow>}
            </GoogleMap>
            {/* <GoogleMapReact
                bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}` }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                hoverDistance={() => { console.log('hover')}}
            >
                <AnyReactComponent
                    lat={lat}
                    lng={long}
                    text={<IoLocationSharp className='text-red-600 text-2xl shadow-2xl' />}
                />
                {JSON.parse(localStorage.getItem('coordonates')) &&
                    <AnyReactComponent
                        lat={parseFloat(JSON.parse(localStorage.getItem('coordonates')).lat)}
                        lng={parseFloat(JSON.parse(localStorage.getItem('coordonates')).long)}
                    text={<IoLocationSharp className='text-red-600 text-4xl shadow-2xl animate-bounce hover:text-blue-800' />}
                />
                }

            </GoogleMapReact> */}
        </div> :
            <div>
                <h1>
                    please allow GOMAP to get your current location
                </h1>
            </div>
    );
}

export default memo(Map);
