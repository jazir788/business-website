import React from 'react'
import './Hero.css'
import EmailBox from '../EmailBox/EmailBox'

const Hero = () => {
  return (
    <div className='h-wrapper'>
        <div className='container'>
            <div className='h-container'>
            <div className='h-left'>

            </div>

            <div className='h-right'>
            <div className='h-title'>
            <span>Redefine How</span>
            <span>You Grow your</span>
            <span>Digital Business</span>
            </div>

            <div className='h-desc'>
                Revenue based funding and execution support designed for early stage founders
            </div>

            <EmailBox />
            </div>
            

            </div>
        </div>
    </div>
  )
}

export default Hero
