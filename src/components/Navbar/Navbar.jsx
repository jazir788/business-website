"use client"

import React, { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const [scrollYProgress] = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest => {
        if(latest > 0.2){
            setNavStyle("sticky")
        } else{
            setNavStyle("")
        }
    }))

  return (
    <div className={`n-wrapper ${navStyle}`}>

        <div className='container'>
            <div className='n-container'> 
                <div className='n-logo'>
                    <span> Test</span>
                </div>

                <div className='n-right'>
                    <div className='n-menu'>
                    <Link to='wwd-wrapper' spy={true} smooth={true}>
                        <span>What we do</span>
                    </Link>
                    <Link to='hiw-wrapper' spy={true} smooth offset={100}>
                        <span>How it works</span>
                    </Link>
                    <Link to='wwi-wrapper' spy={true} smooth>
                        <span>Who we invest in</span>
                    </Link>
                    <Link to='t-wrapper' spy={true} smooth offset={100}>
                        <span>Testimonials</span>
                    </Link>
                    </div>
                    <div className='fund-button'>
                    Get Funded
                    </div>
                </div>

            </div>
    
        </div>
    
        <div className='nm-container'>
            <span>Test Mobile</span>

        {  
            !mobileMenuOpened ? 
            <BiMenuAltRight size={30} onClick={()=> setMobileMenuOpened(true)}/>
            :<RxCross2 size={30} onClick={()=> setMobileMenuOpened(false)} />
        }

        <div className='nm-menu'
        style={{transform: mobileMenuOpened && "translateX(0%)" }}>

        <Link
            onClick={()= setMobileMenuOpened(false)}
            to='wwd-wrapper'
            spy={true}
            smooth={true}
        >
            <span>What we do</span>
        </Link>
        <Link
            onClick={()= setMobileMenuOpened(false)}
            to='hiw-wrapper'
            spy={true}
            smooth={true}
        >
            <span>How it works</span>  
        </Link>    
        <Link
            onClick={()= setMobileMenuOpened(false)}
            to='wwi-wrapper'
            spy={true}
            smooth={true}
        >                           
            <span>Who we invest in</span>
        </Link>
        <Link
            onClick={()= setMobileMenuOpened(false)}
            to='t-wrapper'
            spy={true}
            smooth={true}
        >
            <span>Testimonials</span>
        </Link>
        <div className='m-funded-button'>Get Funded</div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
