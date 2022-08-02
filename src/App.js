import './App.css';
import React from 'react';
import MapComponent from './components/MapComponent';

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

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {console.log(data); setData(data)});
  }, []);

  if(!data) {
    return "Loading data from cloudant"
  }

  return<div> 
    <h1>Spatula <span role="img" aria-label="fork-and-knife">🍽️</span></h1> 
    <MapComponent mapContainerStyle={mapContainerStyle} center={center} zoom={15} listings={data} options={mapOptions}/>
  </div>

}

export default App;
