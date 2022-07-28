import './App.css';
import MapComponent from './components/MapComponent';
import {listings} from "./data/listings"

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 37.3352,
  lng: -121.8811,
}

const mapOptions = {
  disableDefaultUI : true,
  styles : [ 
    {
      featureType: "poi",
      elementType: "all",
      stylers: [ { "visibility": "off" } ]
    }
  ]
}

function App() {
  return<div> 
    <h1>Spatula <span role="img" aria-label="fork-and-knife">🍽️</span></h1> 
    <MapComponent mapContainerStyle={mapContainerStyle} center={center} zoom={15} listings={listings} options={mapOptions}/>
  </div>

}

export default App;
