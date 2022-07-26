import React, { useState } from "react";
import { InfoWindowF, MarkerF } from "@react-google-maps/api";


function Markers({listings}) {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };


  return (<div>
    {listings.map(({ id, title, company, pay, position }) => (
        <MarkerF
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div><h1>{title}</h1>{company}<br/>${pay}/hr<br/><button>Apply Now!</button></div>
            </InfoWindowF>
          ) : null}
        </MarkerF> ))}</div>);
}

export default Markers;