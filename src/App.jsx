import React, { useEffect, useState, useRef } from "react";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import BodyContent from "./Components/BodyContent/BodyContent";
import FooterContent from "./Components/FooterContent/FooterContent";
import "./App.css";
import LoggedIn from "./Components/LoggedIn";
import LoggedOut from "./Components/LoggedOut";
import Products from "./Components/Products.jsx";
import "./Components/Products.css";

{
  /*
const hello = (e) => {
  console.log("Welcome..", e)
}
*/
}
export default function App() {
  const [input, setinput] = useState("<Input text goes here>");

  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
  ];

  const loggedin = false;

  const names = ["Madushani", "Weerasekara"];
  const namescount = names.length;

  const [num1, setnum1] = useState(5);
  const [count, setcount] = useState(0); //state variable
  const [clicks, setclicks] = useState(0);
  const [posts, setposts] = useState([]);

  let items = ["item1", "item2", "item3", "item4", "item5", "item6"];

  const countref = useRef(0);
  console.log(countref);

  const inputref = useRef();
  // console.log(inputref.current)
  // inputref.current.style.backgroundColor = 'yellow'

  const inputref2 = useRef();

  useEffect(() => {
    if (inputref.current) {
      inputref.current.style.backgroundColor = "yellow";
    }
  }, []);

  useEffect(() => {
    //setcount((count) => count+1)
    countref.current = countref.current + 1;
  });

  function handleClick() {
    setnum1(3);
  }

  const decrementFunction = () => {
    setcount(count - 1);
  };

  const incrementFunction = () => {
    setcount(count + 1);
  };

  let mynumber = 10;
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

  const handlechange = (e) => {
    if (e.target.value.length == 0) {
      setinput("<Input text goes here>");
    } else {
      setinput(e.target.value);
    }
  };

  const handleClick1 = () => {
    if (inputref2.current.value == "") {
      inputref2.current.focus();
    } else if (inputref2.current.value > 50) {
      alert("Success");
    } else {
      alert("Error");
    }
  };

  return (
    <>
      <div id="wrapper">
        <HeaderContent />

        {loggedin && <LoggedIn />}
        {!loggedin && <LoggedOut />}

        {/*
      {namescount > 0 && names.map((name)=>{
        return <h2>{name}</h2>
      })}

      {namescount == 0 && <h2>None Provided</h2>}
*/}

        <h3>Home Page</h3>

        {namescount > 0 ? (
          names.map((name, index) => {
            return <h2 key={index}>{name}</h2>;
          })
        ) : (
          <h2>None Provided</h2>
        )}

        <input type="text" onChange={handlechange} />
        <p>You have input {input} </p>
        {/*<p>Rendered {count}</p>*/}
        <p>Rendered {countref.current} </p>

        <input type="text" />

        <br></br>
        <br></br>
        <input type="text" ref={inputref2} />
        <button onClick={handleClick1}>Validate</button>

        {products.map((product) => {
          return (
            //<Products key={product.id} title={product.title} description={product.description} category={product.category} rate={product.rating.rate}/>
            <Products key={product.id} {...product} />
          );
        })}

        <BodyContent>
          <button onClick={handleClick}> Click </button>
          <p> {num1}</p>
          <button onClick={decrementFunction}> - </button>
          <button onClick={incrementFunction}> + </button>
          <p>{count}</p>

          <p>You clicked {clicks} times</p>
          <button onClick={() => setclicks(clicks + 1)}>Click me</button>

          <ul
            className="prod_list"
            style={{ color: "black", paddingLeft: "20px" }}
          >
            {posts.length > 0 ? (
              posts.map((post) => (
                <li key={post.id} style={{ listStyleType: "circle" }}>
                  {post.title}
                </li>
              ))
            ) : (
              <p style={{ color: "white" }}>Loading posts...</p>
            )}
          </ul>

          <ul>
            {items.map((item) => {
              return <li key={item}>from map method step 1 : {item}</li>;
            })}
          </ul>

          <ul>
            {items.map((item) => (
              <li key={item}>from map method step 2 : {item}</li>
            ))}
          </ul>

          <ul>
            {products.map((product) => (
              <li
                style={{ marginBottom: "2em", borderBottom: "1px solid gray" }}
                key={product.id}
              >
                {product.title}{" "}
                <img
                  style={{ width: "100px", display: "block" }}
                  src={product.image}
                  al={product.description}
                />
                <span>Price : {product.price}</span>
                <span style={{ display: "block" }}>
                  Rating : {product.rating.rate}
                </span>
              </li>
            ))}
          </ul>

          <h1>Hi, Madushani Weerasekara</h1>
          <h1 className="one">Hi, Madushani Weerasekara</h1>
          <h1 className="two">Hi, Madushani Weerasekara</h1>
        </BodyContent>
      </div>
    </>
  );
}
