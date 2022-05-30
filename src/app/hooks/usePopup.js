import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const usePopup = (Map, popupdetails) => {
  useEffect(() => {
    const { title, coordinates } = popupdetails;

    const formatedCoords = coordinates.map((coordinate) => {
      return Number(coordinate);
    });
    console.log("formated coordinates", formatedCoords);

    const popup = new mapboxgl.Popup({ closeOnClick: false });
    if (Map) popup.setLngLat(formatedCoords).setHTML(title).addTo(Map);
  }, [Map, popupdetails]);
};

export default usePopup;
