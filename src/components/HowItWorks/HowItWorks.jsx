"use client";
import React from 'react';
import './HowItWorks.css';
import { features, hitFeatures } from '@/src/utils/data';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className='hiw-wrapper'>
        <div className='container'>
            <div className='hiw-container'>
                <div className='hiw-head'>
                    <span className='tag'>How it works</span>
                    <span className='title'>Unlocking potential along the growth journey</span>
                </div>

                <div className='hiw-features'>
                    {
                        hitFeatures.map((feature, i) => (
                            <div className='hiw-feature' key={i}>
                                <div className='detail'>
                                    <span className='des'>{i + 1}</span>
                                    <span className='sec-title'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>
                                </div>
                                <div className='icon'>
                                    <Image 
                                        src={feature.icon} 
                                        alt="feature" 
                                        width={128} 
                                        height={128}
                                        style={{translate: "50% 0rem"}} 
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  );
};

export default HowItWorks;
