import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import Markers from './Markers';
import configInfo from "../config.json"

const listings = [{
  id: 1,
  title: "Host/Hostess",
  company: "Chunky Cheese",
  pay: 15,
  position: { lat: 37.33493148426, lng: -121.8808998386},
},
{
  id: 2,
  title: "Waiter",
  company: "Chunkly Cheese",
  pay: 15,
  position: { lat: 37.33593148426, lng: -121.8818998386},
},
{
  id: 3,
  title: "Mouse",
  company: "Chunkly Cheeks",
  pay: 15,
  position: { lat: 37.33693148426, lng: -121.8828998386},
},]

const defaultMapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const defaultCenter = {
  lat: 37.3352,
  lng: -121.8811,
}

const defaultZoom = 15;


function MapComponent({mapContainerStyle = defaultMapContainerStyle, center = defaultCenter, zoom = defaultZoom}) {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: configInfo.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if(loadError) {return "Error loading maps"} 
  if(!isLoaded) {return "Loading Maps"}

  return( <div>
    <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      center={center}>
      <Markers listings={listings} />
    </GoogleMap>
  </div> );
}

export default MapComponent;