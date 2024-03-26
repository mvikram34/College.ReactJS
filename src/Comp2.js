import React from "react";
import Comp3 from "./Comp3";

var Comp2=(props)=>{
    return(
        <>
        <Comp3 {...props} />
        <h1>Username is{props.A}</h1>
        <h1>Value of n is{props.B}</h1>
        <h1> My array is{props.C}</h1>
        </>
    );

}
export default Comp2;