/*import React from "react";
import {Marker} from "@react-google-maps/api";

function MarkerComponent ({listing}) {
   return (                
           <Marker key={1} position={listing} />
    )
}

export default MarkerComponent;*/

import React, { useState } from "react";
import { InfoWindowF, MarkerF } from "@react-google-maps/api";


function MarkerComponent({listing}) {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };


  return (
        <MarkerF
          key={listing.id}
          position={listing.position}
          onClick={() => handleActiveMarker(listing.id)}
        >
          {activeMarker === listing.id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div><h1>{listing.title}</h1>{listing.company}<br/>${listing.pay}/hr<br/><button>Apply Now!</button></div>
            </InfoWindowF>
          ) : null}
        </MarkerF> );
}

export default MarkerComponent;