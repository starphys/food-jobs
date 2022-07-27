import React from 'react'

function JobListing({ listing }) {
  return (
    <div key={listing.id}>
    <h1>{listing.title}</h1>
    <h3>Position: {listing.pos}</h3>
    <h3>Pay: {listing.pay}</h3>
    <h3>{listing.desc}</h3>
    </div>
  )
}

export default JobListing