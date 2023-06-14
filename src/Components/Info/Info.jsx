import React from 'react'
import './info.css'
import {RxCalendar} from 'react-icons/rx'
import {BsBookmarkCheck, BsShieldCheck} from 'react-icons/bs'


const Info = () => {
  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="tittleDiv flex">
          <h2>Travel to make memories all around the world</h2>
          <button className='btn'>View All</button>
        </div>

        <div className="cardsDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div>
            <span className='cardTittle'>Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon'/>
            </div>
            <span className='cardTittle'>Smart Checklist</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className='cardTittle'>Save and more</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          
        </div>
      </div>
      
    </div>
  )
}

export default Info
