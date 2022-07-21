import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import configInfo from "./config.json"

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 37.3352,
  lng: -121.8811,
}

function MapComponent() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: configInfo.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if(loadError) {return "Error loading maps"} 
  if(!isLoaded) {return "Loading Maps"}

  return <div>
    <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}></GoogleMap>
      </div>
}

export default MapComponent;