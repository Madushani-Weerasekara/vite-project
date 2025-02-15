import React from 'react'
import './BodyContent.css'

export default function BodyContent(props) {
  return (
    <div id='bodycontent'>
        <p>Body Content</p>
        {props.children}
    </div>
  )
}
