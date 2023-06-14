import React from 'react'
import './Travelers.css'

import Paris from '../../Assets/Paris.jpg'
import London from '../../Assets/London.jpg'
import NewYork from '../../Assets/NewYork.jpg'
import JohnW from '../../Assets/JohnW.png'

//use high order array method : Map() to display all the data

const travelers = [
  {
    id: 1,
    destinationImage: Paris,
    travelerImage: JohnW,
    travelerName: 'Paris Louvre',
    socialLink: 'Musée du Louvre'
  },
  {
    id: 2,
    destinationImage: London,
    travelerImage: JohnW,
    travelerName: 'The Great British',
    socialLink: 'Big Ben, The Tower Clock'
  },
  {
    id: 3,
    destinationImage: NewYork,
    travelerImage: JohnW,
    travelerName: 'Liberty Enlightening the World',
    socialLink: 'Statue of Liberty'
  },
]

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>


        <div className="travelersContainer grid">
          {/* Single passanger card */}
          {/*  */}
          {
            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} alt="" className='destinationImage' />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} alt="" className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Travelers
