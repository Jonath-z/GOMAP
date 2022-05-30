import React from "react";
import {
  VCurrentLocation,
  VDirection,
  VPlusCircle,
} from "../../modules/vectors";

const BottomNav = ({ onGetCurrentLocaiton }) => {
  return (
    <div className="bg-white py-2 px-5 fixed bottom-0 left-0 right-0 flex justify-between items-center mb-8 mx-10 rounded-3xl font-robotto font-bold overMobile:hidden">
      <button className="flex flex-col justify-center items-center">
        <VDirection className="text-2xl" />
        <p className="p-0 m-0 text-xs">Direction</p>
      </button>
      <button className="flex flex-col justify-center items-center bg-matisse py-3 px-3 rounded-full hover:opacity-20">
        <VPlusCircle className="text-2xl text-white" />
      </button>
      <button
        className="flex flex-col justify-center items-center"
        onClick={onGetCurrentLocaiton}
      >
        <VCurrentLocation className="text-2xl" />
        <p className="p-0 m-0 text-xs">My Location</p>
      </button>
    </div>
  );
};

export default BottomNav;
