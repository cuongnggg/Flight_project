import React from 'react'
import './Home.css'
import sky from '../../Assets/sky.mp4'
import takeoff from '../../Assets/takeoff.png'
const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Create Ever-lasting Memories with us</h1>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={sky} autoPlay muted loop className='video'></video>
        </div>
        <img src={takeoff} className='plane' />
      </div>
    </div>
  )
}

export default Home
