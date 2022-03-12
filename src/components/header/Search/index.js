import React, { useEffect, useState } from 'react';
import { realTimeDB } from '../../../modules/firebase';
import { useDetectClickOutside } from 'react-detect-click-outside';

const Search = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [locations, setLocations] = useState(null);
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
        realTimeDB.ref('locations').on('value', (snapshot) => {
            if (snapshot.exists()) {
                const allLocations = Object.values(snapshot.val());
                setLocations(allLocations);
            }
        });
    }, []);

    const searchInAdressList = () => {
        let searchInputValue = inputSearch;
        let searchFilter = searchInputValue.toUpperCase();
        let adressList = document.querySelectorAll('.adress-Container');
        for (let i = 0; i < adressList.length; i++) {
            let location = adressList[i].getElementsByTagName('li')[0];
            let adress = location.textContent || location.innerText;
            if (adress.toUpperCase().indexOf(searchFilter) > -1) {
                adressList[i].style.display = 'flex';
            } else {
                adressList[i].style.display = 'none';
            }
        }
    }
    searchInAdressList();

    const closeAdressList = () => {
        setIsSearch(false);
    }
    const ref = useDetectClickOutside({ onTriggered: closeAdressList });

    const getResult = (e) => {
        setInputSearch(e.target.innerHTML);
        const locationData = JSON.parse(e.target.getAttribute('data-coords'));
        console.log(locationData);
    }

    const getResult2 = () => {
        console.log('result2');
    }

    return (
        <div ref={ref} className='z-20'>
            <div>
                <input type='search' placeholder='Q.himbi Av.Goma No.54'
                    className='
                    w-input-width
                    h-10
                    pl-2
                    shadow-xl
                    rounded-xl
                  bg-gray-50
                    outline-none
                    sm:w-input-width-phone-format
                    xsm:w-input-width-phone-format-xsm
                  '
                    onFocus={() => {
                        setIsSearch(true);
                    }}
                    onChange={(e) => {
                        setInputSearch(e.target.value);
                        getResult(e);
                    }}
                    value={inputSearch}
                />
            </div>
            {isSearch && <div className='bg-white mt-2' >
                <div className='flex flex-col'>
                    {
                        locations !== null && locations.map(location => {
                            return (
                                <div
                                    className='adress-Container inline-flex hover:bg-gray-400 pl-2 pr-2 max-h-48 '
                                    key={location.locationID}
                                    onClick={getResult2}
                                >
                                    <p
                                        className='cursor-pointer pt-2 pb-2'
                                        data-coords={JSON.stringify({
                                        lat: location.lat,
                                        lng: location.long,
                                        adress: location.fullAdress
                                        })}
                                        onClick={getResult}
                                    >
                                        {location.fullAdress}
                                    </p>
                                </div>
                            
                            )
                        })
                    }
                </div>
            </div>}
        </div>
    );
}
export default Search
