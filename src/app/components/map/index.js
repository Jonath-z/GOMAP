import { useState, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW56IiwiYSI6ImNsMG1lNmVqbzE0YmgzanVvZXpydTlkaTcifQ.CHNESKbLui8ujw8R7ujTBg';

const MapBox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(29.235600);
    const [lat, setLat] = useState(-1.683500);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/jonathanz/cl0met6ub000415mx1zo6l0ev',
            center: [lng, lat],
            zoom: zoom
        });

        // let directions = new MapboxDirections({
        //     accessToken: mapboxgl.accessToken,
        //     unit: 'metric',
        //     profile: 'mapbox/cycling',
        // });
        const navigationControl = new mapboxgl.NavigationControl();
        const userLocation = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        });

        // map.current.addControl(directions, 'bottom-left');
        map.current.addControl(navigationControl, 'top-right');
        map.current.addControl(userLocation);
    
    }, [lat, lng, zoom]);

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    },[]);

    useEffect(() => {
        const start = [-123.069003, 45.395273];
        const end = [-122.303707, 45.612333];
        (async () => {
            const query = await fetch(
                `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
                { method: 'GET' }
            );
            const json = await query.json();
            console.log('path data', json);
        })();     
    }, []);

    return (
        <div ref={mapContainer} className="absolute top-0 left-0 right-0 bottom-0" />
    );
};

export default MapBox;