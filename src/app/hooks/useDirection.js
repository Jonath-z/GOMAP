// import React from "react";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

const useDirection = (userCoordinates, resultCoordinates, mapboxgl, map) => {
  console.log("user coordinate", userCoordinates);
  console.log("result coordinates", resultCoordinates);

  const getDirection = (profile) => {
    if (userCoordinates.length && resultCoordinates.length) {
      console.log("direction profile", profile);
      const start = userCoordinates;
      const end = resultCoordinates.map((coordinate) => Number(coordinate));

      const direction = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
        profile: `mapbox/${profile}`,
        interactive: true,
        controls: {
          inputs: false,
          instructions: true,
        },
      });

      direction.setOrigin(start);
      direction.setDestination(end);
      if (map) map.addControl(direction);
    }
  };

  return {
    getDirection,
  };
};

export default useDirection;
