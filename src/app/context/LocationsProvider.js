import React, { useEffect, useState, createContext, useContext } from "react";
import { realTimeDB } from "../modules/firebase";

const LocationContext = createContext();

export const useLocations = () => useContext(LocationContext);

const LocationsProvider = ({ children }) => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    realTimeDB.ref("locations").on("value", (snapshot) => {
      if (snapshot.exists()) {
        const allLocations = Object.values(snapshot.val());
        setLocations(allLocations);
      }
    });
  }, []);

  return (
    <LocationContext.Provider value={locations}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationsProvider;
