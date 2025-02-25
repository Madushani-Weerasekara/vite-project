import React from "react";
import Comp4 from "./Comp4";

function Comp3(props) {
  return (
    <div>
      <h3>Child 2</h3>

      <Comp4 user={props.user} />
    </div>
  );
}

export default Comp3;
