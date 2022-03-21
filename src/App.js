import MapBox from "./app/components/map";
import Header from "./app/components/header";
import LocationsProvider from "./app/context/LocationsProvider";
import { useState } from "react";
import Login from "./app/components/auth/login/Login";

// import react-router-dom

import {
  Routes,
  Route,
} from "react-router-dom";

import Register from "./app/components/auth/register/Register";
import Forgot from "./app/components/auth/forgot/Forgot";

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
        <LocationsProvider>
            <Routes>            
                <Route path="/" element={
                   <>
                  <Header searchResult={getSearchResult} />

                  {/* uncoment the statement bellow and use a valid token to display it */}
                  {/* <MapBox searchResult={searchResult}/> */}
                  </>} />
                <Route path="/login" element={<Login />} />

                <Route path="/forgot" element={<Forgot />} />

                <Route path="/register" element={<Register/>} />

            </Routes>
      </LocationsProvider>

  );
}

export default App;
