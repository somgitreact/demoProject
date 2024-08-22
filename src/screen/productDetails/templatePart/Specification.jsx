import PropTypes from 'prop-types'


import { useEffect, useState } from 'react'
import SectionComp from '../../../component/SectionComp'
import Review from './Review';
const Specification = ({decription, additionalData, reviews}) => {

const [specificationData, setSpecificationData] = useState();

useEffect( function(){
  setSpecificationData(decription)
},[])


const getData = ( data)=> setSpecificationData(data)
const getReview = ()=> setSpecificationData("review")
  return (
   <>
   <SectionComp>
 

<nav className="flex gap-5 max-w-full text-2xl text-neutral-400 w-full max-md:flex-wrap justify-evenly pt-9">

  <span onClick={()=>getData(decription)} className="font-medium text-black">Description</span>

  <span onClick={()=>getData(additionalData)} className=" my-auto">Additional Information</span>

  <span onClick={()=>getReview("review")} className="">Reviews </span>

</nav>
<hr className="self-stretch my-14 w-full border border-solid bg-zinc-300 border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
<div className='showInfo'>

{specificationData == undefined ? decription : specificationData}

{
  specificationData == "review" && <Review reviewData={reviews}/>
}



</div>





    </SectionComp>
   </>
  )
}
Specification.propTypes = {
  decription:PropTypes.string, 
  additionalData:PropTypes.string, 
  reviews:PropTypes.array
}
export default Specification