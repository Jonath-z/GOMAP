import { useState, useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import forwardGeocoder from "../../helpers/forwardGeocoder";
import usePopup from "../../hooks/usePopup";
import useDirection from "../../hooks/useDirection";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import BottomNav from "../ButtomNav";
import ErrorBox from "../../modules/__modules/ErrorBox";
import Controls from "../../modules/__modules/Controls";

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

  //////////////// STORE THE MAP IN THE REF ////////////
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: process.env.REACT_APP_MAPBOX_CUSTOM_STYLE,
      center: [lng, lat],
      zoom: zoom,
    });

    const navigationControl = new mapboxgl.NavigationControl();

    ////////////////// CREATE A GEOCODER WITH CUSTOMS ADDRESS ////////
    const mapGeoCoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      externalGeocoder: forwardGeocoder,
      placeholder: "Q.himbi Av.Goma No.55",
      zoom: 16,
      mapboxgl: mapboxgl,
    });

    mapGeoCoder.on("result", (e) => {
      console.log("coordinates", e);
      setResultCoordinates(e.result.center);
      setPopupDetails({
        coordinates: e.result.center,
        title: e.result.properties.title,
      });
    });
    ////////////// ASSIGN EACH FEATURE TO THE MAP //////////////
    map.current.addControl(mapGeoCoder);
    map.current.addControl(navigationControl, "top-right");
  }, [lat, lng, zoom, popupdetails]);

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  const { getDirection } = useDirection(
    userCoordinates,
    resultCoordinates,
    mapboxgl,
    map.current
  );

  usePopup(map.current, popupdetails);
  useCurrentLocation(setUserCoordinates, map.current);

  return (
    <div>
      <div
        ref={mapContainer}
        className="absolute top-0 left-0 right-0 bottom-0"
      >
        <Controls
          getDirection={() => {
            getDirection("driving");
          }}
          drivingProfile={() => {
            getDirection("driving");
          }}
          walkingProfile={() => {
            getDirection("walking");
          }}
          cyclingProfile={() => {
            getDirection("cycling");
          }}
          onGetCurrenLocation={() => null}
        />
      </div>
      <BottomNav onGetCurrentLocaiton={() => null} />
      <ErrorBox
        ErrorMessage={"Direction not found."}
        isClosed={isErroBoxClosed}
        onCloseErrorBox={() => setIsErrorBoxClosed(!isErroBoxClosed)}
      />
    </div>
  );
};

export default MapBox;
