import React,{useState} from "react";
import './color.css'
const Component = () =>{
    var [color,setColor]=useState('black');
    var red=()=>{
        console.log("hello")
        setColor('red')
    }
    var blue=()=>{
        setColor('blue')
    }
    var violet=()=>{
        setColor('violet')
    }

return(
    <>
    <body style= {{backgroundColor: color}}>
        <button onClick={red}>Red</button>
        <button onClick={blue}>Blue</button>
        <button onClick={violet}>Violet</button>

    </body>
    </>
);
}
export default Component;