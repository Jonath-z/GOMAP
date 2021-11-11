import Maps from "./components/Map";
import Header from "./components/header/Header";

function App(props) {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Maps />
      </div>
    </div>
  );
}

export default App;
