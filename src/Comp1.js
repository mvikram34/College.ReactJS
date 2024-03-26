import React,{ useState } from "react";
import Comp2 from "./Comp2";
const Comp1 =() =>{
    let [c,setc]= useState("GRIET");
    let [d,setd]= useState(10);
    let [e,sete]= useState([10,20,30]);
    return(
        <>
        <Comp2 A={c} B={d} C={e} />
        </>
    );
}
export default Comp1;