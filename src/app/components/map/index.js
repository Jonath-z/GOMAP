import { useState, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import forwardGeocoder from './helpers/forwardGeocoder';
import CustomsControls from './Customs';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;


const MapBox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(29.235600);
    const [lat, setLat] = useState(-1.683500);
    const [zoom, setZoom] = useState(13);
    const [userCoordinates, setUserCoordinates] = useState([]);
    const [resultCoordinates, setResultCoordinates] = useState([]);
    const [popupdetails, setPopupDetails] = useState({
        coordinates: ['2', '-1'],
        title: ""
    });

    useEffect(() => {
        if (map.current) return;
        //////////////// STORE THE MAP IN THE REF ////////////
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: process.env.REACT_APP_MAPBOX_CUSTOM_STYLE,
            center: [lng, lat],
            zoom: zoom
        });

        /////////////// CREATE NAVIGATION CONTROL /////////
        const navigationControl = new mapboxgl.NavigationControl();

        ///////////// CREATE GEOLOCATION CONTROL TO GET THE USER'S CURRENT LOCATION ///////
        const userLocation = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        });

        ////////////////// CREATE A GEOCODER WITH CUSTOMS ADDRESS ////////
        const mapGeoCoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            externalGeocoder: forwardGeocoder,
            placeholder: 'Q.himbi Av.Goma No.55',
            zoom: 16,
            mapboxgl: mapboxgl,
        });


        new mapboxgl.Popup()
            .setHTML(popupdetails.title)
            .setLngLat(popupdetails.coordinates)
            .addTo(map.current);

        userLocation.on('geolocate', (e) => {
            const lng = e.coords.longitude;
            const lat = e.coords.latitude
            const position = [lng, lat];
            setUserCoordinates(position);
        });

        mapGeoCoder.on('result', (e) => {
            setResultCoordinates(e.result.center);
            setPopupDetails({
                coordinates: e.result.properties.coordinates,
                title: e.result.properties.title
            });
            console.log(e);
        });   

        ////////////// ASSIGN EACH FEATURE TO THE MAP //////////////
        map.current.addControl(mapGeoCoder);
        map.current.addControl(navigationControl, 'top-right');
        map.current.addControl(userLocation);
    
    }, [lat, lng, zoom,popupdetails]);

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, []);
    
    const getDirection = (profile) => {
        const start = userCoordinates;
        const end = resultCoordinates.map(coordinate => Number(coordinate));

        console.log(start);
        console.log(end);

        const direction = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: `mapbox/${profile}`,
            interactive: false,
            controls: {
                inputs: false,
                instructions: false
            }
        });

        direction.setOrigin(start);
        direction.setDestination(end);
        map.current.addControl(direction);
    };

    return (
        <div>
            <div ref={mapContainer} className="absolute top-0 left-0 right-0 bottom-0" />
            <CustomsControls
                getDirection={() => { getDirection('driving') }}
                drivingProfile={() => { getDirection('driving') }}
                walkingProfile={() => { getDirection('walking') }}
                cyclingProfile={() => { getDirection('cycling') }}
            />
        </div>
    );
};

export default MapBox;