import React from "react";
import react, { useState } from "react";
import Comp2 from "./Comp2";

function Comp1() {
  const [username, setUserName] = useState("Guest");

  return (
    <div>
      <h1>Parent</h1>
      <p>Welcome {username}</p>
      <input
        type="text"
        placeholder="Enter your user name here"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <Comp2 user={username} />
    </div>
  );
}

export default Comp1;
