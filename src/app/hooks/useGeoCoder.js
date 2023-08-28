import { useEffect } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import forwardGeocoder from "../helpers/forwardGeocoder";

const useGeoCoder = (map, mapboxgl, setResultCoordinates, setPopupDetails) => {
  useEffect(() => {
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

    // if (map) map.current.addControl(mapGeoCoder, "top-left");
  }, [map, mapboxgl, setPopupDetails, setResultCoordinates]);
};

export default useGeoCoder;
