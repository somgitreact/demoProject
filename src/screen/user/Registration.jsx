//import React from 'react'

import { useState } from "react"
import CommonBanner from "../../component/CommonBanner"
import FormInput from "../../component/formComponent/FormInput"
import SectionComp from "../../component/SectionComp"
import { registration } from "../../api/Apis"

const Registration = () => {

  const[regisData, SetRegisData] = useState({});

  const formdata = (event)=>{
    const{name, value} = event.target;
    SetRegisData((prev)=>{
    return{...prev, [name]:value} 
    })

  }
console.log(regisData);
const submit = (event) => {
  event.preventDefault();
  registration(regisData );
  window.location.href = '/login';
};

  return (
    <>
    <CommonBanner pageName="Registration" />
    <SectionComp>
     
    <form >
        <FormInput type="text" label="Name" val={regisData.name} keypress={formdata} name="name" />
        <FormInput type="email" label="Email" val={regisData.email} keypress={formdata} name="email"/>
        <FormInput type="password" label="Password" val={regisData.password} keypress={formdata} name="password"/>
        <button onClick={submit} className="self-center px-16 py-6 mt-10 max-w-full text-xl text-black rounded-2xl border border-black border-solid w-[318px] max-md:px-5 max-md:mt-10">

            Registration

          </button>
          </form>
    </SectionComp>
    </>
  )
}

export default Registration