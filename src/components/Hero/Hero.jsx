import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
function Hero() {
  return (
    <>
        <section className="hero-wrapper">
            <div className="flexCenter paddings innerWidth hero-container">
                <div className="flexColStart hero-left">
                    <div className=" hero-title">
                    <div className="orange-circle"/>
                        <motion.h1
                         initial={{y:'6rem',opacity:0}}
                         animate={{y:0,opacity:1}}
                         transition={{
                            duration:2,
                            type:"spring",                            
                         }}
                         >   
                        Discover <br/>
                        Most Suitable<br/>
                        Property                           
                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-desc">
                        <span>Find a variety of properties that suit you very easily</span>
                        <span>Forget all difficulties of finding a resindence for you</span>
                    </div>
                    <div className="flexCenter hero-searchbar">
                     <HiLocationMarker color='var(--blue)' size={25}/>
                     <input type="text" />
                     <button className='button'>Search</button>
                    </div>
                    <div className="flexCenter hero-stats">
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp start={8700} end={9000} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Options</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp start={1900} end={2000} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={25} end={30} duration={2}/>
                            <span>+</span>
                        </span>
                            <span className='secondaryText'>Awards winning</span>
                        
                    </div>
                    </div>
                </div>
                <div className="hero-right">
                    <motion.div className="image-container"
                    initial={{x:'7rem',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{
                        duration:2,
                        type:"spring",  
                    }}
                    >
                        <img src="/hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero
