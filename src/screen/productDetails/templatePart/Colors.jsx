//import React from 'react'
import PropTypes from 'prop-types'

const Colors = ({colors, handler}) => {

    const colorArr = [...new Set(colors?.map((val)=> val.color))] ;

// console.log("color", colorArr);
  return (
    <>
    <p className="mt-6 text-sm text-neutral-400 max-md:max-w-full">Color</p>

<div className="flex gap-4 self-start mt-5">

 {
    colorArr.map((val, index)=> <button key={index} onClick={()=>handler(val)} style={{backgroundColor: val}} className="shrink-0  h-[30px] rounded-[50px] w-[30px] border-2 border-slate-700 " aria-label="Select violet color"></button>)
 }
  
  <button onClick={()=>handler(undefined)}  className="flex items-center shrink-0  h-[30px] rounded-[50px] w-[30px] border-2 border-slate-700 " aria-label="Select violet color">All</button>


</div>

    </>
  )
}

Colors.propTypes = {
    colors: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired
}

export default Colors