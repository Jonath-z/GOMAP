import React,{useState} from 'react';
import { CgMenuGridR } from 'react-icons/cg';
// import { GrClose } from 'react-icons/gr';
import Contribute from './Contribute';

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
    // const closeSlideOptions = () => {
    //     setIsSlideOptions(false);
    // }

    return (
        <div>
            <div className='absolute z-10 left-2'>
                <CgMenuGridR className='text-white text-3xl cursor-pointer' onClick={openSlideOptions}/>
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
