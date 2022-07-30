import React from 'react'
import Button from './Button'

function JobListing({ listing }) {
  return (
    <div key={listing.id}>
    <h1>{listing.pos}</h1>
    <h3>{listing.title}</h3>
    <h3>Pay: {listing.pay}</h3>
    <h3>{listing.desc}</h3>
    <Button onClick={()=>{alert("I'm pressed :(")}}>More details</Button>
    </div>
  )
}

export default JobListing
