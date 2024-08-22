//import React from 'react'
//import PropTypes from 'prop-types'

const Slider = () => {
  return (
    <section className="flex overflow-hidden relative z-10 flex-col justify-center items-end self-stretch px-16 py-20 -mt-1 w-full text-base font-bold min-h-[717px] text-zinc-800 max-md:px-5 max-md:max-w-full">

    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd473b35787f439460886cb2b9285a68179757d7b979d8431b5ba9d40849f29?apiKey=726938d2862b4defb03430bff0a5f2a6&" alt="Background image for new arrival section" className="object-cover absolute inset-0 size-full" />

    <div className="flex relative flex-col pt-16 pr-20 pb-9 pl-10 mt-20 mb-3.5 max-w-full bg-yellow-50 rounded-xl w-[643px] max-md:px-5 max-md:mt-10">

      <h2 className="font-semibold tracking-[3px] max-md:max-w-full">New Arrival</h2>

      <h3 className="mt-5 text-5xl text-yellow-600 leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">Discover Our New Collection</h3>

      <p className="mt-8 text-lg font-medium leading-6 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

      <a href="#" className="justify-center items-center px-16 py-6 mt-12 max-w-full text-white uppercase bg-yellow-600 w-[222px] max-md:px-5 max-md:mt-10">Buy Now</a>

    </div>

  </section>
  )
}

//Slider.propTypes = {}

export default Slider