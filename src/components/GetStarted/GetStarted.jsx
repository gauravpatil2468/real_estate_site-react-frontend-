import React from 'react'
import './GetStarted.css'
function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="g-container paddings innerWidth">
      <div className="flexColCenter inner-container">
        <span className='primaryText'>Get Started</span>
        <span className='secondaryText'>
          Subscribe and find prices
          <br/>
          Find your residence
        </span>
        <button className='button'>
        <a href="mailto:xyz@gmail.com">Get Started</a>
        </button>
 
      </div>
      </div>
    </section>
  )
}

export default GetStarted
