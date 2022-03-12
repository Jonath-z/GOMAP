import MapBox from "./app/components/map";
import Header from "./app/components/header";
import SearchProvider from "./app/context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Header />
      <MapBox />
    </SearchProvider>
  );
}

export default App;
