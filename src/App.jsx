import React from 'react'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import FooterContent from './Components/FooterContent/FooterContent'
import MenuLink from './Components/MenuLink/MenuLink'

export default function App() {
  return (
    <div id='wrapper'>
     
      <HeaderContent />
      <MenuLink />

      <BodyContent>
        <button>Click Here</button>
      </BodyContent>

      <BodyContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro amet dolorum excepturi velit ullam, architecto minima atque nostrum. Laudantium non optio magnam ipsum et ea repudiandae sint ullam consequatur?</p>
      </BodyContent>
      
    </div>
  ) 
}

 
