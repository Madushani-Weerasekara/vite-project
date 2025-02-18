import React, { useEffect, useState } from 'react';
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

const [num1, setnum1] = useState(5)
const [count, setcount] = useState(0) //state variable

function handleClick () {
  setnum1(3)
}

const decrementFunction = () => {
  setcount(count-1)
}

const incrementFunction = () => {
  setcount(count+1)
}

let mynumber =10;

useEffect(()=>{
  //console.log('hi')
  if(mynumber == 5) {
    alert("Equal to 5")
  }else{
    alert("Not equal to 5")
  }
},[])

  return (
    <div id='wrapper'>
      <HeaderContent/>
      
      <BodyContent>
      <h3>Home Page</h3>
      <button onClick={handleClick}> Click </button>
      <num1></num1>
      <p> {num1}</p>
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

 
