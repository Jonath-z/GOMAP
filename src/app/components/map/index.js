/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import mapboxgl from "mapbox-gl";
import usePopup from "../../hooks/usePopup";
import useDirection from "../../hooks/useDirection";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import BottomNav from "../ButtomNav";
import ErrorBox from "../../modules/__modules/ErrorBox";
import Controls from "../../modules/__modules/Controls";
import useMapMove from "../../hooks/useMapMove";
import useGeoCoder from "../../hooks/useGeoCoder";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapBox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(29.2356);
  const [lat, setLat] = useState(-1.6835);
  const [zoom, setZoom] = useState(13);
  const [userCoordinates, setUserCoordinates] = useState([]);
  const [resultCoordinates, setResultCoordinates] = useState([]);
  const [popupdetails, setPopupDetails] = useState({
    coordinates: [2, -1],
    title: "",
  });
  const [isErroBoxClosed, setIsErrorBoxClosed] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  //////////////// STORE THE MAP IN THE REF ////////////
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: process.env.REACT_APP_MAPBOX_CUSTOM_STYLE,
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lat, lng, zoom]);

  useEffect(() => {
    const navigationControl = new mapboxgl.NavigationControl();
    map.current.addControl(navigationControl, "top-right");
  }, []);

  const { getCurrentLocation } = useCurrentLocation(setUserCoordinates, map);

  useGeoCoder(map, mapboxgl, setResultCoordinates, setPopupDetails);
  useMapMove(map.current, setLng, setLat, setZoom);

  const { getDirection } = useDirection(
    userCoordinates,
    resultCoordinates,
    mapboxgl,
    map.current
  );

  usePopup(map.current, popupdetails);

  return (
    <div>
      <div
        ref={mapContainer}
        className="absolute top-0 left-0 right-0 bottom-0"
      >
        <Controls
          getDirection={() => {
            console.log("user coordinate", userCoordinates);
            if (userCoordinates.length) {
              getDirection("driving");
            }
            setIsErrorBoxClosed(false);
            setErrorMessage(
              "Unable to find the direaction without your location"
            );
          }}
          drivingProfile={() => {
            if (!userCoordinates.length) {
              getDirection("driving");
            }
            setIsErrorBoxClosed(false);
            setErrorMessage(
              "Unable to find the direaction without your location"
            );
          }}
          walkingProfile={() => {
            if (!userCoordinates.length) {
              getDirection("walking");
            }
            setIsErrorBoxClosed(false);
            setErrorMessage(
              "Unable to find the direaction without your location"
            );
          }}
          cyclingProfile={() => {
            if (!userCoordinates.length) {
              getDirection("cycling");
            }
            setIsErrorBoxClosed(false);
            setErrorMessage(
              "Unable to find the direaction without your location"
            );
          }}
          onGetCurrenLocation={getCurrentLocation}
        />
      </div>
      <BottomNav
        getDirection={() => {
          if (userCoordinates.length) {
            getDirection("driving");
          }
          setIsErrorBoxClosed(false);
          setErrorMessage(
            "Unable to find the direaction without your location"
          );
        }}
        onGetCurrentLocaiton={getCurrentLocation}
      />
      <ErrorBox
        ErrorMessage={errorMessage}
        isClosed={isErroBoxClosed}
        onCloseErrorBox={() => setIsErrorBoxClosed(!isErroBoxClosed)}
      />
    </div>
  );
};

export default MapBox;
