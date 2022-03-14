import React from 'react'
import { FaDirections, FaBusAlt } from 'react-icons/fa';
import { RiWalkLine } from "react-icons/ri";
import { IoBicycle } from "react-icons/io5";

const CustomsControls = (
    {
        getDirection,
        drivingProfile,
        walkingProfile,
        cyclingProfile
    }
) => {
    return (
        <div className="absolute z-10 top-56 right-2 bg-white px-2 py-3 ml-2 rounded-md border-2 border-gray-300">
            <FaDirections
                className="text-xl cursor-pointer"
                onClick={getDirection}
            />
            <div>
                <FaBusAlt
                    className="my-5 text-xl cursor-pointer"
                    onClick={drivingProfile}
                />
                <RiWalkLine
                    className="text-xl cursor-pointer"
                    onClick={walkingProfile}
                />
                <IoBicycle
                    className="my-5 text-xl cursor-pointer"
                    onClick={cyclingProfile}
                />
            </div>
        </div>
    );
}

export default CustomsControls