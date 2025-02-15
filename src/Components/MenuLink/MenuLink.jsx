import React from 'react'
import './MenuLink.css'

export default function MenuLink(props) {
  return (
    <a href={props.url} className='link'>{props.linkname}</a>
  )
}
