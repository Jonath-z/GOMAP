import { useEffect } from "react";

const useMapMove = (map, setLng, setLat, setZoom) => {
  useEffect(() => {
    if (!map) return;
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
  }, [map, setLat, setLng, setZoom]);
};

export default useMapMove;
