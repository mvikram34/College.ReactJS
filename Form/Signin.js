import React,{ useContent,useState} from "react";
import Global from "./Global";
const Signin = () =>{
    let data = useContext(Global);
    let [uname,setUname]=useState("");
    let [pass,setPass]=useState("");
    const val = (e) =>{
        e.preventDefault();
        if(data.uname == uname && data.pass == pass){
            console.log("Login Successful");
        }
        else{
            console.log("Login failed!!");
        }
    }
    return(
        <>
        <h1><center>Login</center></h1>
        <center>USERNAME:   <input type="text" value={uname} onChange={(e)=>setUname(e.target.value)}></input><br></br>
        PASSWORD:   <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}></input><br></br>
        <button type="Submit" >Submit</button></center>
        
        </>
    )
}
export default Signin