//import React from 'react'

import ProductGallery from "./templatePart/ProductGallery"
import Specification from "./templatePart/Specification"
import CommonBanner from '../../component/CommonBanner'
import SectionComp from '../../component/SectionComp'
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import Colors from "./templatePart/Colors"
import Size from "./templatePart/Size"
//import { addCartApi } from "../../api/Apis"
import ProductCount from "./templatePart/ProductCount"
//import { useDispatch, useSelector } from "react-redux"
//import {addCart, selectCart } from "../../feature/cartData/CartSlice"
import { userContext } from "../../context/Auth"
import { userCartContext } from "../../context/CartContext"
import { Toaster } from "react-hot-toast"
import StarComp from "../../component/StarComp"

const ProductDetails = () => {
  let {proid} =  useParams();
const {currentuser, users} = useContext(userContext);
const {cartHandler} = useContext(userCartContext)
//console.log("ussssssssssssss",users);
const[prodata, setProdata] = useState([]);
const[colorfilter, setColorfilter] = useState([]);
const[count, SetCount] = useState(1);
// const[sizefilter, setSizefilter] = useState();

useEffect( function(){
async function alldata(){
 const fetchdata = await fetch(`http://localhost:3000/product/${proid}`);
 const res = await fetchdata.json();
 setProdata(res)
//console.log(res);

}
alldata()
setColorfilter(prodata.imagegallery)
},[])


//console.log("data www", colorfilter);


const colorFilterHandler= (info) =>{
  //console.log("info vvvv", info);
  const colorfilter = prodata.imagegallery.filter((item)=> item.color == info)
  if(info == undefined){
    setColorfilter(prodata.imagegallery)
  } else {
  setColorfilter(colorfilter)
}
  
}

const sizeFilterHandler= (info) =>{
 // console.log("info vvvv", info);
  const sizefilter = prodata.imagegallery.filter((item)=> item.size == info)
  if(info == undefined){
    setColorfilter(prodata.imagegallery)
  } else {
  setColorfilter(sizefilter)
}
}

const countHandler = (sign)=>{

  if(sign == '+') {
  SetCount( count + 1  );
} else {
  if( count > 1){
  SetCount( count - 1);
}
}
}

// const dispatch = useDispatch();
// const selector = useSelector(selectCart);
// console.log(selector);


const addtoCart = ()=>{

 const imgcart = colorfilter == undefined ? prodata.imagegallery[0].thumbnailImageSrc : colorfilter[0].thumbnailImageSrc  
 cartHandler(
  prodata.id, 
  colorfilter, 
  imgcart,
  prodata.price,
  prodata.product,
  count  
)



// if(!currentuser.name){

//   window.location.href= "/login"

// } else {


//   cartHandler(
//     currentuser.email,
//     prodata.id, 
//     colorfilter, 
//     imgcart,
//     prodata.price,
//     prodata.product,
//     count  
//   )
  
// }
// dispatch(addCart({
//     ProductId: "123",
//     image: "image.png",
//     price: 100,
//     name: "Product Name",
//     count: 1,
//   }));
  

}
 
const strrating = prodata.rating / users.length;

  return (
    <>
    <Toaster position="top-center"/>
     <CommonBanner  pageName="Product Details"/>
    






 


<SectionComp>


    <div className="flex gap-5 max-md:flex-col items-start self-start">






      <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full">

      <ProductGallery gallData={colorfilter == undefined ? prodata.imagegallery : colorfilter }/> 
      {/* <ProductGallery gallData={prodata.imagegallery}/> */}
      </div>










      <div className="flex flex-col ml-5 w-5/12 max-md:ml-0 max-md:w-full">

        <div className="flex flex-col grow px-5 mt-3.5 max-md:mt-10 max-md:max-w-full">

          <h2 className="text-5xl text-black max-md:max-w-full">{prodata.product }</h2>

          <p className="mt-3.5 text-2xl font-medium text-neutral-400 max-md:max-w-full">Rs. {prodata.price }</p>

          <div className="flex gap-5 items-center self-start mt-4 text-sm text-neutral-400">

<StarComp ratedNum={strrating} />


           

            <div className="shrink-0 self-stretch w-px border border-solid bg-neutral-400 border-neutral-400 h-[30px]"></div>

            <span className="flex-auto self-stretch my-auto">5 Customer </span>

          </div>

          <p className="mt-5 text-sm text-black max-md:max-w-full">

            Setting the bar as one of the loudest speakers in its className, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

          </p>

        <Size sizes={prodata.imagegallery} handler={sizeFilterHandler}  />
          <Colors colors={prodata.imagegallery} handler={colorFilterHandler} />

          <div className="cartButtons flex gap-2.5 mt-8 text-black max-md:flex-wrap justify-around">

            <ProductCount funcHandler={countHandler} count={count}  />

            <button onClick={addtoCart} className="px-12 py-6 text-xl rounded-2xl border border-black border-solid max-md:px-5">Add To Cart</button>

         
          </div>

          <hr className="shrink-0 mt-14 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:mt-10 max-md:max-w-full" />

          <dl className="mt-12 text-base text-neutral-400">

            <div className="flex gap-5 justify-between max-w-full whitespace-nowrap w-[149px] max-md:mt-10">

              <dt>SKU</dt>

              <dd className="flex gap-3.5">

                <span className="font-medium">:</span>

                <span>{prodata.sku }</span>

              </dd>

            </div>

            <div className="flex gap-3.5 self-start mt-6 whitespace-nowrap">

              <dt className="grow">Category</dt>

              <dd className="flex gap-3.5">

                <span className="my-auto font-medium">:</span>

                <span>{prodata.category }</span>

              </dd>

            </div>

            <div className="flex gap-5 justify-between mt-5 max-w-full w-[295px]">

              <dt>Tags</dt>

              <dd className="flex gap-3.5">

                <span className="my-auto font-medium">:</span>

                {/* <span className="flex-auto">Sofa, Chair, Home, Shop</span> */}

              </dd>

            </div>

            <div className="flex gap-5 justify-between self-start mt-4 whitespace-nowrap">

              <dt className="my-auto">Share</dt>

              <dd className="flex gap-3.5 justify-between items-center font-medium">

                <span className="self-stretch my-auto">:</span>

               
              </dd>

            </div>

          </dl>

        </div>

      </div>

    </div>

 
    






<Specification user={currentuser.name} decription={prodata.proSpecification} additionalData={prodata.additionalInfo} reviews={prodata.review}/>


  <hr className="mt-16 w-full border border-solid bg-zinc-300 border-zinc-300 min-h-[1px] max-md:mt-10 max-md:max-w-full" />










</SectionComp>

    </>
  )
}

export default ProductDetails