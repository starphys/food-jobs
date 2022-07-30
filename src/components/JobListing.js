import React from 'react'
import ApplyButton from './ApplyButton'

function JobListing({ listing }) {
  return (
    <div key={listing.id}>
    <h1>{listing.pos}</h1>
    <h3>{listing.title}</h3>
    <h3>Pay: {listing.pay}</h3>
    <h3>{listing.desc}</h3>
    <ApplyButton/>
    </div>
  )
}

export default JobListing
