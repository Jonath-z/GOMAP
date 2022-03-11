import { useState, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import  MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'


mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW56IiwiYSI6ImNsMG1lNmVqbzE0YmgzanVvZXpydTlkaTcifQ.CHNESKbLui8ujw8R7ujTBg';

const MapBox = () => {

    const map = useRef(null);
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(29.235600,);
    const [lat, setLat] = useState(-1.683500);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/jonathanz/cl0met6ub000415mx1zo6l0ev',
            center: [lng, lat],
            zoom: zoom
        });

        let directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/cycling'
        });

        const navigationControl = new mapboxgl.NavigationControl();

        map.current.addControl(directions, 'bottom-left');
        map.current.addControl(navigationControl, 'top-right');
    
    });
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div ref={mapContainer} className="absolute top-0 left-0 right-0 bottom-0" />
    );
};

export default MapBox;