import React from 'react'
import './Footer.css'
import airplane from '../../Assets/airplane.png'
import {TiSocialFacebook} from 'react-icons/ti'
import {FaPinterestP} from 'react-icons/fa'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={airplane} alt="" className='logo'/>
          </div>
          <p>Your mind should be stronger than your feeling, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <FaPinterestP className='icon'/>
          </div>
        </div>

        <div className="footerLinks">
          <span className='linkTitle'>Information</span>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Flight Status</a>
          </li>
          <li>
            <a href="/">Travel</a>
          </li>
          <li>
            <a href="/">Check-in</a>
          </li>
          <li>
            <a href="/">Manage your booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className='linkTitle'>Quick Guide</span>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">How to</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Baggage</a>
          </li>
          <li>
            <a href="/">Route Map</a>
          </li>
          <li>
            <a href="/">Our communitites</a>
          </li>
        </div>


      </div>
      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href="" target='blank'>CUONG</a></p>
      </div>

    </div>
  )
}

export default Footer
