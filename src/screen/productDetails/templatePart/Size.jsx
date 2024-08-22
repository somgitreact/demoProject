// import React from 'react'
import PropTypes from 'prop-types'

const Size = ({sizes, handler}) => {

    const sizeArr = [...new Set(sizes?.map((val)=> val.size))];

  return (
    <>
      <p className="mt-8 text-sm text-neutral-400 max-md:max-w-full">Size</p>

<div className="flex gap-4 self-start mt-5 text-sm text-black whitespace-nowrap">

{ sizeArr.map((val, index)=> <button key={index} onClick={()=>handler(val)} className="px-3 text-center font-semibold text-color bg-orange-50 rounded-md h-[30px] w-[40px]">{val}</button>)}
<button onClick={()=>handler(undefined)} className="px-3 text-center font-semibold text-color bg-orange-50 rounded-md h-[30px] w-[40px]"> All </button>
  

  {/* <button className=" bg-yellow-600 px-2 rounded-md h-[30px] w-[30px]">XL</button>

  <button className="bg-orange-50 rounded-md h-[30px] w-[30px]">XS</button> */}

</div>

    </>
  )
}

Size.propTypes = {
    sizes: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired
}

export default Size