import React, { useState } from 'react';
import HeaderContent from './Components/HeaderContent/HeaderContent';
import BodyContent from './Components/BodyContent/BodyContent';
import FooterContent from './Components/FooterContent/FooterContent';
import './App.css';

{/*
const hello = (e) => {
  console.log("Welcome..", e)
}
*/}
export default function App() {

const [count, setcount] = useState(0) //variable

const decrementFunction = () => {
  setcount(count-1)
}

const incrementFunction = () => {
  setcount(count+1)
}

  return (
    <div id='wrapper'>
      <HeaderContent/>
      
      <BodyContent>
      <h3>Home Page</h3>
      <p>Counter</p>
      <button onClick={decrementFunction}> - </button>
      <button onClick={incrementFunction}> + </button>
      <p>{count}</p>
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

 
