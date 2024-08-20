import React from 'react'
import './Hero.css';
import salebanner1 from '../Assets/salebanner-1.png';
import salebanner2 from '../Assets/salebanner-2.png';


const Hero = () => {
  return (
    <div className='hero'>
      
        <img src={salebanner1} alt="" />
        <button className="button-1" role="button">
        <span className="text">SHOP NOW</span>
      </button>

        <img src={salebanner2} alt="" />
        <button className="button-2" role="button">
        <span className="text">SHOP NOW</span>
      </button>

    </div>
  )
}

export default Hero