import React, { useState, useEffect } from "react";
import { realTimeDB } from "../../../modules/firebase";
import uuid from "react-uuid";

export const ContributeForm = (props) => {
  const [quarter, setQuarter] = useState("");
  const [avenue, setAvenue] = useState("");
  const [number, setNumber] = useState("");
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [locations, setLocations] = useState(null);

  const error = (err) => {
    console.log(err);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(pos.coords.latitude);
          setLong(pos.coords.longitude);
          // console.log(pos.coords);
        },
        error,
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      alert("Please allow GOMAP to access to your location");
    }
  }, []);
  useEffect(() => {
    realTimeDB.ref("locations").on("value", (snapshot) => {
      if (snapshot.exists()) {
        setLocations(Object.values(snapshot.val()));
      }
    });
  }, []);

  const addLocation = () => {
    const locationID = uuid();
    const locationCheck = locations.filter(
      (location) =>
        (quarter === location.quarter &&
          avenue === location.avenue &&
          number === location.number) ||
        (lat === location.lat && long === location.long)
    );
    if (locationCheck.length === 0) {
      realTimeDB
        .ref("locations")
        .child(locationID)
        .set({
          locationID: `${locationID}`,
          quarter: `${quarter.trim()}`,
          avenue: `${avenue.trim()}`,
          number: `${number.trim()}`,
          lat: `${lat}`,
          long: `${long}`,
          fullAdress: `Q.${quarter} Av.${avenue} No.${number}`,
        });
      setNumber("");
      setQuarter("");
      setAvenue("");
      setLat();
      setLong();
      props.cancel();
    }
    if (locationCheck.length > 0) {
      alert("this adress does exists");
    }
  };

  return (
    <>
      <div className="z-10 flex flex-col bg-white">
        <h1 className="text-center py-2">
          Thanks to contribute to develop our map
        </h1>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Quarter"
            value={quarter}
            onChange={(e) => {
              setQuarter(e.target.value);
            }}
            className="border ml-2 input-adress px-3"
          />
          <input
            type="text"
            placeholder="Avenue"
            value={avenue}
            onChange={(e) => {
              setAvenue(e.target.value);
            }}
            className="border mt-2 ml-2 input-adress px-3"
          />
          <input
            type="number"
            placeholder="No"
            min={1}
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            className="border mt-2 ml-2 input-adress px-3"
          />
          <div className="mt-2 ml-2">
            <p className="text-sm text-gray-600">Longitude: {long}</p>
            <p className="text-sm text-gray-600">Latitude: {lat}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {quarter !== "" &&
            number !== "" &&
            avenue !== "" &&
            long !== undefined &&
            lat !== undefined && (
              <button
                onClick={addLocation}
                className="text-white bg-green-500 hover:bg-green-600 pt-2 pl-2 pb-2 pr-2"
              >
                Add the location
              </button>
            )}
          <button
            type="button"
            className="text-white bg-red-500 hover:bg-red-600 pt-2 pl-2 pb-2 pr-2"
            onClick={props.cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
