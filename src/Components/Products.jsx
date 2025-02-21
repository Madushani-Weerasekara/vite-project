import React from 'react'

function Products(props) {
  return (
    <ul>
        <li><b>Product Title</b>{props.title}</li>
        <li><b>Product Descripion</b>{props.description}</li>
        <li><b>Product Category</b>{props.category}</li>
        <li><b>Product Rating</b>{props.rating}</li>
    </ul>
  )
}

export default Products