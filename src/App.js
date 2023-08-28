import MapBox from "./app/components/map";
import Header from "./app/components/header";
import LocationsProvider from "./app/context/LocationsProvider";
import "./index.css";

function App() {
  return (
    <>
      <LocationsProvider>
        <Header />
        <MapBox />
      </LocationsProvider>
    </>
  );
}

export default App;
