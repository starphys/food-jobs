import MapComponent from "../components/MapComponent";
import {listings} from "../data/listings"

const mapContainerStyle = {
  width: "100vw",
  height: "85vh",
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

export default function Joblistingspage() {
    return (<>
        <h1>Job Listings</h1>
        <div>
            <MapComponent mapContainerStyle={mapContainerStyle} center={center} zoom={15} listings={listings} options={mapOptions} />
        </div>
    </>)
}