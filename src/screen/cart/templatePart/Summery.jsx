//import React from 'react'
//import React from 'react'
import PropTypes from 'prop-types'


const Summery = ({ subtotal, total }) => {   

    return (
  
      <div className="flex flex-col grow px-20 pt-7 pb-20 mx-auto w-full bg-orange-50 max-md:px-5 max-md:mt-8">
  
        <h2 className="self-center text-3xl font-semibold text-black">Cart Totals</h2>
  
        <div className="flex gap-5 justify-between mt-20 max-md:mt-10">
  
          <div className="flex flex-col self-start text-base font-medium text-black whitespace-nowrap">
  
            <div>Subtotal</div>
  
            <div className="mt-11 max-md:mt-10">Total</div>
  
          </div>
  
          <div className="flex flex-col">
  
            <div className="self-end text-base text-neutral-400">Rs.  {subtotal}</div>
  
            <div className="mt-11 text-xl font-medium text-yellow-600 max-md:mt-10">Rs.  {total}</div>
  
          </div>
  
        </div>
  
        <button className="p-4 mt-12 ml-2.5 text-xl text-black rounded-2xl border border-black border-solid max-md:px-5 max-md:mt-10 max-md:mr-2.5">
  
          Check Out
  
        </button>
  
      </div>
  
    );
  
  };

  Summery.propTypes = {

    subtotal: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,

  }


export default Summery