import React, {Component} from "react";

const Greet = (props)=>{
return (
    <div>
        <h1>Hello {props.name} hero {props.heroname}</h1>
        {props.children}
    </div>
)
}

export default Greet