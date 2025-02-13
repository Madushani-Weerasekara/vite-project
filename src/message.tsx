import React from "react";

//PascalCasing
function Message() {
    //JSX: JavaScript XML
    const name = "Madu";
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;

}

export default Message;