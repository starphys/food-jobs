import './App.css';
import MapComponent from './MapComponent';

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 37.3352,
  lng: -121.8811,
}

function App() {
  return <MapComponent mapContainerStyle={mapContainerStyle} center={center} zoom={15}/>
}

export default App;
