import { realTimeDB } from "../modules/firebase";

const forwardGeocoder = async (query) => {
  const ref = realTimeDB.ref("locations");
  const snapshot = await ref.once("value");
  const locations = Object.values(snapshot.val());

  const customData = {
    features: locations.map((location) => {
      return {
        type: "feature",
        properties: {
          title: location.fullAdress,
        },
        geometry: {
          coordinates: [location.long, location.lat],
          type: "point",
        },
      };
    }),
    type: "FeatureCollection",
  };
  const matchingFeatures = [];
  for (const feature of customData.features) {
    if (feature.properties.title.toLowerCase().includes(query.toLowerCase())) {
      feature["place_name"] = `📍 ${feature.properties.title}`;
      feature["center"] = feature.geometry.coordinates;
      feature["place_type"] = ["home"];
      matchingFeatures.push(feature);
    }
  }
  return matchingFeatures;
};

export default forwardGeocoder;
