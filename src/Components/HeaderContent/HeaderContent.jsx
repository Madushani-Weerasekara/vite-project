import React from 'react'
import './HeaderContent.css'  // Import HeaderContent styles
import MenuLink from '../MenuLink/MenuLink'
import logo from '../../assets/react.svg' // Import the logo
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
 

export default function HeaderContent() {
  return (
    <div id='navcontent'>
      <Link to='http://www.react.dev'>
      <img src={logo} alt='React'></img>
      </Link>
      <div>
        <MenuLink linkname="Home" url="/" />
        <MenuLink linkname="Blog" url="/blog" />
        <MenuLink linkname="About us" url="/aboutus" />
        <MenuLink linkname="Login" url="/login" />
     
      </div>
    </div>
       
  )
}


