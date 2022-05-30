/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const useCurrentLocation = (setUserCoordinates, map) => {
  useEffect(() => {
    const userLocation = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });

    userLocation.on("geolocate", (e) => {
      console.log("user location event", e);
      const lng = e.coords.longitude;
      const lat = e.coords.latitude;
      const position = [lng, lat];
      setUserCoordinates(position);
    });
    if (map) map.addControl(userLocation);
  }, []);

  //   return { getCurrentLocation };
};

export default useCurrentLocation;
