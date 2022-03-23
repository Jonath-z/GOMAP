import MapBox from "./app/components/map";
import Header from "./app/components/header";
import LocationsProvider from "./app/context/LocationsProvider";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <LocationsProvider>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <MapBox />
            </>
          }
          />
        </Routes>
      </LocationsProvider>
    </>
  );
}

export default App;
