import React from 'react'
import HeroText from './HeroText'
import bg from '../assets/bg.png'

const HeroSection = () => {
  return (
    <div className='hero'>
        <img src={bg} alt="" />
        <div className='text'>
            <HeroText/>
        </div>
    </div>
  )
}

export default HeroSection
