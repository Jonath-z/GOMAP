import { Popup } from 'react-map-gl';

const MapBoxPopUp = ({
  address,
  latitude,
  longitude,
  onClose,
}) => {
  return (
    <Popup
      latitude={latitude}
      longitude={longitude}
      onClose={onClose}
    >
      <p className="w-40 font-extrabold">{address}</p>
    </Popup>
  );
};

export default MapBoxPopUp;
