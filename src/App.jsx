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
},[count]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then((resp) => resp.json())
    .then((blogPosts) => {
      console.log("Fetched Posts:", blogPosts); // ✅ Check if data is coming
      setposts(blogPosts);
    })
    .catch((error) => console.error("Error fetching posts:", error));
}, []);


  return (
    <>
    <div id='wrapper'>
      <HeaderContent/>
      
      <BodyContent>
      <h3>Home Page</h3>
      <button onClick={handleClick}> Click </button>
      <p> {num1}</p>
      <button onClick={decrementFunction}> - </button>
      <button onClick={incrementFunction}> + </button>
      <p>{count}</p>

      <p>You clicked {clicks} times</p>
      <button onClick={()=> setclicks(clicks+1)}>Click me</button>

      <ul className='prod_list' style={{ color: 'white', paddingLeft: '20px' }}>
      {posts.length > 0 ? (  // ✅ Only map if posts exist
        posts.map((post) => (
          <li key={post.id} style={{ listStyleType: "circle"}}>
            {post.title}
          </li>
    ))
  ) : (
    <p>Loading posts...</p> // ✅ Show a message until data is available
  )}
</ul>


      </BodyContent>

    </div>
    </>
  ) 
}

 
