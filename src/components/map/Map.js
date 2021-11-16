import React, { memo, useEffect, useState,useCallback } from 'react'
// import GoogleMapReact from 'google-map-react';
import { long,lat } from './modules/watchLocation';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
// import { DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
// import { IoLocationSharp } from 'react-icons/io5';
import uuid from 'react-uuid';

export const Map = (props) => {
    const [selectedLocation, setSelectedLocation] = useState(false);
    const [locationInfo, setLocationInfo] = useState(null);
    const [myLocationInfo, setMyLocationInfo] = useState(false);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`
    })
    
    const [map, setMap] = useState(null)
    
    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, []);
    
    const onUnmount = useCallback((map) => {
        setMap(null)
    }, []);

    useEffect(() => {
        console.log(map);
    }, [map]);
    
    const defaultProps = {
        center: {
            lat: parseFloat(lat),
            lng: parseFloat(long)
        },
        zoom: 12
    };

    const containerStyle = {
        width: '100%',
        height: '100vh'
    }

    return (
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
                    onClick={() => {
                        setMyLocationInfo(true);
                    }}
                                  
                // text={<IoLocationSharp className='text-red-600 text-2xl shadow-2xl' />}
                >
                </Marker>
                {JSON.parse(localStorage.getItem('coordonates')) &&
                    JSON.parse(localStorage.getItem('coordonates')).map((location) => {
                        return (
                            <Marker
                                key={uuid()}
                                position={{
                                    lat: parseFloat(location.lat),
                                    lng: parseFloat(location.long)
                                }}
                                onClick={() => {
                                    setLocationInfo(location)
                                    console.log(locationInfo);
                                    setSelectedLocation(true)
                                }}
                                animation={1}
                                visible={true}
                            >
                            </Marker>
                        )
                    })
                }
                {myLocationInfo &&
                    <InfoWindow
                        position={{
                            lat: parseFloat(lat),
                            lng: parseFloat(long)
                        }}
                        onCloseClick={() => {
                            setMyLocationInfo(false);
                        }}
                    >
                        <div>My Location</div>
                    </InfoWindow>}
                {selectedLocation && <InfoWindow
                    position={{
                        lat: parseFloat(locationInfo.lat),
                        lng: parseFloat(locationInfo.long)
                    }}
                    onCloseClick={() => {
                        setSelectedLocation(false)
                    }}
                >
                    <div>{locationInfo.fullAdress}<br/>Goma<br/>DRC</div>
                </InfoWindow>}
                {/* <DirectionsService
                    options={{
                        destination: {
                            lat:parseFloat(locationInfo.lat),
                            lng: parseFloat(locationInfo.long)
                        },
                        origin: {
                            lat:parseFloat(lat),
                            lng:parseFloat(long)
                        },
                        travelMode: 'DRIVING',
                    }}
                    callback={() => {
                        console.log('callBack');
                    }}
                    onLoad={directionsService => {
                        console.log('directions services', directionsService);
                    }}
                >
                </DirectionsService> */}
                {/* <DirectionsRenderer
                    options={{
                        directions: {
                            lat:parseFloat(locationInfo.lat),
                           lng:parseFloat(locationInfo.long)},
                    }}
                >

                </DirectionsRenderer> */}
            </GoogleMap>
        </div> :
            <div className='flex justify-center items-center'>
                <h1>
                    please allow GOMAP to get your current location
                </h1>
            </div>
    );
}
export default Map;