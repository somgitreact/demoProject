//import React from 'react'

import { useContext, useState } from "react"
import CommonBanner from "../../component/CommonBanner"
import FormInput from "../../component/formComponent/FormInput"
import SectionComp from "../../component/SectionComp"
import { userContext } from "../../context/Auth"


const Login = () => {
const {currentuser, Logindata, Logout} = useContext(userContext)
  const [login, setLogin] = useState({});

 const formdata = (event )=>{
const{name, value}= event.target;
setLogin( (prev)=>{ return {...prev, [name]:value}});
 }




 const logSubmit = ()=>{

  Logindata(login.username, login.pass)

 }




  return (
    <>
    <CommonBanner pagename="Log In" />
    <SectionComp>
    <div>Login {currentuser.name}</div>
    
   
      <FormInput type="text" label="user name" name="username" val={login.username} keypress={formdata} />
      <FormInput type="password" label="Password" name="pass" val={login.pass} keypress={formdata} />
      <button onClick={logSubmit}>login</button>
      <button onClick={Logout}>Logout</button>



</SectionComp>
    </>
  )
}

export default Login