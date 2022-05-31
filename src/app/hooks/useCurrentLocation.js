/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const useCurrentLocation = (setUserCoordinates, map) => {
  let userGeolocate = useRef(null);

  useEffect(() => {
    userGeolocate.current = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });

    userGeolocate.current.on("geolocate", (e) => {
      console.log("user location event", e);
      const lng = e.coords.longitude;
      const lat = e.coords.latitude;
      const position = [lng, lat];
      console.log("position", position);
      setUserCoordinates(position);
    });

    if (map) map.current.addControl(userGeolocate.current, "top-right");
  }, [map]);

  const getCurrentLocation = () => {
    console.log("location getted");
    userGeolocate.current.trigger();
  };

  return { getCurrentLocation };
};

export default useCurrentLocation;
