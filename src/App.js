import MapBox from "./components/map";
import Header from "./components/header/Header";

function App(props) {
  return (
    <div>
      <div>
        <Header />
      </div>
        <MapBox />
    </div>
  );
}

export default App;
