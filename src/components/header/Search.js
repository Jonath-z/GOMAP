import React, { useEffect, useState } from 'react';
import { realTimeDB } from '../../modules/firebase';
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
        // console.log(adressList)s;
        // console.log(searchFilter);  
        for (let i = 0; i < adressList.length; i++) {
            let location = adressList[i].getElementsByTagName('li')[0];
            // console.log(i);
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

    return (
        <div ref={ref}>
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
                  '
                    onFocus={() => {
                            setIsSearch(true);
                    }}
                    onChange={(e) => {
                        setInputSearch(e.target.value)
                    }}
                    value={inputSearch}
                />
            </div>
            {isSearch && <div className='bg-white mt-2 pl-2 pr-2' >
                <ul className='flex flex-col'>
                    {
                        locations !== null && locations.map(location => {
                            return (
                                <div className='adress-Container inline-flex'>
                                    <li className='cursor-pointer' onClick={(e) => {
                                        console.log(e.target);
                                        setInputSearch(e.target.innerHTML);
                                    }}>{location.fullAdress}</li>
                                </div>
                            
                            )
                        })
                    }
                </ul>
            </div>}
        </div>
    );
}

export default Search
