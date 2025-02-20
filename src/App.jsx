import React, { useEffect, useState } from 'react';
import HeaderContent from './Components/HeaderContent/HeaderContent';
import BodyContent from './Components/BodyContent/BodyContent';
import FooterContent from './Components/FooterContent/FooterContent';
import './App.css';
import LoggedIn from './Components/LoggedIn';
import LoggedOut from './Components/LoggedOut';


{/*
const hello = (e) => {
  console.log("Welcome..", e)
}
*/}
export default function App() {

  const loggedin = false;

  const names = ["Madushani", "Weerasekara"]
  const namescount = names.length;
 
  const [num1, setnum1] = useState(5)
  const [count, setcount] = useState(0) //state variable
  const [clicks, setclicks] = useState(0)
  const [posts, setposts] = useState([])

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
/*
useEffect(()=>{
  //console.log('hi')
  if(mynumber == 5) {
    alert("Equal to 5")
  }else{
    alert("Not equal to 5")
  }
},[])
*/

useEffect(() => {
  document.title = `You clicked ${clicks} times`;
}, [count]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json())
    .then((blogPosts) => {
      console.log("Fetched Posts:", blogPosts); // Debugging step
      if (Array.isArray(blogPosts) && blogPosts.length > 0) {
        setposts(blogPosts);
      } else {
        console.error("No posts received or incorrect format:", blogPosts);
      }
    })
    .catch((error) => console.error("Error fetching posts:", error));
}, []);


  return (
    <>
    <div id='wrapper'>
      
      <HeaderContent/>

      {loggedin && <LoggedIn/>}
      {!loggedin && <LoggedOut/>}
{/*
      {namescount > 0 && names.map((name)=>{
        return <h2>{name}</h2>
      })}

      {namescount == 0 && <h2>None Provided</h2>}
*/}

      {namescount > 0 ? (names.map((name) => {
        return <h2>{names}</h2>
      })):(<h2>None Provided</h2>)}

      <BodyContent>

      <h3>Home Page</h3>
      <button onClick={handleClick}> Click </button>
      <p> {num1}</p>
      <button onClick={decrementFunction}> - </button>
      <button onClick={incrementFunction}> + </button>
      <p>{count}</p>

      <p>You clicked {clicks} times</p>
      <button onClick={()=> setclicks(clicks+1)}>Click me</button>

      <ul className='prod_list' style={{ color: 'black', paddingLeft: '20px' }}>
        {posts.length > 0 ? (
        posts.map((post) => (
      <li key={post.id} style={{ listStyleType: "circle" }}>
        {post.title}
      </li>
      ))
      ) : (
    <p style={{ color: 'white' }}>Loading posts...</p>
  )}
</ul>



      </BodyContent>

    </div>
    </>
  ) 
}

 
