import React from 'react'
import './Lounge.css'
import flight_attendant from '../../Assets/flight_attendant.png'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        </div>

        <div className="imgDiv">
          <img src={flight_attendant} alt="" />
        </div>

        <div className="grids grid">
          <div className="singleGrid">
            <span className='gridTitle'>Help through the flight</span>
            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite dstinations.</p>
          </div>
          <div className="singleGrid">
            <span className='gridTitle'>Priority Boarding</span>
            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite dstinations.</p>
          </div>
          <div className="singleGrid">
            <span className='gridTitle'>Care on the flight</span>
            <p>You can also call airlines from your phone and book a flight ticket to one of your favorite dstinations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge
