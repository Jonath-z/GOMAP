import React,{useState} from 'react'
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
    const [isActiveProfile, setIsActiverofile] = useState({
        driving: 'text-black',
        walking: 'text-black',
        cycling: 'text-black'
    })
    const activeProfile = (profile) => {
        if (!profile) return
        if (profile === 'driving')
            setIsActiverofile({
                driving: 'text-blue-400',
                walking: 'text-black',
                cycling: 'text-black'
            })
        if (profile === 'walking')
            setIsActiverofile({
                driving: 'text-black',
                walking: 'text-blue-400',
                cycling: 'text-black'
            })
        if (profile === 'cycling')
            setIsActiverofile({
                driving: 'text-black',
                walking: 'text-black',
                cycling: 'text-blue-400'
            })
    };

    return (
        <div className="absolute z-10 top-56 right-2 bg-white px-2 py-3 ml-2 rounded-md border-2 border-gray-300">
            <FaDirections
                className={`text-xl cursor-pointer ${isActiveProfile.driving}`}
                onClick={() => {
                    activeProfile('driving');
                    getDirection();
                }}
            />
            <div>
                <FaBusAlt
                    className={`my-5 text-xl cursor-pointer ${isActiveProfile.driving}`}
                    onClick={() => {
                        activeProfile('driving');
                        drivingProfile()
                    }}
                />
                <RiWalkLine
                    className={`text-xl cursor-pointer ${isActiveProfile.walking}`}
                    onClick={() => {
                        activeProfile('walking');
                        walkingProfile()
                    }}
                />
                <IoBicycle
                    className={`my-5 text-xl cursor-pointer ${isActiveProfile.cycling}`}
                    onClick={() => {
                        activeProfile('cycling');
                        cyclingProfile()
                    }}
                />
            </div>
        </div>
    );
}

export default CustomsControls