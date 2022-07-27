import React, { useState } from "react";
import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import JobListing from "./JobListing.js";


function Markers({listings}) {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (<div>
    {listings.map(listing => (
        <MarkerF
          key={listing.id}
          position={listing.position}
          onClick={() => handleActiveMarker(listing.id)}
        >
          {activeMarker === listing.id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <JobListing listing={listing}/>
            </InfoWindowF>
          ) : null}
        </MarkerF> ))}</div>);
}

export default Markers;