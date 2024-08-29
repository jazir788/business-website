import React from 'react'
import './OurDiff.css'
import { features, ourDiffFeatures } from '@/src/utils/data'
import Image from 'next/image'

const OurDiff = () => {
  return (
    <div className='od-wrapper'>
        <div className='container'>
            <div className='od-container'>
                <div className='od-head'>
                    <span className='tag'>Our Difference</span>
                    <span className='title'>Fair Capitle, hassle free</span>
                    <span className='text'> Our mission is to level the playing field for early stage growth capital.
                    <br /> We provide capital that is unbiased, flexible and non dilutive with the execution of support to
                    accelerate value creation.</span>
                </div>
                <div className='od-features'>
                {
                    ourDiffFeatures.map((feature, i) => (
                        <div key={i} className='od-feature'>
                            <Image src={feature.icon} alt ="feature" width={128} height={128}/>
                            <span className='sec-title'>{feature.title}</span>
                            <span className='text'>{feature.des}</span>
                        </div>                    
                    ))
                }
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default OurDiff
