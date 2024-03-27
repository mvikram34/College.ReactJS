import React,{ useState} from "react";
import Signin from "./Signin";
const Registration =()=>{
    let [uname,setUname]=useState("");
    let [pass,setPass]=useState("");
    let [place,setPlace]=useState("");
    let [gender,setGender]=useState("");
    
    let v="v";
    return(
        <>
        <h1><center><b>Sign Up</b></center></h1>
        <center><b>Username:   </b><input type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
        <br></br>
        <b>Password:   </b><input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}></input>
        <div>
            Place:   <select value={place} onChange={(e)=>setPlace(e.target.value)}>
                <option value="h">Hyderabad</option>
                <option value="w">Warangal</option>
                <option value={v}>Vizag</option>
                <option value="c">Chennai</option>
            </select>
        </div>
        <div>
            Gender:   <input type="checkbox" value={gender} onChange={(e)=>setGender(e.target.value)}></input>
        </div>
        <button type="submit" onClick={Signin}>Submit</button></center>
        </>
    )
}
export default Registration