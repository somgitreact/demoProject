//import React from 'react'
import SectionComp from '../../../component/SectionComp'

const Inspritation = () => { 
  return (
    <SectionComp>
    <div className="self-stretch py-11 pl-20 mt-16 w-full bg-red-50 max-md:pl-5 max-md:mt-10 max-md:max-w-full">

      <div className="flex gap-5 max-md:flex-col max-md:gap-0">

        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">

          <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">

            <h2 className="text-4xl font-bold leading-10 text-neutral-700 max-md:max-w-full">50+ Beautiful rooms inspiration</h2>

            <p className="mt-3 font-medium leading-6 text-zinc-600 max-md:max-w-full">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>

            <a href="#" className="justify-center self-start px-9 py-4 mt-7 font-semibold text-white bg-yellow-600 leading-[150%] max-md:px-5">Explore More</a>

          </div>

        </div>

        <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">

          <img loading="lazy" src="/img/Inspirations.png" alt="Beautiful room inspiration" className="grow w-full aspect-[1.52] max-md:mt-10 max-md:max-w-full" />

        </div>

      </div>

    </div>
    </SectionComp>
  )
}

export default Inspritation