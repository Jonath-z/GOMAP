import React, { useState } from "react";
import {
  VBicycle,
  VBus,
  VDirection,
  VWalk,
  VCurrentLocation,
} from "../../vectors";

const Controls = ({
  getDirection,
  drivingProfile,
  walkingProfile,
  cyclingProfile,
  onGetCurrenLocation,
}) => {
  const [isActiveProfile, setIsActiverofile] = useState({
    driving: "text-black",
    walking: "text-black",
    cycling: "text-black",
  });
  const activeProfile = (profile) => {
    if (!profile) return;
    if (profile === "driving")
      setIsActiverofile({
        driving: "text-blue-400",
        walking: "text-black",
        cycling: "text-black",
      });
    if (profile === "walking")
      setIsActiverofile({
        driving: "text-black",
        walking: "text-blue-400",
        cycling: "text-black",
      });
    if (profile === "cycling")
      setIsActiverofile({
        driving: "text-black",
        walking: "text-black",
        cycling: "text-blue-400",
      });
  };

  return (
    <div className="absolute z-10 top-56 right-2 bg-white px-2 py-3 ml-2 rounded-md border-2 border-gray-300 xsm:hidden sm:hidden flex flex-col justify-center items-center">
      <VDirection
        className={`text-xl cursor-pointer ${isActiveProfile.driving}`}
        onClick={() => {
          activeProfile("driving");
          getDirection();
        }}
      />
      <VBus
        className={`my-5 text-xl cursor-pointer ${isActiveProfile.driving}`}
        onClick={() => {
          activeProfile("driving");
          drivingProfile();
        }}
      />
      <VWalk
        className={`text-xl cursor-pointer ${isActiveProfile.walking}`}
        onClick={() => {
          activeProfile("walking");
          walkingProfile();
        }}
      />
      <VBicycle
        className={`my-5 text-xl cursor-pointer ${isActiveProfile.cycling}`}
        onClick={() => {
          activeProfile("cycling");
          cyclingProfile();
        }}
      />
      <button
        onClick={onGetCurrenLocation}
        className="flex flex-col justify-center items-center bg-matisse py-3 px-3 rounded-full hover:opacity-20"
      >
        <VCurrentLocation className="text-2xl text-white" />
      </button>
    </div>
  );
};

export default Controls;
