import React from "react";
import Comp3 from "./Comp3";

function Comp2(props) {
  return (
    <div>
      <h3>Child 1</h3>
      {/*<p>Welcome {props.user}</p>*/}

      <Comp3 user={props.user} />
    </div>
  );
}

export default Comp2;
