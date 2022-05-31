import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useLocations } from "../../../context/LocationsProvider";

const Search = ({ getResult }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const locations = useLocations();

  const searchInAdressList = () => {
    let searchInputValue = inputSearch;
    let searchFilter = searchInputValue.toUpperCase();
    let adressList = document.querySelectorAll(".adress-Container");
    for (let i = 0; i < adressList.length; i++) {
      let location = adressList[i].getElementsByTagName("li")[0];
      let adress = location.textContent || location.innerText;
      if (adress.toUpperCase().indexOf(searchFilter) > -1) {
        adressList[i].style.display = "flex";
      } else {
        adressList[i].style.display = "none";
      }
    }
  };
  searchInAdressList();

  const closeAdressList = () => {
    setIsSearch(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeAdressList });

  const setInputValue = (e) => {
    const locationData = JSON.parse(e.target.getAttribute("data-coords"));
    setInputSearch(locationData.address);
  };

  const onFocus = (e) => {
    setIsSearch(true);
  };

  const onChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div ref={ref} className="z-0">
      <div>
        <input
          type="text"
          placeholder="Q.himbi Av.Goma No.54"
          className="w-input-width h-10 px-5 font-openSans border border-gray-200 rounded-full bg-gray-50 outline-none sm:w-input-width-phone-format xsm:w-input-width-phone-format-xsm"
          onFocus={onFocus}
          onChange={onChange}
          value={inputSearch}
        />
      </div>
      {isSearch && (
        <div className="bg-white mt-2 font-openSans font-medium">
          <ul className="flex flex-col">
            {locations !== null &&
              locations.map((location) => {
                return (
                  <div
                    className="adress-Container inline-flex hover:bg-gray-400 pl-2 pr-2 max-h-48 "
                    key={location.locationID}
                  >
                    <li
                      className="cursor-pointer pt-2 pb-2"
                      onClick={(e) => {
                        getResult(e);
                        setInputValue(e);
                      }}
                      data-coords={JSON.stringify({
                        lat: location.lat,
                        lng: location.long,
                        address: location.fullAdress,
                      })}
                    >
                      {location.fullAdress}
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Search;
