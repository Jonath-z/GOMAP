import React,{useState} from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { ContributeForm } from './ContributeForm';

const Options = () => {
    const [isSlideOptions, setIsSlideOptions] = useState(false);
    const [isContributeFormOpened, setIsContributeFormOpened] = useState(false);
    const [display, setDisplay] = useState('block');

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
    const cancel = () => {
        setIsSlideOptions(false);
        setIsContributeFormOpened(false)
        setDisplay('block');
    }
    const ref = useDetectClickOutside({ onTriggered: closeSlideOptions });

    return (
        <div ref={ref}>
             <CgMenuGridR className='text-white text-4xl cursor-pointer absolute left-4' onClick={openSlideOptions} />
            <div className='absolute top-10 xsm:left-2 mt-20'>
            </div>
            {
                isSlideOptions &&
                <div className='absolute z-10 left-0 pb-5 w-max pr-5 pl-5 pt-5 bg-white top-10 sm:mt-5'> 
                    <div>
                        <button type='button' style={{
                            display: display
                        }} className='w-56 ml-2 h-8 hover:bg-gray-300 text-gray-700' onClick={() => {
                            setDisplay('none');
                            setIsContributeFormOpened(true);
                        }}>Contribute</button>
                        
                    </div>
                    {isContributeFormOpened && <div>
                        <ContributeForm
                            cancel={cancel}
                        />
                    </div>
                    }  
                </div>
            }
        </div>
    );
}
export default Options
