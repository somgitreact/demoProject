//import React from 'react'
//import PropTypes from 'prop-types'
import CatBox from '../../../component/CatBox'
import SectionComp from '../../../component/SectionComp'

const CategorySec = () => { 

    const Data = [
        {"img":  'img/dining.png', "catTitle": 'Bedroom'},
        {"img":  'img/living.png', "catTitle": 'Dining'},
        {"img":  'img/Image-living room.png', "catTitle": 'Living'}
    ]



  return (
   
    <SectionComp>
    <h2 className="mt-16 text-3xl font-bold text-zinc-800 max-md:mt-10 text-center">Browse The Range</h2>

<p className="mt-3 text-xl text-center text-stone-500 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<div className="mt-16 w-full  max-md:mt-10 max-md:max-w-full">

  <div className="flex gap-5 max-md:flex-col max-md:gap-0">

{ Data.map((val, index)=> <CatBox key={index} catdtl={val}/>)}

  </div>
    </div>
    </SectionComp>
    
  )
}

//CategorySec.propTypes = {}

export default CategorySec