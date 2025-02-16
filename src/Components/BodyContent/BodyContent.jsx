import React from 'react'
import './BodyContent.css'

export default function BodyContent(props) {
  return (
    <div id='bodycontent'>
        <h1>Body Content</h1>
        {props.children}
    </div>
  )
}
