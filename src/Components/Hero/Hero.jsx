import React from 'react'
import './Hero.css'
import hand_hand from "../Assets/hand_icon.png"
import arrowIcon from '../Assets/arrow.png'
import heroImg from '../Assets/hero_image.png'
export default function Hero() {
  return (

  <div className='hero'>
    <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hand-hand-icon'>
                <p>new</p>
                <img src={hand_hand} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>
                latest collections
            </div>
            <img src={arrowIcon} alt="" />
        </div>
    </div>

    <div className="hero-right">
        <img src={heroImg} alt="" />
    </div>
  </div>
  
  )
}
