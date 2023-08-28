/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const useCurrentLocation = (setUserCoordinates, map) => {
  let userGeolocate = useRef(null);
  const [controlLoaded, setControlLoaded] = useState(false);

  useEffect(() => {
    userGeolocate.current = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });

    if (map) map.addControl(userGeolocate.current, "top-right");
  }, [map]);

  useEffect(() => {
    if (!map || !userGeolocate.current) return;
    userGeolocate.current.on("geolocate", (e) => {
      const lng = e.coords.longitude;
      const lat = e.coords.latitude;
      const position = [lng, lat];
      setUserCoordinates(position);
    });
  }, []);

  const getCurrentLocation = () => {
    // if (!map || !userGeolocate.current) return;
    if (map) {
      console.log({ loaded: map.hasControl(userGeolocate.current) });
    }
    // userGeolocate.current.trigger();
    // map.addControl(userGeolocate.current, "top-right").trigger();
  };

  return { getCurrentLocation };
};

export default useCurrentLocation;
