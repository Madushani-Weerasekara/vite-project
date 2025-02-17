import React from 'react'
import './BodyContent.css'

export default function BodyContent(props) {
  return (
    <div id='bodycontent'>
        {props.children} {/* Render the passed content here */}
    </div>
  );
}
