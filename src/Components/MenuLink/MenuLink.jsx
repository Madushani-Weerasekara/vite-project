import React from 'react'
import './MenuLink.css'
import { Link } from 'react-router-dom';

export default function MenuLink(props) {
  return (
    <Link to={props.url} className='link'>{props.linkname}</Link>
  )
}
