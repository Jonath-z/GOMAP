import React from 'react'
import { FaDirections, FaBusAlt } from 'react-icons/fa';
import { RiWalkLine } from "react-icons/ri";
import { IoBicycle } from "react-icons/io5";

const CustomsControls = ({getDirection}) => {
    return (
        <div className="absolute z-10 top-16 bg-white px-3 py-3 ml-2 rounded-md border-2 border-gray-300">
            <FaDirections
                className="text-xl cursor-pointer"
                onClick={getDirection}
            />
            <div>
                <FaBusAlt values="driving" className="my-5 text-xl cursor-pointer" />
                <RiWalkLine values="walking" className="text-xl cursor-pointer"/>
                <IoBicycle values="cycling" className="my-5 text-xl cursor-pointer" />
            </div>
        </div>
    );
}

export default CustomsControls