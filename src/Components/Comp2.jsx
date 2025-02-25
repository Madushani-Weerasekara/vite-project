import React from "react";

function Comp2(props) {
  return (
    <div>
      <h3>Child 1</h3>
      <p>Welcome {props.user}</p>
    </div>
  );
}

export default Comp2;
