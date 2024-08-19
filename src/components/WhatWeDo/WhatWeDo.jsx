import { features } from '@/src/utils/data'
import React from 'react'
import Image from 'next/image'
import './WhatWeDo.css'

const WhatWeDo = () => {
  return (
    <div className='wwd-wrapper'>
        <div className='container'>
            <div className='wwd-container'>
                <div className='wwd-head'>
                    <span className='tag'>What we do</span>
                    <span className='title'>Empowering founders with non dilutive capital and execution expertise</span>
                    <span className='description'>Here is how we can evaluate</span>
        
                </div>
                <div className='wwd-blocks'>
                    <div className='wwd-block'>
                        <span className='sec-title'>Blue Advances</span>
                        <span className='text'>Fund recurring growth expenses e.g. customer acquisitions, inventory</span>
                        
                        <div className='block-features'>
                            {
                                features.slice(0,3).map((feature, i) => (
                                    <div className="block-feature" key={i}>
                                    <Image 
                                        src= {feature.icon} 
                                        alt="feature" 
                                        width={60} 
                                        height={60} />
                                    <span>{feature.title}</span>
                                    </div>
                                ))}
                        </div>
                        </div>
                    <div className='wwd-block'>
                    <span className='sec-title'>Blue Seed</span>
                    <span className='text'>Fund one-offs to scale e.g. product, hiring </span>
                    
                    <div className='block-features'>
                        {
                            features.slice(3,6).map((feature, i) => (
                                <div className="block-feature" key={i}>
                                <Image 
                                    src= {feature.icon} 
                                    alt="feature" 
                                    width={60} 
                                    height={60} />
                                <span>{feature.title}</span>
                                </div>
                            ))}
                    </div>
                </div>
        
            </div>

            <div className='wwd-support'>
                <div>
                        <span className='sec-title'>Blue Growth Support</span>
                        <span className='des'> Data Insights and full stack expertise to supercharge growth
                        </span>
                </div>

                <div>
                    <span className='text'>
                            Actionable data insights by connecting revenue, marketing and social media platforms
                    </span>
                    <span>
                            engineering, marketing analytics, partnerships, brand, intellectual property, market
                            expansion, talent management 
                    </span>
                </div>
            </div>

        </div>
      
    </div>
    </div>
  )
}

export default WhatWeDo
