import { Marker } from 'react-map-gl';
import {MdLocationPin} from 'react-icons/md'

const MapBoxMarker = ({
  latitude,
  longitude,
  onClick,
}) => {
  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      onClick={onClick}
    >
      <MdLocationPin className="text-red-600 h-10 w-10 animate-bounce cursor-pointer" />
    </Marker>
  );
};

export default MapBoxMarker;