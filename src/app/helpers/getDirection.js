// const getDirection = (profile, map) => {
//   console.log("direction profile", profile);
//   const start = userCoordinates;
//   const end = resultCoordinates.map((coordinate) => Number(coordinate));

//   const direction = new MapboxDirections({
//     accessToken: mapboxgl.accessToken,
//     unit: "metric",
//     profile: `mapbox/${profile}`,
//     interactive: true,
//     controls: {
//       inputs: false,
//       instructions: true,
//     },
//   });

//   direction.setOrigin(start);
//   direction.setDestination(end);
//   if (map) map.addControl(direction);
// };

// export default getDirection;
