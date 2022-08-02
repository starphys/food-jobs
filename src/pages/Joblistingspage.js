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
        <h2>
          Reduce your application process time by 10x with just a click!
        </h2>
        <p>
          From the below map, click on any of the red job markers. 
          Once you find a job you like, 
          just submit with the "apply" button, and you are done!
        </p>
        <p>
          PRO TIP: For convenience, you can consider jobs that are close to transit stations that are shown as blue transit icons.
          You can click on those icons to see find more information about the stations.
        </p>
        <div>
            <MapComponent mapContainerStyle={mapContainerStyle} center={center} zoom={15} listings={listings} options={mapOptions} />
        </div>
    </>)
}