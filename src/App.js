import MapBox from "./app/components/map";
import Header from "./app/components/header";
import LocationsProvider from "./app/context/LocationsProvider";
import { useState } from "react";

function App() {
  const [searchResult, setSearchResult] = useState({
    address: "Q.Katindo Av.Carmel No.86",
    lat: "-1.6730795",
    lng: "29.212009"
  });
  const getSearchResult = (e) => {
    const locationData = JSON.parse(e.target.getAttribute('data-coords'));
    console.log(locationData);
    setSearchResult(locationData);
  };

  return (
    <>
      <LocationsProvider>
        <Header searchResult={getSearchResult} />
        <MapBox searchResult={searchResult}/>
      </LocationsProvider>
    </>
  );
}

export default App;
