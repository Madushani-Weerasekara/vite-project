import React from 'react'
import './HeaderContent.css'  // Import HeaderContent styles
import MenuLink from '../MenuLink/MenuLink'
import logo from '../../assets/react.svg' // Import the logo
export default function HeaderContent() {
  return (
    <div id='navcontent'>
      <a href='http://www.react.dev'><img src={logo} alt='React'></img></a>
      <div>
        <MenuLink linkname="Home" url="#home" />
        <MenuLink linkname="About" url="#about" />
        <MenuLink linkname="Contact" url="#contact" />
        <MenuLink linkname="Login" url="#login" />
     
      </div>
    </div>
       
  )
}


