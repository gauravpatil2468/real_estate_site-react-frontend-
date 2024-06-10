import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import { px } from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
function Header() {
  const [menuOpened,setMenuOpened] = useState(false)
  function handleClick(){
    setMenuOpened(!(menuOpened))
  }
  function getStyle(value){
    if(document.documentElement.clientWidth <= 800){
      return{right: !(value) &&  "-100%"}
    }
  }
  function outsideHandler(){
    setMenuOpened(false)
  }
  return (
    <>
      <section className='h-wrapper'>
        <div className="flexCenter paddings innerWidth h-container">
            <img src="/logo.png" alt="logo" width={100} />
            <OutsideClickHandler onOutsideClick={outsideHandler}>
            <div className="flexCenter h-menu" style={getStyle(menuOpened)}>
                <a href="">Residencies</a>
                <a href="">Our value</a>
                <a href="">Contact us</a>
                <a href="">Get started</a>
                <button className='button'>
                <a href="">Contact</a>
                </button>
               
            </div>
            </OutsideClickHandler>
            <div className="menu-icon">
          <BiMenuAltRight size={30} onClick={handleClick}/>
        </div>
        </div>
      </section>
    </>
  )
}

export default Header
