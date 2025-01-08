import React from 'react'
import DestinationCard from '../components/DestinationCard'
import AddDestination from '../components/AddDestination'


const Destination = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container-fluid'>
        <div className='d-flex justify-content-between pe-5'>
          <h1>Destinations</h1>
          <AddDestination/>
          
        </div>
        <DestinationCard/>
    </div>
  )
}

export default Destination