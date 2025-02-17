import React from 'react';
import HeaderContent from './Components/HeaderContent/HeaderContent';
import BodyContent from './Components/BodyContent/BodyContent';
import FooterContent from './Components/FooterContent/FooterContent';

{/*
const hello = (e) => {
  console.log("Welcome..", e)
}
*/}
export default function App() {
  return (
    <div id='wrapper'>
      <HeaderContent/>
      
      <BodyContent>
      <h3>Home Page</h3>
      </BodyContent>
        
       
      {/*
      <BodyContent>
        <button onClick={hello}>Click Here</button>
      </BodyContent>

      <BodyContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro amet dolorum excepturi velit ullam, architecto minima atque nostrum. Laudantium non optio magnam ipsum et ea repudiandae sint ullam consequatur?</p>
      </BodyContent>
      */}
    </div>
  ) 
}

 
