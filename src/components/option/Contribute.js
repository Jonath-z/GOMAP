import React, { useState } from 'react';

import { ContributeForm } from './ContributeForm';

const Contribute = () => {
    const [isContributeFormOpened, setIsContributeFormOpened] = useState(false);
    const openContributeForm = () => {
        setIsContributeFormOpened(true);
    }
    const cancel = () => {
        setIsContributeFormOpened(false);
    }
    return (
        <>
            <div>
                <button type='button' className='w-56 ml-2 h-8 hover:bg-gray-300 text-gray-700' onClick={openContributeForm}>Contribute</button>
            </div>
            {isContributeFormOpened&& <div className='bg-white'>
                <ContributeForm
                cancel={cancel}
                />
            </div>}
        </>
    );
}

export default Contribute
