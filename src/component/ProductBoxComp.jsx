//import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/Auth';
import { addCartApi } from '../api/Apis';

const ProductBoxComp = ({fulldata}) => {
  const {currentuser} = useContext(userContext);
//console.log("sdsdsds", fulldata.image.src);

const proid = fulldata.id;

const cartHandler = ()=>{

  if(!currentuser.name){
  
    window.location.href= "/login"
  
  } else {
  
  
    addCartApi(
      currentuser.email,
    fulldata.id, 
    '', 
    fulldata.imagegallery[0].thumbnailImageSrc,
    fulldata.price,
    fulldata.product,
    1  
    )
    
  }
  
  }



  return (
    <article className="flex flex-col w-72 max-md:ml-0 max-md:w-full relative group">

<div className="hoverBox bg-[#00000080] absolute z-50 w-full h-full  flex-col justify-center hidden group-hover:flex">

<button onClick={cartHandler} className="justify-center mb-4 self-center px-14 py-5 text-yellow-600 bg-white max-md:px-5">Add to cart</button>
<div className="btnrow flex justify-around flex-col  items-center gap-2">
  <a className=" flex text-white" href=""><img src="img/gridicons_share.png" /> Share</a>
  <Link to={`/productdetails/${proid}`} className=" flex text-white bg-teal-950 rounded-md py-2 px-4" ><img src="img/compare-svgrepo-com 1.png" /> Details</Link>
  <a className=" flex text-white"  href=""><img src="img/Heart.png" /> Like</a>
</div>
</div>



    <div className="flex flex-col grow leading-[150%] max-md:mt-8">

      <div className="flex overflow-hidden relative flex-col items-end px-16 pt-6 pb-20 w-full text-base font-medium text-white whitespace-nowrap aspect-[0.95] max-md:px-5">

        <img loading="lazy" src={fulldata.imagegallery[0].itemImageSrc} alt={fulldata.image.alt}  className="object-cover absolute inset-0 size-full" />

        <div className="relative justify-center items-center px-1 mb-24 w-12 h-12 bg-red-400 rounded-full max-md:mb-10 flex ">{fulldata.offprice}%</div>

      </div>

      <div className="flex flex-col px-4 py-6 w-full bg-gray-100">

        <h3 className="text-2xl font-semibold leading-7 text-neutral-700">{fulldata.product}</h3>

        <p className="mt-5 text-base font-medium text-zinc-500">{fulldata.sortdes}</p>

        <div className="flex gap-4 mt-2.5">

          <span className="text-xl font-semibold text-neutral-700">Rp {fulldata.price}</span>

          {/* <span className="my-auto text-base text-zinc-400">Rp 14.000.000</span> */}

        </div>

      </div>

    </div>

  </article>
  )
}

ProductBoxComp.propTypes = {
  fulldata: PropTypes.object.isRequired
}

export default ProductBoxComp