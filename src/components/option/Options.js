import React,{useState} from 'react';
import { CgMenuGridR } from 'react-icons/cg';
// import { GrClose } from 'react-icons/gr';
import Contribute from './Contribute';
import { useDetectClickOutside } from 'react-detect-click-outside';

const Options = () => {
    const [isSlideOptions, setIsSlideOptions] = useState(false);
    
    const openSlideOptions = () => {
        if (isSlideOptions) {
            setIsSlideOptions(false);
        }
        else {
            setIsSlideOptions(true);
        }
    }
    const closeSlideOptions = () => {
        setIsSlideOptions(false);
    }
    const ref = useDetectClickOutside({ onTriggered: closeSlideOptions });

    return (
        <div ref={ref}>
            <div className='absolute z-10 left-4'>
                <CgMenuGridR className='text-white text-4xl cursor-pointer' onClick={openSlideOptions}/>
            </div>
            {isSlideOptions && <div className='absolute z-10 left-0 pb-5 w-max pr-5 pl-5 pt-5 bg-white top-10'>
            {/* <GrClose className='text-2xl' onClick={closeSlideOptions} /> */}
                <div>
                <Contribute />
                </div>
            </div>}
        </div>
    );
}
export default Options
