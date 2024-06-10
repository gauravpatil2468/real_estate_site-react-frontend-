import React from 'react'
import './Companies.css'
function Companies() {
  return (
    <>
      <section className='c-wrapper'>
        <div className="paddings innerWidth companies flexCenter">
            <img className="c-image"src="/equinix.png" alt="" />
            <img className="c-image" src="/prologis.png" alt="" />
            <img className="c-image" src="/realty.png" alt="" />
            <img className="c-image" src="/tower.png" alt="" />
        </div>
    </section>
    </>
  )
}

export default Companies
